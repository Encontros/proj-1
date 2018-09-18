--
-- Database: 'test'
--
CREATE TABLE IF NOT EXISTS 'user' (
  'user_id' int(11) NOT NULL AUTO_INCREMENT,
  'name' varchar(100) NOT NULL,
  'email' varchar(100) NOT NULL,
  'password' varchar(100) NOT NULL,
  PRIMARY KEY ('user_id')
) DEFAULT CHARSET=latin1;

INSERT INTO 'user' ('user_id', 'name', 'email', 'password') VALUES
(1, 'Camila', 'camila@insper.edu.br', '123456'),
(2, 'Luciano', 'luciano@insper.edu.br', '123456'),
(4, 'Hashi', 'hashi@insper.edu.br', '123456'),
(5, 'Aires', 'aires@insper.edu.br', '123456');