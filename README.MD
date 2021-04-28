# Aula: Configurando modal de criação
* instalando react-modal e sua tipagem @types/react-modal

![](https://imgur.com/J7KSwML.png)

## Como funciona
* A acessibilidade é um componente-chave de qualquer aplicativo da web moderno. 
* Este modal cumpre os requisitos de acessibilidade da web moderna.
* Ao clicar no botão New Transaction abre o Modal
* Nele é necessário preencher os campos para concluir o cadastro de uma nova transação

## Usando hook useState para o Modal
* o estado isNewTransactionOpenModal é iniciado com false porque o modal deve ser mostrado no click do botão New Transaction
* setIsNewTransactionOpenModal altera o estado

## Criando funcão de abrir e fechar modal de new Transaction
* Criei duas funcões uma para abrir o modal e outra pra fechar o modal
* Elas apenas altera o estado

## Mudando estado e funções modal do arquivo Header para o App 
* Utilizei as propriedade passadas por parametro para realizar a migração da funcão handleNewTransactionModalOpen
* Fazendo que o botão dentro do Header alterasse o estado do componente App para abrir modal

## Configurando Modal
  * A princípio ele está apenas com as propriedades obrigatórias isOpen onRequestClose




