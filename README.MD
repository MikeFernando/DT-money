# Aula: Salvando dados do form
* Salvando os dados preenchidos nos inputs e salvando no estado do componente

![](https://imgur.com/J7KSwML.png)

## Oque mudou do commit anterior?
* Foi criado uma função handleNewTransaction
* No botão Cadastrar na propriedade submit={handleNewTransaction} é chamada essa função
* Entendendo o comportamento padrão dos formulários de recarregar a página toda vez que 
que um formulário sofre um submit.
* Previnindo o comportamento padrão: 
  - No parametro da função que é chamada no submit temos o evento
  - Nesse evento tipamos essa propriedade com o FormatEvent do React ex: event: FormatEvent
  - event.preventDefault() assim teremos previnido o recarregamento da página
* Foi criado estados para cada input do formulário (tipo, titulo, valor, categoria)
* Na tag &lt;input&gt; colocamos a propriedade value apontando para o valor inicial do estado
* Na tag &lt;input&gt; colocamos a propriedade onChange para que ela execute toda vez que um texto
for digitado dentro do input.
* No onChange pegamos o valor digitado atravez do evento. Esse evento é uma função ex: 
  - event => setSalvoNoEstado(event.target.value)
  - event sempre vai retornar em texto mesmo se o input for do tipo number
  - para converter é simples só por envolta o Number(event.target.value)

## Patern
 * Toda função que começa com handle signfica que é uma ação do usuário(Ex:click no botão)
 * Sempre iniciar o estado com o tipo de dado que será armazedo Ex:
    - Se for objeto iniciar o estado com {} vazio
    - Se for uma lista iniciar o estado com [] vazio
    - Se for um valor iniciar o estado com 0 (valor numérico)
    - Se for nomes iniciar o estado com '' string
