USE projeto1;

INSERT INTO Pessoa (nome, telefone, endereco) 
	VALUES ('Fabio Ayres', '(11) 3003-2031', 'Rua Quatá, 301');

INSERT INTO Pessoa (nome, telefone, endereco) 
	VALUES ('Vitoria Mattos', '(11) 4910-2931', 'Rua Quatá, 320');
    
INSERT INTO Pessoa (nome, telefone, endereco) 
	VALUES ('Elisa Malzoni', '(15) 3112-4256', 'Rua Quatá, 341');
    
INSERT INTO Genero (nome_genero) 
	VALUES ('Ação');

INSERT INTO Genero (nome_genero) 
	VALUES ('Animação');
    
INSERT INTO Genero (nome_genero) 
	VALUES ('Aventura');

INSERT INTO Genero (nome_genero) 
	VALUES ('Comédia');
    
INSERT INTO Genero (nome_genero) 
	VALUES ('Comédia Romantica');
    
INSERT INTO Genero (nome_genero) 
	VALUES ('Cult');
    
INSERT INTO Genero (nome_genero) 
	VALUES ('Documentário');
    
INSERT INTO Genero (nome_genero) 
	VALUES ('Drama');
    
INSERT INTO Genero (nome_genero) 
	VALUES ('Ficção Científica');
    
INSERT INTO Genero (nome_genero) 
	VALUES ('Musical');

INSERT INTO Genero (nome_genero) 
	VALUES ('Suspense');
    
INSERT INTO Genero (nome_genero) 
	VALUES ('Terror');
    
INSERT INTO Filme (nome_filme, duracao, id_genero) 
	VALUES ('Titanic', 195, 8);
    
INSERT INTO Filme (nome_filme, duracao, id_genero) 
	VALUES ('Gente Grande', 102, 4);
    
INSERT INTO Filme (nome_filme, duracao, id_genero) 
	VALUES ('De Repente 30', 98, 5);
    
INSERT INTO Encontro (data_encontro, id_anfitriao, id_filme) 
	VALUES ('2018-09-07 19:00:00', 1, 1);
    
INSERT INTO Encontro (data_encontro, id_anfitriao, id_filme) 
	VALUES ('2018-11-02 20:00:00', 2, 3);
    
INSERT INTO Encontro (data_encontro, id_anfitriao, id_filme) 
	VALUES ('2018-08-31 19:30:00', 3, 2);
    
INSERT INTO PessoaEncontro (id_pessoa, id_encontro) 
	VALUES (1, 1);
    
INSERT INTO PessoaEncontro (id_pessoa, id_encontro) 
	VALUES (2, 1);
    
INSERT INTO PessoaEncontro (id_pessoa, id_encontro) 
	VALUES (3, 1);
    
INSERT INTO PessoaEncontro (id_pessoa, id_encontro) 
	VALUES (2, 2);

INSERT INTO PessoaEncontro (id_pessoa, id_encontro) 
	VALUES (3, 3);
    
INSERT INTO PessoaFilme (id_pessoa, id_filme, assistido) 
	VALUES (1, 1, 1);
    
INSERT INTO PessoaFilme (id_pessoa, id_filme, assistido) 
	VALUES (2, 2, 1);
    
INSERT INTO PessoaFilme (id_pessoa, id_filme, assistido) 
	VALUES (2, 3, 1);

INSERT INTO PessoaFilme (id_pessoa, id_filme, assistido) 
	VALUES (3, 3, 1);
