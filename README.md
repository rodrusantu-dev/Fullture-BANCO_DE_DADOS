# Fullture-BANCO_DE_DADOS
Módulo de Banco de dados noSQL da Fullture usando MongoDB

## Para criar uma novo BANCO ou COLLECTION: 
uso do **USE** para acessar e criar banco de dados.
Acessar se ele já existir ou criar um novo caso ainda não exista.

+ `use Supermercado`
* `use Alunos`

### Podemos criar também a collection via prompt:
+ `db.notas`
+ `use database`: seleciona um banco de dados para trabalhar.
+ `show database`: exibe uma lista de todos os bancos de dados.
+ `show collections`: exibe uma lista de todos os bancos de dados.
+ `db.collection.insertOne()`: insere um documento em uma coleção.
+ `db.collection.find()`: retorna documentos de uma coleção que correspondem a um critério de consulta.
+ `db.collection.updateOne()`: atualiza um documento em uma coleção.
+ `db.collection.deleteOne()`: remove um documento de uma coleção.
+ `db.collection.aggregate()`: realiza uma operação de agregação em uma coleção.
+ `db.collection.createIndex()`: cria um índice em uma coleção para otimizar a consulta.
+ `db.nomedacollection.drop()`: exclui uma collection, e retorna true
+ `db.dropDatabase()`: exclui a data base que voce estiver

>Exemplo: Trocar o titulo para "Meu primeiro update"
`db.books.updateOne({ _id: 20}, { $set: {title: 'Meu primeiro update'} })`

> Exemplo: Para limpar a tela do MongoSH (Promt do Mongo)
`cls`

## Fazendo pesquisa no Banco de Dados

Para fazer uma busca de uma variação, neste caso os carros dos anos 2000 e 2010 (rodou normal a busca pelo terminal do mongoSH):

`db.collection.find({ ano: {$in:[2000,2010]}  })`

Pesquisa normal um operador ou elemento específico
`db.collection.find({ ano: 2010 })`

O COMANDO $GT busca os valores MAIORES que....., CONFORME MODELO ABAIXO:
`db.collection.find({ kmRodado: {$gt:100000} })`

O COMANDO $GT busca os valores MENOR OU IGUAL que....., CONFORME MODELO ABAIXO:
`db.collection.find({ kmRodado: {$lte:100000} })`

TEM UM OUTRO COMANDO TAMBÉM para BUSCAR DOIS PARAMETROS:
`db.books.find({category: "java", pages: {$gt: 100}})`


# OPERADORES

## TRAZ A QUANTIDADE EM NUMEROS DAQUELA OCORRÊNCIA
> db.collection.find({name: "John", age: {$gt: 30}}).count()


## INFORMAÇÕES SOBRE O DESEMPENHO DA CONSULTA
> db.collection.find({name: "John", age: {$gt: 30}}).explain()


## MESMA CONSULTA PORÉM MAIS RESUMIDA:
```db.collection.find({name: "John", age: {$gt: 30}}).explain("executionStats") ```


queryPlanner: fornece informações sobre como o MongoDB planejou a consulta, incluindo o filtro aplicado, o índice utilizado (se houver), o plano de consulta vencedor e planos de consulta rejeitados (se houver).

executionStats: fornece informações sobre o desempenho da operação, incluindo o número de documentos retornados, o tempo de execução em milissegundos e o número total de documentos e chaves examinados durante a consulta.

command: fornece informações sobre a operação realizada, incluindo a coleção e o filtro aplicado.

serverInfo e serverParameters: fornece informações sobre a instância do MongoDB em que a operação foi executada.

DETALHADOS DO EXECUTION STATS:
executionSuccess: um valor booleano que indica se a consulta foi executada com sucesso ou não.

nReturned: o número de documentos que foram retornados pela consulta.

executionTimeMillis: o tempo total de execução da consulta em milissegundos. Esse valor inclui o tempo gasto na busca, ordenação, filtragem e outras operações envolvidas na consulta.

totalKeysExamined: o número total de chaves que foram examinadas pelo MongoDB durante a consulta. Esse valor é importante quando a consulta envolve índices, pois indica quantas chaves do índice foram examinadas para encontrar os documentos correspondentes à consulta.

totalDocsExamined: o número total de documentos que foram examinados pelo MongoDB durante a consulta. Esse valor é importante quando a consulta envolve uma busca completa na coleção, sem o uso de índices.

executionStages: um objeto que fornece informações detalhadas sobre as etapas envolvidas na execução da consulta, incluindo a etapa final de retorno dos documentos que atendem aos critérios de consulta. As informações incluem:

stage: o tipo de estágio executado pelo MongoDB, que pode incluir COLLSCAN (busca completa na coleção), IXSCAN (varredura de índice) ou SORT (ordenação).
filter: o filtro aplicado na consulta.
nReturned: o número de documentos retornados nesta etapa específica da consulta.
executionTimeMillisEstimate: uma estimativa do tempo de execução para a etapa específica da consulta em milissegundos.
works: o número de trabalhos realizados pelo MongoDB nesta etapa específica da consulta.
advanced: o número de documentos que foram avaliados pelo MongoDB para esta etapa específica da consulta.