# Contextos e hooks

![](https://imgur.com/ilan0K9.png)

### Contexto (context) disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.

## Quando Usar Contexto?
* Contexto é indicado para compartilhar dados que podem ser considerados “globais” para a árvore de componentes do React. Usuário autenticado ou o idioma preferido, são alguns casos comuns.

## Oque mudou do commit anterior?
* Criação de contextos no React
* De início criei um arquivo chamado TransactionContext na raiz do projeto
* Nele foi importado do 'react' o { createContext }
* No createContext é o tipo de dado que o context vai ser, ou seja um objeto, um array, ou uma string.
* Então esse TransactionContext precisa ficar por volta de todos os componentes que eu quero que tenha acesso aquelas informações
* O TransactionContex tem um atributo chamado Provider, é nessa propriedade que setamos o valor atual que será passado para os componentes filhos
* No componente App apliquei o TransactionContext.Provider
* Para obter o valor do contexto é importando o useContext que é um  hook do react

