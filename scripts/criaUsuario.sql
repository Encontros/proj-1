DROP USER IF EXISTS 'usuario'@'localhost';
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'megadados';
GRANT ALL PRIVILEGES ON  projeto1.encontro TO 'usuario'@'localhost';
GRANT ALL PRIVILEGES ON  projeto1.filme TO 'usuario'@'localhost';
GRANT ALL PRIVILEGES ON  projeto1.genero TO 'usuario'@'localhost';
GRANT ALL PRIVILEGES ON  projeto1.pessoa TO 'usuario'@'localhost';
GRANT ALL PRIVILEGES ON  projeto1.pessoaencontro TO 'usuario'@'localhost';
GRANT ALL PRIVILEGES ON  projeto1.pessoafilme TO 'usuario'@'localhost';
FLUSH PRIVILEGES;