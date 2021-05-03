# Finalizando inserção

![](https://imgur.com/ilan0K9.png)

## Resumo do commit
* Mostrando na listagem o cadastro recém-criado
* Fechando modal após cadastro

## Oque mudou do commit anterior?
<<<<<<< HEAD
* Pra fechar o modal é só chamar o método onRequestClose()
* Porem o modal só deve ser fechado quando a criação da transação der certo
* Para aguardar esse processo de criação terminar, deixei a função como assíncrona(async/await)
tanto na função do botão(handleNewTransaction), quanto na função do contexto que cria a transaction (createTransaction)
* E na tipagem da função createTransaction coloquei um Promise no retorno, porque toda função assíncrona retorna um promessa
* Resetei os valores dos campos do modal após ele ser fechado, setando o estado para os valores iniciais
## Ponto importante
* Quando fazemos a inserção de um dado na api, geralmente ela nos retorna no response o dado que foi inserido
* E usei esse dado dentro do response para por no estado de transaction, claro usando o princípio da imutabilidade
de nunca alterar um dado, sempre copiar depois incluir.
* Como não tinha o dado created_at, inclui esse dado criando um objeto com a propriedade created_at: new Date()
* Ai coloquei no estado dando setTransactions(...transactions, transaction)
=======

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

>>>>>>> 48f6dda8ad23f9fef7dea9dc26242e8b19b169cb
