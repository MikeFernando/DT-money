# Movendo criação para o context

![](https://imgur.com/ilan0K9.png)

## Resumo do commit
* Ante de calcular os sumarys de entrada, saídas, e total.
* Por mais que o cadastro esteja sendo criado no miragejs, algumas coisas não acontecem
  - Modal não fecha e os campos não voltam ao valor padrão(resetados)
  - A tabela não reflete os dados recem criados
* Mas agora com contexto a gente consegue fazer com que apareça na Listagem a Transação recém criada
* No componente NewTransactionModal a gente tem o botão que cria uma nova transação e faz a requisição POST
* Só que para mostrar na listagem eu não posso ter acesso apenas ao valor das transações, porque as transações 
são um array, e respeitando o príncipio da imutabilidade eu não posso alterar o array diretamente
*

## Oque mudou do commit anterior?

* No componente NewTransactionModal vamos utilizar o contexto de transação
* Todo código de criação de uma nova transação, eu tirei do Modal e mudei pro contexto
* Criei uma função createTransaction recebendo transaction por parâmetro que são os dados dos inputs,
e tipei o parametro usando a funcão Omit para omitir dados que não precisava
* Agora no retorno do contexto temos as transactions e a função createTransaction, porem o tipo padrão 
está como [], então criei uma tipagem para informar que o retorno do meu contexto será um objeto contendo
um array de transaction e uma função createTransaction
* Como ele não aceita o retorno de um objeto vazio usei {} as TransactionContextData
* Por fim no NewTransactionModal peguei a função createTransaction do contexto e passei os dados para 
criar uma transação
* Mudei a extensão do TransactionContext de ts para tsx, porque ele será um componente
* Dentro dele vou criar e exportar uma função TransactionProvider
* Migrar o estado e a chamada a api de TransactionTable pra dentro do TransactionProvider
* Migrar a tipagem de Transactions do arquivo &lt;TransactionTable&gt; (ela é usada pra tipar o estado e o context)
* O Retorno de TransactionProvider será &lt;TransactionProvider.Provider ={transaction}&gt;
esse componente será o oque englobar os componentes dentro do App.tsx
* Como TransactionProvider terá filhos dentro dele, precisamos informar o children e tipa-lo com ReactNode
* Trocar no arquivo App.tsx &lt;TransactionContext.provider&gt; pelo contexto que criei &lt;TransactionProvider&gt;

