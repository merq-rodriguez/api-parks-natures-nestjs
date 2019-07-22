CREATE DATABASE geoprogram;

CREATE TABLE users(
    idUser INT PRIMARY KEY NOT NULL,
    username VARCHAR(40),
    password TEXT
);