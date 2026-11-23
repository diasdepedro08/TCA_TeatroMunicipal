DROP DATABASE IF EXISTS banco_teatro.sql;

CREATE DATABASE banco_teatro;

\c banco_teatro;

-- Tabelas
-- git config --local user.name "Pedro"
-- git config --local user.email "..."

CREATE TABLE inscricao (
    id serial primary key,
    insc_como varchar(50) not null
);

CREATE TABLE cotas (
    id serial primary key,
    cota varchar(50) not null
);

CREATE TABLE publico (
    id serial primary key,
    publico varchar(50) not null
);

CREATE TABLE evento (
    id serial primary key,
    titulo varchar(50) not null,
    proponente_id integer not null,
    duracao integer not null,
    publico_id integer not null references publico(id),
    sinopse text not null
);

CREATE TABLE proponente (
    id integer not null references evento(id),
    nome varchar(100) not null,
    cpf varchar not null,
    grupo varchar(50),
    cnpj varchar,
    email varchar,
    telefone varchar,
    inscricao_id integer not null references inscricao(id),
    cota_id integer not null references cotas(id),
    curriculo text not null
);

CREATE TABLE equipe (
    id serial primary key,
    evento_id integer not null,
    nome varchar,
    funcao varchar,
    curriculo text,
    FOREIGN KEY (evento_id) REFERENCES eventos(id)
);

CREATE TABLE sessoes (
    id serial primary key,
    evento_id integer not null,
    datas date not null,
    horarios time not null,
    ingressos varchar,
    montagem varchar,
    desmontagem varchar,
    FOREIGN KEY (evento_id) REFERENCES eventos(id)
);