SELECT p.*, b.*
FROM "Person" p
JOIN "Bilder" b ON p.bilder_id = b.id_bild;


/*SELECT person.vorname, bild.image_url, bild.description
FROM person
JOIN bild ON person.bild_id = bild.id;*/
