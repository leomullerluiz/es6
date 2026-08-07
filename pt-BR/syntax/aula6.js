/*
===========================================
            Aula 6: Operador spread
===========================================

O operador spread, escrito com 3 pontos consecutivos ( ... ), é novo no ES6 e nos permite separar o spread iterable objects(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators#iterators) (objetos iteráveis) em múltiplos elementos.

Vamos dar uma olhada em alguns exempos para entender como ele funciona.
*/
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
//Output: Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
//Output: 2 3 5 7 11 13 17 19 23 29

/*
Analisando a saída dos exemplos, vemos que tanto a array como o set foram separados em seus elementos individuais, mas como isso pode ser útil?
OBSERVAÇÃO: os sets são um novo objeto nativo em ES6, nós abordaremos sets em detalhes mais adiante, na aula 3.
*/

/*
Combinação de arrays usando concat
Um bom exemplo da utilidade do operador spread é a combinação de arrays.

Se você já precisou combinar arrays antes do operador spread, foi forçado a utilizar o método do objeto array concat().
*/

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
//Output: apples bananas pears corn potatoes carrots

// Isso não é tão ruim, mas não seria melhor se existisse uma maneira mais simples de escrever esse código?

// Por exemplo, algo como…

// ⚠️ Alerta de const adiante ⚠️
// Se você está acompanhando esse curso copiando e colando o código, então já declarou a variável produce com a palavra-chave const. O código a seguir tenta redeclarar e reatribuir valor à variável, então, dependendo de como você está executando o código, pode ocorrer um erro.

// Lembre-se que variáveis declaradas com const não podem ser redeclaradas ou reatribuidas no mesmo escopo.

const produce2 = [fruits, vegetables];
console.log(produce);
//Output:  [Array[3], Array[3]]

// Infelizmente, isso não funciona.

// Em vez de combinar arrays, esse código adiciona a array fruits ao primeiro índice e a array vegetables ao segundo índice da array produce.

//Vamos tentar o operador spread?

const fruits3 = ["apples", "bananas", "pears"];
const vegetables3 = ["corn", "potatoes", "carrots"];

const produce3 = [...fruits3, ...vegetables3];

console.log(produce3);
//Output: [ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]