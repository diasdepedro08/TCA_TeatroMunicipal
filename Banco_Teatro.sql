DROP DATABASE IF EXISTS banco_teatro.sql;

CREATE DATABASE banco_teatro;

\c banco_teatro;

-- Tabelas
-- git config --local user.name "Pedro"
-- git config --local user.email "..."

CREATE TABLE inscricao (
    id primary key integer not null,
    insc_como varchar(50) not null
);

CREATE TABLE cota (
    id primary key integer not null,
    cota varchar(50) not null
);

CREATE TABLE proponente (
    id primary key integer,
    nome varchar(100) not null,
    cpf varchar not null,
    grupo varchar(50),
    cnpj varchar,
    email varchar,
    telefone varchar,
    inscricao_id
    cota_id
    curriculo text not null
)





CREATE TABLE publico (
    id integer not null,
    publico varchar(50) not null
);


CREATE TABLE evento (
    id integer not null,
    titulo varchar(50) not null,
    proponente_id integer not null,
    duracao integer not null,
    publico_id varchar(50) not null,
    sinopse text not null,
);