/*-- Create the directors table
CREATE TABLE Person (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email_adress VARCHAR(255) NOT NULL,
    telefon float NOT NULL,
    birth_date DATE,
    Rolle_id VARCHAR(255) NOT NULL,
    firma VARCHAR,
    hash_code INTEGER
    
);

-- Create the movies table
CREATE TABLE Rolle (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director_id INTEGER REFERENCES directors(director_id),
    release_date DATE,
    genre VARCHAR(50),
    rating VARCHAR(5) 
); */

-- Insert Persons
INSERT INTO Person (first_name, last_name, birth_date, email_adress, telefon, birth_date, Rolle_id, firma, hash_code)



-- Insert Persons for each role
INSERT INTO movies (title, director_id, release_date, genre, rating)
VALUES 
('Marco Reus', (SELECT id FROM Persons WHERE last_name = 'Reus'));