CREATE TABLE personen (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    alter INTEGER,
    email TEXT UNIQUE NOT NULL
);