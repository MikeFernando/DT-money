# Aula: Componente Summary

![](https://i.imgur.com/kJiiWk7.png)

## Dashboard
  * Dashboard é onde ficará os Summary de transactions e a tabela
  * Ele também tem o container que centraliza o conteúdo

## Criando a estrutura HTML do Sumary
  * Importa o container dos estilos
  * São 3 Sumarys então o diego criou 3 divs
  * Dentro das divs ele usou &lt;header&gt; e dentro do header um &lt;p&gt;para o tipo da transaction e uma &lt;img&gt;
  * Abaixo do header colocou o valor dentro de um &lt;strong&gt;

## Estilizando Summary
  * Usou display grid para os 3 Summary
  * Definiu a cor do background e cor do texto
  * Espaçamento interno com padding e arredondamento das bordas com border-radios
  * Display flex no &lt;header&gt;
  * No valor das transaction dentro do &lt;strong&gt; aumentou a fonte um margin top

## Deixando o Summary Total com a cor verde
  * Na div total criou uma className="highlight-background"
  * na &lt;div&gt; &.highlight-background
  * background green e color white
