# Aula: Inserindo transação na API e formatando valores
* Utilizando miragaJS

![](https://imgur.com/tpaagcC.png)
![](https://imgur.com/wCzyS2O.png)

## Pontos importantes
* Nossa api utilizando o miragejs está com o banco de dados vazio []
* E o HTML do componente TransactionTable está retornando uma tabela com dados estáticos
* Mas existe uma forma de deixar dados pré cadastrados na aplicação, para que o banco de dados ja inicie com dados
e deixe a interface mais amigável

## Oque mudou do commit anterior?
* Foi adicionado uma funcão seeds() no createServer
* Essa função seeds recebe uma propriedade chamada server
* Esse server chama o db e db recebe loadData ficando assim server.db.loadData()
* Esse loadData recebe a entidade com os dados que eu quero retornar ex:
  - server.db.loadData({})
* No arquivo TransactionTable que é o componente que lista os dados na tabela
* Criei um estado de transactions
* Percorri esse array de transactions com map retornando os dados buscados
* Formatei os valores e as datas com Intl.
