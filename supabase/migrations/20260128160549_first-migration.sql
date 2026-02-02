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

-- SELECT
create policy "Authenticated can read movies" on movies for
select to authenticated using (true);

-- INSERT
create policy "Authenticated can insert movies" on movies for
insert
    to authenticated
with
    check (true);

-- UPDATE
create policy "Authenticated can update movies" on movies for
update to authenticated using (true);

-- DELETE
create policy "Authenticated can delete movies" on movies for delete to authenticated using (true);

-- Create users table linked to auth.users
create table public.users (
    id uuid primary key references auth.users (id) on delete cascade,
    name text,
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

-- INSERT
create policy "Users can insert own profile" on public.users for
insert
    to authenticated
with
    check (
        (
            select auth.uid ()
        ) = id
    );

-- UPDATE
create policy "Users can update own profile" on public.users for
update to authenticated using (
    (
        select auth.uid ()
    ) = id
)
with
    check (
        (
            select auth.uid ()
        ) = id
    );

-- DELETE
create policy "Users can delete own profile" on public.users for delete to authenticated using (
    (
        select auth.uid ()
    ) = id
);