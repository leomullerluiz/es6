/*
==========================
    Aula 5: Promises
==========================
Uma promise em JavaScript é criada com a nova função construtora de Promise(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) - new Promise(). Uma promise permitirá que você inicie algum trabalho que será realizado de forma assíncrona e libera você para executar outros trabalhos. Quando você cria uma promise, precisa entregar o código que será executado de forma assíncrona. Você entrega este código como parâmetro da função construtora:

*/

new Promise(function () {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
    }, Math.random() * 2000);
});

// Esse código cria uma promise que iniciará alguns segundos após a realização da requisição e, então, executará os passos necessários da função createSundae

// Mas uma vez que tudo está concluído, como o mecanismo JavaScript nos informa que tudo está pronto e que estamos preparados para seguir adiante? Pela passagem de duas funções como parâmetro para nossa função inicial de parâmetro da promise, tipicamente conhecidas como resolve e reject.

// A função é passada para a função que fornecemos no construtor da promise - normalmente, usamos a palvra "resolve" para indicar que essa função deverá ser chamada quando a requisição for concluída com sucesso. Repare na resolve escrita na primeira linha:

new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        resolve(sundae);
    }, Math.random() * 2000);
});





