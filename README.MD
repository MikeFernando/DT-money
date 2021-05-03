# Finalizando inserção

![](https://imgur.com/ilan0K9.png)

## Resumo do commit
* Mostrando na listagem o cadastro recém-criado
* Fechando modal após cadastro

## Oque mudou do commit anterior?
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
