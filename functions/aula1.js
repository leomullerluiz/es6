/*

===========================================
            Aula 1: arrow functions
===========================================
O ES6 introduz um novo tipo de função chamada arrow. As funções arrow são muito similares a funções regulares em termos de comportamento, mas são muito diferentes em termos de sintaxe. O código a seguir manipula uma lista de nomes, convertendo cada um deles para letra maiúscula, usando uma função com a sintaxe anterior ao ES6.
*/
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function (name) {
    return name.toUpperCase();
});
console.log(upperizedNames)
//Output: (3) ['FARRIN', 'KAGURE', 'ASSER']

// Já o código abaixo faz exatamente a mesma coisa, exceto pela função passada como parâmetro para o método map(), que é uma função arrow. Repare na flecha que se forma na função arrow ( => ), no código abaixo:

const upperizedNames2 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);
console.log(upperizedNames2)
//Output: (3) ['FARRIN', 'KAGURE', 'ASSER']

// A única mudança no código acima é o código no interior do método map(). Esse código recebia uma função na sintaxe anterior ao ES6 e foi modificado para receber uma arrow.

// OBSERVAÇÃO: não tem certeza de como o método map() funciona? É um método do array prototype. Você passa uma função como parâmetro e chamará essa função uma vez para cada elemento da array. Feito isso, o método pega os valores retornados de cada função chamada e constrói uma nova array com esses resultados, compondo o retorno do método map(). Para mais informações, confira a documentação MDN( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map ).


// Convertendo uma função em arrow
const upperizedNames3 = ['Farrin', 'Kagure', 'Asser'].map(function (name) {
    return name.toUpperCase();
});

//   Para converter a função acima em uma arrow, devemos seguir alguns passos:

// remover a palavra reservada function
// remover os parênteses
// remover as chaves
// remover a palavra reservada return
// remover o ponto e vírgula
// adicionar uma arrow ( => ) entre a lista de parâmetros e o corpo da função

const upperizedNames4 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);


// Funções regulares podem ser tanto declaração de funções como expressões de funções, no entanto, funções arrow são sempre expressões. Na verdade, o nome completo da função arrow é "arrow function expressions", e ela só pode ser utilizada onde uma expressão é válida. Isso inclui:

// estar armazenada em uma variável,
// ser passada como argumento de uma função,
// e armazenada na propriedade de um objeto.
// Uma sintaxe confusa é quando uma arrow é armazenada em uma variável

const greet = name => `Hello ${name}!`;

// No código acima, a função arrow é armazenada na variável greet e você pode chamá-la da seguinte maneira:

greet('Asser');
//Output: Hello Asser!



// Parênteses e parâmetros da função arrow

// Você pode ter reparado que a função arrow armazenada na variável greet tem o seguinte formato:
name => `Hello ${name}!`
// A lista de parâmetros aparece antes da flecha da arrow (=>). Caso essa lista só possua um parâmetro, você pode escrevê-la como no exemplo acima, omitindo os parênteses. No entanto, se houver dois ou mais itens na lista de parâmetros ou mesmo não houver nenhum parâmetro na lista, você precisará envolver a lista em parênteses.
// lista de parâmetros vazia exige parênteses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();
//Output: Hello Udacity Student!

// múltiplos parâmetros na lista, parênteses obrigatórios!
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');
//Output: Here's your chocolate ice cream in a waffle cone.


//Sintaxe concisa e sintaxe block
//Todas as funções arrow que olhamos até aqui só possuiam uma única expressão no corpo da função:
const upperizedNames5 = ['Farrin', 'Kagure', 'Asser'].map(
    name => name.toUpperCase()
);

// Esse formato de corpo da função é chamado de "sintaxe concisa do corpo da função". A sintaxe concisa:

// não tem chaves envolvendo o corpo da função
// e retorna uma expressão automaticamente
// Se você precisar de mais de uma linha de código, poderá usar a "sintaxe block" para o corpo da função.
const upperizedNames6 = ['Farrin', 'Kagure', 'Asser'].map(name => {
    name = name.toUpperCase();
    return `${name} has ${name.length} characters in their name`;
});
//Output: (3) ['FARRIN has 6 characters in their name', 'KAGURE has 6 characters in their name', 'ASSER has 5 characters in their name']

//   Detalhes importantes para se ter em mente ao utilizar a sintaxe block:

//   necessita de chaves ({}) para envolver o corpo da função
//   e utilizar uma expressão de return para retornar algum valor da função.








