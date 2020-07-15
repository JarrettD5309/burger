DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name varchar(100),
    devoured boolean not null default 0,
    PRIMARY KEY(id)
);