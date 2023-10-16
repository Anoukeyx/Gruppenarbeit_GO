SELECT Person.*, Bild.*
FROM Person
JOIN Bild ON person.bild_id = bild.id;

SELECT person.name, bild.image_url, bild.description
FROM person
JOIN bild ON person.bild_id = bild.id;
