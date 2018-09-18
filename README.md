## Encontros & Filmes
Por: Elisa Malzoni e Vitória Camilo

### Guia de Instalação

- Instale em seu computador o [Node.js](https://nodejs.org/en/download/ "Node.js"), o [MySQL](https://dev.mysql.com/downloads/installer/ "MySQL")`;
- Clone este repositório no seu computador e acesse seu primeiro diretório através do prompt de comando;
- Instale dentro deste diretório os seguintes módulos do Node.js: express, express-validator, body-parser, mysql, express-myconnection e path, através do comando: `npm install nome_do_modulo --save`;
- Execute `node server.js` para rodar o programa;


### Manual do Usuário

- Acesse http://localhost:3000 para começar a utilizar o programa;

- Na página inicial você pode escolher ver as informações sobre as pessoas, os filmes, os gêneros de filme e os encontros marcados;

#### Pessoas

- A tabela exibe o nome, o telefone e o endereço de cada pessoa que está cadastrada, e o formulário a direita permite adicionar mais alguém inserindo essas mesmas informações de nome, telefone e endereço, e clicando em Salvar;

- Clicando no link da coluna Deletar referente a pessoa escolhida, é possível excluí-la do site;

- Em Filmes que já assistiu você pode acessar a lista de todos os filmes que estão cadastrados e a pessoa escolhida já viu;

##### Filmes Assistidos

- Nesta página é possível visualizar à esquerda uma lista com os todos os filmes que estão cadastrados e a pessoa escolhida já assistiu;

- À direita, clicando no dropdown, é possível selecionar um novo filme para ser adicionado à lista de assistidos daquela pessoa, escolhendo ele da lista e clicando em Salvar;

#### Filmes

- A tabela exibe o título, a duração em minutos e o gênero de cada filme, e o formulário a direita permite adicionar um filme novo inserindo essas mesmas informações de título, duração em minutos e gênero, e clicando em Salvar;

- Clicando no link da coluna Deletar referente ao filme escolhido, é possível excluí-lo do site;

#### Gêneros

- A página exibe uma lista com todos os gêneros de filme disponíveis no site, e clicando em um deles é possível visualizar uma lista com todos os filmes daquele gênero que estão cadastrados;

##### Filmes por Gênero

- A tabela exibe uma lista com os títulos de todos filmes que estão cadastrados no site e que pertencem ao gênero que foi escolhido, e conta também com suas informações de duração em minutos;

#### Encontros

- Na tabela encontram-se as informações de data e hora, anfitrião, filme e endereço referentes a cada encontro que já foi marcado, e organizadas por ordem de data;

- No formulário é possivel marcar um novo encontro inserindo as informações de data e hora, anfitrião e filme, e clicando em Salvar;

- Clicando no link da coluna Deletar referente ao encontro escolhido, é possível excluí-lo do site;

- Os links da coluna Participantes redirecionam a uma página em que é possível ver e adicionar as pessoas que participaram ou irão participar de um encontro;

##### Participantes

- Nesta página é possível visualizar à esquerda uma lista com os todos os participantes confirmados no evento, incluindo o anfitrião;

- À direita, clicando no dropdown, é possível selecionar um novo participante e adicioná-lo a lista daquele encontro clicando em Salvar;

