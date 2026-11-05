DROP DATABASE IF EXISTS banco_teatro.sql;

CREATE DATABASE banco_teatro;

\c banco_teatro;

-- Tabelas


CREATE TABLE coletivo(
    id integer not null,
    coletivo varchar(50) not null,
    responsavel varchar(100) not null,
    cidade varchar(100) not null,
    email ?? not null,
    telefone ?? not null
);


CREATE TABLE artistas (
    id integer not null,
    nome varchar(100) not null,
    cpf integer not null,
    contato varchar(100) not null
);


CREATE TABLE ficha_tecnica (
    id integer not null,
    direcao varchar(100) not null,
    elenco integer not null references artistas(id),
    iluminacao varchar(100) not null,
    sonoplastia varchar(100) not null,
    figurino varchar(100) not null,
    caracterizacao varchar(100) not null
);


CREATE TABLE genero (
    id integer not null,
    genero varchar (50) not null
);


CREATE TABLE publico (
    id integer not null,
    publico varchar(50) not null
);


CREATE TABLE pecas (
    id integer not null,
    titulo varchar(50) not null,
    genero varchar(50) not null,
    publico varchar(50) not null,
    duracao integer not null,
    sinopse text not null,
    id_coletivo integer not null,
    id_ficha tecnica integer not null
);

