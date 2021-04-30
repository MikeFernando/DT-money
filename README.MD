# Carregando transações

![](https://imgur.com/ilan0K9.png)

## Resumo do commit
* Carregar os dados da tabela dentro do contexto em um arquivo separado, porque mais pra frente podemos ter mais contextos
e ficaria muito complexo o arquivo App.
* Assim tanto o componente Sumary como o componente TransactionTable terão acesso as informações para
poder consumi-las da maneira que eles precisarem

## Oque mudou do commit anterior?
* Mudei a extensão do TransactionContext de ts para tsx, porque ele será um componente
* Dentro dele vou criar e exportar uma função TransactionProvider
* Migrar o estado e a chamada a api de TransactionTable pra dentro do TransactionProvider
* Migrar a tipagem de Transactions do arquivo &lt;TransactionTable&gt; (ela é usada pra tipar o estado e o context)
* O Retorno de TransactionProvider será &lt;TransactionProvider.Provider ={transaction}&gt;
esse componente será o oque englobar os componentes dentro do App.tsx
* Como TransactionProvider terá filhos dentro dele, precisamos informar o children e tipa-lo com ReactNode
* Trocar no arquivo App.tsx &lt;TransactionContext.provider&gt; pelo contexto que criei &lt;TransactionProvider&gt;

