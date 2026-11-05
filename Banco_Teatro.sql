DROP DATABASE IF EXISTS banco_teatro.sql;

CREATE DATABASE banco_teatro;

\c banco_teatro;

-- Tabelas

CREATE TABLE pecas (
    titulo varchar(50) not null,
    genero varchar(50) not null,
    publico varchar(50) not null,
    duracao integer not null,
    sinopse text not null,
    id_coletivo integer not null,
    id_ficha tecnica integer not null
);

