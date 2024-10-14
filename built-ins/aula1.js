/* 
==========================
    Aula 1: symbol
==========================
*/

// Um symbol é uma estrutura de dados única e imutável muito utilizada para identificar as propriedades de um objeto.
// Para criar um symbol, você escreve Symbol(), passando como parâmetro uma string opcional como sua descrição.

const sym1 = Symbol('apple');
console.log(sym1);
//Output: Symbol(apple)

// Isso criará um symbol único e o armazenará na variável sym1. A descrição "apple" é apenas uma maneira de descrever o symbol, mas que não pode ser utilizada para acessar o próprio symbol.

const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);
//Output: false


// Isso pode ser algo difícil de compreender, então, vamos utilizar um exemplo do vídeo anterior para ver como os symbols podem ser úteis. Este é o código que representa o objeto bowl do exemplo:

const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.15 },
    'orange': { color: 'orange', weight: 170.097 }
  };

//   O bowl contém frutas que são objetos e que, por sua vez, são propriedades do bowl. Porém, com isso, teremos um problema quando uma segunda banana for adicionada.

const bowl2 = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
  };
  console.log(bowl2);
// Output: Object {apple: Object, banana: Object, orange: Object}

// Em vez de adicionar outra banana ao bowl, nossa primeira banana é sobrescrita pela nova. Para resolver esse problema, podemos utilizar os symbols.

const bowl3 = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
  };
  console.log(bowl3);
// Output: Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}
//Alterando as propriedades do bowl para utilizar symbols, cada propriedade é um Symbol único e a primeira banana não será sobrescrita pela segunda.
