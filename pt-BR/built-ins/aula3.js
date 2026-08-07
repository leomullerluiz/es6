/*
==========================
    Aula 3: Sets
==========================
Na matemática, um set (conjunto, na tradução literal) é uma coleção de items diferentes entre si. Por exemplo, {2, 4, 5, 6} é um set porque cada número é único e aparece uma só vez. No entanto, {1, 1, 2, 4} não é um set, pois contém itens duplicados (o 1 está lá mais de uma vez!).

Em JavaScript, nós já podemos nos beneficiar de algo similar ao set matemático usando uma array.

*/
const nums = [2, 4, 5, 6];

//No entanto, arrays não forçam os items a serem únicos. Se tentarmos adicionar outro à array nums, o JavaScript não reclamará e o adicionará sem problemas.

nums.push(2);
console.log(nums);
//Output: [2, 4, 5, 6, 2]
//…e agora nums não é mais um set no sentido matemático da palavra.

//Sets

//No ES6, existe uma novo objeto padrão que se comporta como um set matemático e funciona de maneira similar ao funcionamento de uma array. Esse novo objeto é chamado de set, por convenção. As maiores diferenças entre set e array são:

// - Sets não possuem índices - você não faz referência a items do set com base em suas posições no set
// - items em um set não podem ser acessados individualmente.

//Basicamente, um set é um objeto que permite armazenar items únicos. Você pode adicionar items a um set, remover items de um set e iterar por um set. Esses items podem ser tanto valores primitivos como objetos complexos.

const games = new Set();
console.log(games);

// Output: Set {}

//Isso cria um set games, sem nenhum item.

//Se você quer criar um set a partir de uma lista de valores, pode passar uma array como parâmetro no construtor:

const games2 = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games2);
//Output: Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}

//Note como, no exemplo acima, o item duplicado "Super Mario Bros." é desconsiderado quando o set é criado. Bem bacana!


// Modificando sets
//Depois de ter criado um set, você provavelmente desejará adicionar ou deletar items dele. Então, como podemos fazer isso? Use os métodos apropriados .add() e .delete():


const games3 = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games3.add('Banjo-Tooie');
games3.add('Age of Empires');
games3.delete('Super Mario Bros.');

console.log(games3);
//Output: Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}

//Por outro lado, se você deseja deletar todos os items de um set, você pode usar o método .clear().

games3.clear()
console.log(games3);
//Output: Set {}

//DICA: se você tentar .add() (adicionar) um item duplicado a um set, não receberá um erro, mas o item não será adicionado ao set. Além disso, caso tente .delete() (remover) um item que não esteja em um set, você não receberá um erro, e o set permanecerá inalterado. Ambos os métodos retornam true se um item for adicionado ou removido com sucesso do set e false se isso não ocorrer.

//Checando o comprimento

//Uma vez que seu set foi construído, existem diferentes propriedades e métodos que podem ser utilizados para trabalhar com ele.

//Utiliza a propriedade .size para retornar o número de items em um set:

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);
//Output: 12

//Lembre-se, items dos sets não podem ser acessados por um índice como uma array, então, você pode utilizar a propriedade .size, em vez de .length, para recuperar o tamanho do set.


//Checando se um item existe
//Utilize o método .has() para checar se um item existe em um set. Se o item estiver no set, o método .has() retornará true. Caso contrário, retornará false.

console.log(months.has('September'));
//Output: true


//Recuperando todos os valores
//Finalmente, use o método .values() para retornar todos os valores de um set. O valor retornado pelo método .values() é um objeto SetIterator.

console.log(months.values());
//Output: SetIterator { 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' }

//DICA: O método .keys() irá se comportar exatamente da mesma maneira que o método .values(), retornando os valores de um Set com um novo objeto iterator. O método .keys() é um "alias" para o método .values() por similaridade com maps.

