## Encontros & Filmes
Por: Elisa Malzoni e Vit�ria Camilo

### Guia de Instala��o

- Instale em seu computador o [Node.js](https://nodejs.org/en/download/ "Node.js"), o [MySQL](https://dev.mysql.com/downloads/installer/ "MySQL")`;
- Clone este reposit�rio no seu computador e acesse seu primeiro diret�rio atrav�s do prompt de comando;
- Instale dentro deste diret�rio os seguintes m�dulos do Node.js: express, express-validator, body-parser, mysql, express-myconnection e path, atrav�s do comando: `npm install nome_do_modulo --save`;
- Execute `node server.js` para rodar o programa;


### Manual do Usu�rio

- Acesse http://localhost:3000 para come�ar a utilizar o programa;

- Na p�gina inicial voc� pode escolher ver as informa��es sobre as pessoas, os filmes, os g�neros de filme e os encontros marcados;

#### Pessoas

- A tabela exibe o nome, o telefone e o endere�o de cada pessoa que est� cadastrada, e o formul�rio a direita permite adicionar mais algu�m inserindo essas mesmas informa��es de nome, telefone e endere�o, e clicando em Salvar;

- Clicando no link da coluna Deletar referente a pessoa escolhida, � poss�vel exclu�-la do site;

- Em Filmes que j� assistiu voc� pode acessar a lista de todos os filmes que est�o cadastrados e a pessoa escolhida j� viu;

##### Filmes Assistidos

- Nesta p�gina � poss�vel visualizar � esquerda uma lista com os todos os filmes que est�o cadastrados e a pessoa escolhida j� assistiu;

- � direita, clicando no dropdown, � poss�vel selecionar um novo filme para ser adicionado � lista de assistidos daquela pessoa, escolhendo ele da lista e clicando em Salvar;

#### Filmes

- A tabela exibe o t�tulo, a dura��o em minutos e o g�nero de cada filme, e o formul�rio a direita permite adicionar um filme novo inserindo essas mesmas informa��es de t�tulo, dura��o em minutos e g�nero, e clicando em Salvar;

- Clicando no link da coluna Deletar referente ao filme escolhido, � poss�vel exclu�-lo do site;

#### G�neros

- A p�gina exibe uma lista com todos os g�neros de filme dispon�veis no site, e clicando em um deles � poss�vel visualizar uma lista com todos os filmes daquele g�nero que est�o cadastrados;

##### Filmes por G�nero

- A tabela exibe uma lista com os t�tulos de todos filmes que est�o cadastrados no site e que pertencem ao g�nero que foi escolhido, e conta tamb�m com suas informa��es de dura��o em minutos;

#### Encontros

- Na tabela encontram-se as informa��es de data e hora, anfitri�o, filme e endere�o referentes a cada encontro que j� foi marcado, e organizadas por ordem de data;

- No formul�rio � possivel marcar um novo encontro inserindo as informa��es de data e hora, anfitri�o e filme, e clicando em Salvar;

- Clicando no link da coluna Deletar referente ao encontro escolhido, � poss�vel exclu�-lo do site;

- Os links da coluna Participantes redirecionam a uma p�gina em que � poss�vel ver e adicionar as pessoas que participaram ou ir�o participar de um encontro;

##### Participantes

- Nesta p�gina � poss�vel visualizar � esquerda uma lista com os todos os participantes confirmados no evento, incluindo o anfitri�o;

- � direita, clicando no dropdown, � poss�vel selecionar um novo participante e adicion�-lo a lista daquele encontro clicando em Salvar;

