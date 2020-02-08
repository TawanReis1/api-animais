# API de Animais

Projeto com o intuito de apresentar a maneira de como estruturo uma API e desenvolvo as soluções do que foi proposto.

## Iniciando a Utilização

Seguindo as instruções, você terá clonado o projeto para a sua máquina com o propósito de realizar testes. O banco de dados está hospedado no Mongo Atlas, com isso, descartando a necessidade de qualquer configuração do mesmo na máquina local.

### Pré-Requisitos

Para executar o projeto corretamente, você precisará ter instalado:

```
Node (no projeto foi utilizado a versão 12.14.0)
```
```
NPM (no projeto foi utilizado a versão 6.13.4)
```

### Instalação

O passo a passo para a instalação dos dois programas necessários (a instalação do Node é composta pela a instalação do NPM).

Acessar o site do Node:
* [Node.Js](https://nodejs.org/en/download/) 


## Executando os Testes

Os testes serão baseados em inserção, consulta e edição da entidade de animais. Para iniciar o projeto, execute o comando "npm run dev".

### Consulta de Animais
URL: [GET] {baseUrl}/api/v1/animais<br/>

É possível adicionar filtros para os campos, adicionando na querystring o sufixo "filter_" e concatenando com o nome do campo que deseja filtrar, exemplo: {baseUrl}/api/v1/animais?filter_nome=Boi <br/>

A paginação é feita incrementando o valor do campo "page" na querystring. Também é possivel definir o limite com o campo "limit", exemplo: {baseUrl}/api/v1/animais?page=3&limit=5.<br/>

Por fim, é possível ordenar os valores de forma ascendente e descendente, baseado no campo desejado, exemplo: exemplo: {baseUrl}/api/v1/animais?sort_nome=asc.<br/>

### Consulta de um Animal
URL: [GET] {baseUrl}/api/v1/animais/{id}<br/>

É necessário passar o ID do documento no mongoDB para retornar as informações apenas desse animal em específico, exemplo: {baseUrl}/api/v1/animais/5e3e05d7eff669453869841c

### Inserção de um Animal
URL: [POST] {baseUrl}/api/v1/animais<br/>

Para inserir um animal, é necessário informar um body com os seguintes campos: <br/>
{
	"tipo": "Vaca",
	"nome": "Boi teste",
	"peso": 2000,
	"idade": 316
}

### Atualização de um Animal
URL: [PUT] {baseUrl}/api/v1/animais/{id}<br/>

Para atualizar um animal, é necessário informar o ID do animal e um body com os seguintes campos: <br/>
{
	"tipo": "Vaca",
	"nome": "Boi teste",
	"peso": 2000,
	"idade": 316
} <br/>

É necessário passar ao menos um campo para atualizar o animal.

