DROP DATABASE IF EXISTS projeto1;
CREATE DATABASE projeto1;
USE projeto1;

-- drops
DROP TABLE IF EXISTS PessoaEncontro;
DROP TABLE IF EXISTS PessoaFilme;
DROP TABLE IF EXISTS Encontro;
DROP TABLE IF EXISTS Filme;
DROP TABLE IF EXISTS Genero;
DROP TABLE IF EXISTS Pessoa;


CREATE TABLE Pessoa (
id_pessoa INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(80),
telefone VARCHAR(15),
endereco VARCHAR(255),
validade_pessoa BOOLEAN NOT NULL DEFAULT 1,
PRIMARY KEY(id_pessoa)
);

CREATE TABLE Genero (
id_genero INT NOT NULL AUTO_INCREMENT,
nome_genero VARCHAR(80) NOT NULL UNIQUE,
validade_genero BOOLEAN NOT NULL DEFAULT 1,
PRIMARY KEY(id_genero)
);

CREATE TABLE Filme (
id_filme INT NOT NULL AUTO_INCREMENT,
nome_filme VARCHAR(120) NOT NULL UNIQUE,
duracao INT NOT NULL,
id_genero INT NOT NULL,
validade_filme BOOLEAN NOT NULL DEFAULT 1,
PRIMARY KEY(id_filme),
FOREIGN KEY(id_genero) REFERENCES Genero(id_genero)
);

CREATE TABLE Encontro (
id_encontro INT NOT NULL AUTO_INCREMENT,
data_encontro DATETIME NOT NULL,
id_anfitriao INT NOT NULL,
id_filme INT NOT NULL,
validade_encontro BOOLEAN NOT NULL DEFAULT 1,
PRIMARY KEY(id_encontro),
FOREIGN KEY(id_anfitriao) REFERENCES Pessoa(id_pessoa),
FOREIGN KEY(id_filme) REFERENCES Filme(id_filme)
);

CREATE TABLE PessoaFilme (
id_pessoa INT NOT NULL,
id_filme INT NOT NULL,
assistido BOOLEAN NOT NULL DEFAULT 0,
validade_pessoafilme BOOLEAN NOT NULL DEFAULT 1,
PRIMARY KEY (id_pessoa, id_filme),
FOREIGN KEY (id_pessoa) REFERENCES Pessoa(id_pessoa),
FOREIGN KEY (id_filme) REFERENCES Filme(id_filme)
);

CREATE TABLE PessoaEncontro (
id_pessoa INT NOT NULL,
id_encontro INT NOT NULL,
validade_pessoaencontro BOOLEAN NOT NULL DEFAULT 1,
PRIMARY KEY(id_pessoa, id_encontro),
FOREIGN KEY(id_pessoa) REFERENCES Pessoa(id_pessoa),
FOREIGN KEY(id_encontro) REFERENCES Encontro(id_encontro)
);
