/*
==========================
    Aula 4: Maps
==========================
Se sets e arrays possuem similaridades, então maps e objetos também são similares, pois maps armazenam pares de chave-valor de forma similar à maneira que objetos contêm propriedades com nomes e valores.

Basicamente, um map é um objeto que permite armazenar pares de chave-valor onde tanto as chaves como os valores podem ser objetos, valores primitivos ou uma combinação dos dois.
*/

//Criar um map
const employees = new Map();
console.log(employees);
//Output: Map {}

//Diferentemente dos sets, você não pode criar maps a partir de uma lista de valores; em vez disso, você adiciona pares de chave-valor utilizando o método .set().

const employees2 = new Map();

employees2.set('james.parkes@udacity.com', {
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer'
});
employees2.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees2.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees2);
//Output: Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}}

//O método .set() recebe dois parâmetros. O primeiro parâmetro é a chave, que é utilizada para referenciar o segundo argumento, o valor.

//Para remover pares chave-valor, simplesmente use o método .delete().

employees2.delete('julia@udacity.com');

//Novamente, de forma análoga aos sets, você pode utilizar o método .clear() para remover todos os pares chave-valor contidos no map.

employees2.clear()

//se você utilizar o método .set() para adicionar um par chave-valor a um map que já utiliza a mesma chave, você não receberá um erro, mas o par chave-valor sobrescreverá o par já existente no map. Se você tentar usar o método .delete() para excluir um par chave-valor que não está no map, também não receberá um erro e o map permanecerá inalterado.

//Os dois métodos retornam true se um par chave-valor é adicionado ou removido com sucesso do map e, caso contrário, retorna false.

//---------------------------------------------------

//Depois de construir seu map, você pode utilizar o método .has() para checar se um par chave-valor existe, passando a chave como parâmetro.

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));
//Output: false, true

// E você também pode recuperar valores contidos em um map, utilizando o método .get() e passando a chave como parâmetro.

console.log(members.get('Evelyn'));
//Output: 75.68

//---------------------------------------------------
//Iterando por um map

// Você criou um map, adicionou alguns pares chave-valor e, agora, quer iterar pelos items de seu map. Felizmente, você pode escolher entre três diferentes opções:

// 1. Acesse cada chave ou valor usando o iterator padrão do map
// 2. Itere por cada par chave-valor utilizando o novo loop for...of
// 3. Itere por cada par chave-valor utilizando o método .forEach() do map

// 1: Usando MapIterator
// Usar tanto o método .keys() como o método .values() em um map retornará um novo objeto iterator, chamado de MapIterator. Você pode armazenar esse iterator em uma nova variável e utilizar o método .next() para acessar todos os pares chave-valor do map em um loop. O método utilizado determinará se seu iterator possui acesso às chaves ou valores do map.

let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();
//Output: Object {value: 'Evelyn', done: false}

//Use .next() para recuperar o próximo valor de uma chave.
iteratorObjForKeys.next();
//Object {value: 'Liam', done: false}

//E assim por diante.

//Por outro lado, use o .values() para acessar os valores dos pares chave-valor, repetindo o mesmo processo.

let iteratorObjForValues = members.values();
iteratorObjForValues.next();
//Output: Object {value: 75.68, done: false}

// 2. Usando um loop 'for...of'
//Sua segunda opção para executar iterar pelos itens de um map, é utilizando um loop for...of.

for (const member of members) {
    console.log(member);
}
//Output:
//  ['Evelyn', 75.68]
//  ['Liam', 20.16]
//  ['Sophia', 0]
//  ['Marcus', 10.25]

//No entanto, quando você utiliza um loop for...of com um map, não recupera exatamente um par chave-valor. Na verdade, o par chave-valor é separado para uma array onde o primeiro elemento é a chave e o segundo elemento é o valor. Será que existe alguma maneira de corrigir isso?

const members2 = new Map();

members2.set('Evelyn', 75.68);
members2.set('Liam', 20.16);
members2.set('Sophia', 0);
members2.set('Marcus', 10.25);

for (const [key, value] of members2.entries()) {
    console.log(key, value);
}

// 3. Usando um loop 'forEach'
//Sua última opção para percorrer um map é com o método .forEach().
members2.forEach((value, key) => console.log(value, key));
// Output:
// 'Evelyn' 75.68
// 'Liam' 20.16
// 'Sophia' 0
// 'Marcus' 10.25
//Observe como foi possível, com a ajuda de uma arrow function, melhorar a legibilidade do loop forEach. Para cada value e key no map members, imprima no console value e key.

//----------------------------------------------------

//O que é um WeakMap?
//Um WeakMap como um map normal, com algumas pequenas diferenças:
// 1. um WeakMap só pode conter objetos como chaves,
// 2. um WeakMap não é um iterable, o que significa que não é possível executar um loop para varrer seu conteúdo e
// 3. um WeakMap não possui um método .clear().
// Você pode criar um WeakMap assim como você poderia criar um map normal, exceto pelo uso da palavra WeakMap no construtor.
const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);
//Output:
//WeakMap {Object {title: 'Pride and Prejudice', author: 'Jane Austen'} => true, Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}
//…mas, se você tentar adicionar algo diferente de um objeto como uma chave, receberá um erro!
library.set('The Grapes of Wrath', false);
//Output: Uncaught TypeError: Invalid value used as weak map key(…)

//Esse é um comportamento esperado, porque o WeakMap só pode conter objetos como chaves. Novamente, de forma similar aos WeakSets, os WeakMaps também são bastante úteis para tirar maior proveito dos ciclos de garbage collection.

//----------------------------------------------------

//Garbage collection

// No JavaScript, a memória é alocada quando novos valores são criados e é automaticamente liberada quando esses valores não são necessários. Esse processo de liberação de memória após o desuso é conhecido como garbage collection.

// Os WeakMaps se aproveitam do garbage collection ao trabalhar exclusivamente com objetos no lugar das chaves. Se você alterar o valor de um objeto para null, então estará, basicamente, excluindo o objeto. Quando o garbage collector do JavaScript rodar, a memória ocupada por esse objeto anteriormente será liberada para ser usada posteriormente em seu programa.

book1 = null;
console.log(library);

//Output: WeakMap {Object {title: 'The Catcher in the Rye', author: 'J.D. Salinger'} => false, Object {title: 'Gulliver’s Travels', author: 'Jonathan Swift'} => true}

// O que torna isso tão útil é o fato de que você não precisa se preocupar em excluir referências de objetos deletados em seus WeakMaps, o JavaScript o fará para você de maneira automática! Quando um objeto é excluído, a chave do objeto também será removida do WeakMap quando o garbage colletion for executado, o que torna os WeakMaps muito úteis em situações onde você deseja uma solução leve e eficiente para criar grupos de objetos com metadados.

// O momento exato no tempo onde ocorre o garbage collection depende de muitos diferentes fatores. Dê uma olhada na documentação MDN(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#garbage_collection) para aprender mais sobre os algoritmos utilizados para controlar o garbage collection no JavaScript. 


