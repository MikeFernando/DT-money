# Aula: Criando front-end sem back-end com MirageJS
* Mirage é uma biblioteca JavaScript que permite aos desenvolvedores de front-end simular APIs de back-end.

![](https://i.imgur.com/kJiiWk7.png)

## Como funciona
O Mirage é executado no navegador. Ele intercepta qualquer XMLHttpRequestou fetchsolicita seus aplicativos JavaScript marcas e permite que você zombar a resposta. Isso significa que você pode desenvolver e testar seu aplicativo como se ele estivesse se comunicando com um servidor real.

## Configurando MirageJS
  * Importar createServer de miragejs
  * Mirage permite simular respostas de API escrevendo manipuladores de rota .

## Utilizando cliente do Axios
  * Axios é um cliente HTTP baseado em Promises para fazer requisições.
  
  ### Características
    * Por baixo dos panos faz requisições Ajax no browser via XMLHttpRequests;
    * Faz requisições http no Node.js;
    * Suporta a API de Promises;
    * Intercepta requisições e respostas (request & response);
    * Cancela requisições;
    * Transforma os dados em JSON automaticamente;
    * No lado cliente suporta a proteção contra XRSF;
    * Transforma os dados da requisição e da resposta.


