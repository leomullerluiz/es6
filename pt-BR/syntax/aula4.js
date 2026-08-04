/*
===========================================
            Aula 4: Abreviação para object literal
===========================================

Um assunto recorrente em ES6 é a eliminação de repetição desnecessária do código. Removendo o máximo de repetições possível, seu código fica mais fácil de ler e mais enxuto. Esse assunto continua com a introdução da nova abreviação para inicializar objetos e adicionar métodos a eles.

Vamos ver como isso acontece.

Abreviação para object literal:

Você provavelmente já escreveu um código onde um objeto está sendo inicializado usando nomes de propriedades idênticos aos nomes das variáveis que são atribuídas a elas.

Caso você nunca tenha escrito dessa forma, aqui está um exemplo:
*/
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);
//Output: Object {type: "quartz", color: "rose", carat: 21.29}

/*
Você percebe o quanto os termos se repetem? Os termos type: type, color: color e carat:carat não parecem redundantes?

A boa notícia é que você pode remover esses nomes de variáveis duplicadas das propriedades do objeto caso as propriedades tenham o mesmo nome das variáveis que são atribuídas a elas.

Dê uma olhada!
*/

const gemstone2 = { type, color, carat };

//Se as propriedades possuem o mesmo nome que as variáveis que são alocadas a elas, então, você pode duplicar o nome das variáveis.

/*
Falando de abreviação, em ES6 também existe uma abreviação para adicionar métodos aos objetos.

Para ver como isso funciona, vamos começar adicionando um método calculateWorth() a nosso objeto gemstone. O método calculateWorth() nos dirá quanto custa nossa gemstone, baseado em suas propriedades type, color e carat.
*/

let type3 = 'quartz';
let color3 = 'rose';
let carat3 = 21.29;

const gemstone3 = {
  type3,
  color3,
  carat3,
  calculateWorth: function() {
    // calculará quanto custa nossa gemstone, baseado em suas propriedades `type`, `color` e `carat`

  }
};

/*
Nesse exemplo, uma função anônima está sendo atribuída à propriedade calculateWorth, mas seria a palavra-chave function realmente necessária? No ES6, não!
*/

//Abreviação para nomes de métodos
//Uma vez que você só precisa referenciar a propriedade calculateWorth para chamar a função, ter a palavra function é redundante, então ela pode ser excluída.

let gemstone4 = {
    type,
    color,
    carat,
    calculateWorth() { /* ... */ }
  };