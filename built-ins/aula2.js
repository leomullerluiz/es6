/*
==========================
    Aula 2: Iteração e protocolo iterable

    Iteração é um conceito fundamental em programação que descreve o processo de percorrer uma sequência de elementos, geralmente em ordem, para realizar alguma operação ou acessar cada elemento individualmente.
==========================

O protocolo iterable é utilizado para definir e personalizar o comportamento de iteração de objetos. Isso significa que, no ES6, você agora tem a flexibilidade de especificar uma maneira de iterar por meio dos valores em um objeto. Para alguns objetos, esse comportamento é nativo na linguagem, como em strings e arrays.
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
  console.log(digit);
}

// Se você se lembra da aula 1, qualquer objeto que é um iterable pode usar o novo loop for...of. Ao longo desta aula, você também aprenderá sobre Sets e Maps, que são outros exemplos de iterables nativos da linguagem.


// Como funciona
// Para que um objeto seja um iterable, ele deve implementar a interface iterable. Se você já utilizou alguma linguagem como Java ou C, provavelmente já tem familiaridade com interfaces, mas, para aqueles que não estiverem, isso significa que, para um objeto ser um iterable, ele deve possuir um método padrão chamado iterator. Esse método definirá como o objeto deve ser iterado.

// O método iterator, que está disponível pela constante [Symbol.iterator], é uma função sem argumentos que retorna um objeto iterator. Um objeto interator é um objeto que tem conformidade com o protocolo iterator.

// O protocolo iterator é utilizado para definir uma maneira padrão para que um objeto produza uma sequência de valores. Isso significa que você agora possui um processo para definir como um objeto irá iterar. Isso é feito pela implementação do método .next().

// Um objeto se torna um iterator quando implementa o método .next(). O método .next() é uma função que recebe zero parâmetros e retorna um objeto com duas propriedades:

// value : a informação que representa o próximo valor da sequência de valores contida no objeto.
// done : um campo booleano que representa se o iterator finalizou o processo de percorrer a sequência de valores.
// Se done é true, então o iterator chegou ao fim da sequência de valores.
// Se done é false, então o iterator ainda é capaz de produzir outro valor na sequência de valores.
// Este é o exemplo anterior, porém, utilizando o iterator padrão da array para percorrer cada valor da array.

const digits2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits2[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

//Convertendo objeto para objeto iterator

const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185
};


//Resolução

const james2 = {
    name: 'James',
    height: `5'10"`,
    weight: 185,
    [Symbol.iterator]() {
        var keys = Object.keys(this);
        var i = 0;
        return {
            next: () => {
                const key = keys[i++];
                const value = this[key];
                const done = i >= keys.length;
                return { key, value, done};
            }
        };
    }
 };
 let iterator = james[Symbol.iterator]();

 



