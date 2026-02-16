
create table public.friendships (

    user_low uuid not null
        references public.users(id) on delete cascade,

    user_high uuid not null
        references public.users(id) on delete cascade,

    created_at timestamptz not null default now(),

-- enforce high/low ordering
constraint enforce_order check (user_low < user_high),

-- composite primary key prevents duplicates
constraint friendships_pkey
        primary key (user_low, user_high)
);
-- needed for reverse lookups
create index idx_friendships_user_high on public.friendships (user_high);

-- Enable Row Level Security
alter table friendships enable row level security;

--Insert function
create or replace function public.add_friend(other_user uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
    uid uuid := auth.uid();
    low_id uuid;
    high_id uuid;
begin
    -- must be logged in
    if uid is null then
        raise exception 'Not authenticated';
    end if;

    -- prevent self-friend
    if uid = other_user then
        raise exception 'Cannot friend yourself';
    end if;

    -- determine ordering
    low_id := least(uid, other_user);
    high_id := greatest(uid, other_user);

    -- insert safely (ignore duplicates)
    insert into public.friendships (user_low, user_high)
    values (low_id, high_id);
end;
$$;