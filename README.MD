# Aula: Inserindo transação na API
* Utilizando miragaJS

![](https://imgur.com/J7KSwML.png)

## Oque mudou do commit anterior?
* Todos os dados foram salvos na variável data e inseridos na rota transactions api.post('/transactions', data)
* Foi criado um método POST no arquivo index para inserir os dados salvos no estado ex:
  - this.post('/transactions', (schema, request) => {
    // codigo aqui
  })
  - schema ainda não foi usado
  - request é onde está os dado enviados 
  - para ter acesso á esses dados é através do request.requestBody;
  - requestBody retorna os dados em string, então para transformar eles em objeto utilizei JSON.parse()

## Entendendo sobre models
* models são os nomes das entidades que será salva no miragejs ex: 
  - models: {
    transaction: Model
  }
  - { Model } precisa ser importado do miragejs  

## Pontos importantes
* Até aqui os dados ja vinham pré cadastrados do miragejs
* Mas agora já é possível enviar dados para o miragejs através do método POST
* Então é preciso juntar eles através dos models e retornar todos
* No retorno do método this.post vamos utilizar o parâmetro schema(banco de dados)
  - No 1º parâmetro será o model, e no 2º os dados;
  - Ex: return schema.create('transaction', data)
* No método GET que retorna os dados, vamos retornar todos dados daquela entidade
  -Ex return schema.all('transaction')