//O último passo para trabalhar com sets é iterar por seus items.
//Como vimos na discussão anterior sobre os novos protocolos iterable e iterator no ES6, os sets são iterables disponíveis por padrão. Isso significa duas coisas em termos de looping:
// 1.Você pode usar o iterator padrão de um set para percorrer cada item do set, um por um.
// 2. Você pode utilizar o novo loop for...of para percorrer cada item de um set.

//Usando o SetIterator

//Como o método .values() retorna um novo objeto iterator (chamado de SetIterator), você poderá armazenar esse iterator em uma variável e percorrer cada item do set por um loop, usando o método .next().
const iterator = months.values();
iterator.next();
//Output: Object {value: 'January', done: false}

//E se você executar o .next() novamente?

iterator.next();
//Output: Object {value: 'February', done: false}

//E assim sucessivamente, até que done seja igual a true, o que marca o fim do set.


//Usando um loop for...of
//Uma maneira mais fácil de iterar por meio dos items de um set é utilizando o loop for...of.

const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
    console.log(color);
}

//Outut: ]
/*
red
orange
yellow
green
blue
violet
brown
black
*/


const myFavoriteFlavors = new Set()
myFavoriteFlavors.add("chocolate chip")
myFavoriteFlavors.add("cookies and cream")
myFavoriteFlavors.add("strawberry")
myFavoriteFlavors.add("vanilla")
myFavoriteFlavors.delete("strawberry")
console.log(myFavoriteFlavors)


/*==================================
    WeakSet
====================================*/
//Um WeakSet é como um set normal, mas com algumas diferenças-chave:
// 1. um WeakSet só pode conter objetos
// 2. um WeakSet não é um iterable, o que significa que não é possível iterar por seus itens
// 3. um WeakSet não possui o método .clear()

const student1 = { name: 'James', age: 26, gender: 'male' };
const student2 = { name: 'Julia', age: 27, gender: 'female' };
const student3 = { name: 'Richard', age: 31, gender: 'male' };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
// output: WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'Richard', age: 31, gender: 'male'}, Object {name: 'James', age: 26, gender: 'male'}}

//…mas, se você tentar adicionar algo que não seja um objeto, receberá um erro!
roster.add('Amanda');
//Output: Uncaught TypeError: Invalid value used in weak set(…)

//Esse comportamento é esperado, porque WeakSets só podem conter objetos. Mas, por que WeakSets só deveria conter objetos? Por que você deveria usar um WeakSet, se um set normal pode conter objetos e outros tipos de dados? Bem, a resposta para essa pergunta está mais relacionada com por que WeakSets não possuem um método .clear()...

//Garbage collection
//No JavaScript, a memória é alocada quando novos valores são criados, e é automaticamente liberada quando esses valores não são necessários. Esse processo de liberação de memória após o desuso é conhecido como garbage collection.
//Os WeakSets se aproveitam do garbage collection ao trabalhar exclusivamente com objetos. Se você alterar o valor de um objeto para `null, então estará, basicamente, removendo o objeto. Quando o garbage collector do JavaScript rodar, a memória ocupada por esse objeto anteriormente será liberada para uso posterior em seu programa.

student3 = null;
console.log(roster);
//Output: WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'James', age: 26, gender: 'male'}}

// O que torna isso tão útil é o fato de que você não precisa se preocupar em excluir referências de objetos deletados em seus WeakSets, o JavaScript o fará para você de maneira automática! Quando um objeto é deletado, ele também será deletado do WeakSet quando o garbage colletion for executado, o que torna os WeakSets muito úteis em situações onde você deseja uma solução leve e eficiente para criar grupos de objetos.

//O momento exato no tempo onde ocorre o garbage collection depende de muitos diferentes fatores. Dê uma olhada na documentação MDN(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#garbage_collection) para aprender mais sobre os algoritmos utilizados para controlar o garbage collection no JavaScript.

const uniqueFlavors = new WeakSet();
const flavor1 = { flavor: "chocolate" };
const flavor2 = { flavor: "vanilla" };
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
console.log(uniqueFlavors);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);

