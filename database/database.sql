CREATE DATABASE firstapi;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    email TEXT
);

INSERT INTO users(name, email) VALUES
    ('joe','joe@ibm.com'),
    ('ryan','ryan@faztweb.com');