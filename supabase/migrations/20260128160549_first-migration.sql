-- Create table
create table movies (
    id uuid primary key default gen_random_uuid (),
    name text not null,
    description text,
    created_at timestamptz not null default now()
);

-- Indexes
create index movies_created_at_idx on movies (created_at);

-- Enable Row Level Security
alter table movies enable row level security;

-- RLS policies for authenticated users only

-- ALL
create policy "Authenticated can do all" on movies for all to authenticated using (true);

-- Create users table linked to auth.users
create table public.users (
    id uuid primary key references auth.users (id) on delete cascade,
    name text not null,
    email text not null,
    created_at timestamptz not null default now()
);

-- Index
create index users_created_at_idx on public.users (created_at);

-- Enable RLS
alter table public.users enable row level security;

-- RLS policies (authenticated users only)
-- SELECT
create policy "Users can read own profile" on public.users for
select to authenticated using (
        (
            select auth.uid ()
        ) = id
    );

-- Function: create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.users (id, email, name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'display_name'
  );

  return new;
end;
$$;

-- Trigger: fire after auth user is created
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();