/*
===========================================
            Aula 5: Iteração | iterable
===========================================
O for...of loop é a adição mais recente à família de for loops em JavaScript.

Este loop combina a força dos irmãos, o for loop e for...in loop, para iterar sobre dados considerados iteráveis ou iterable (que seguem o protocolo iterable( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols ) que nós vamos estudar na aula 3). Por padrão, isso inclui os tipos de dados string, array, map e set — é fácil perceber a ausência do tipo de dado Object ({}, por exemplo) nessa lista. Objetos não são iteráveis (iterables) por padrão.

Antes de estudarmos o for...of loop, vamos dar uma olhada nos outros for loops para entender suas fraquezas.

For Loop:
O for loop é óbviamente o loop mais comum existente, então, aqui faremos uma rápida revisão.
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
    console.log(digits[i]);
}
/*
Output:
0
1
2
3
4
5
6
7
8
9

*/

/*
As maiores desvantagens do for loop são ter que manter o controle do contador e da condição de saída do loop.

Nesse exemplo, estamos usando a variável i como um contador para manter o controle do loop e acessar as variáveis na array. Também estamos utilizando a propriedade da array digits.length para determinar a condição de saída do loop. Se você olhar esse código rapidamente, pode ser difícil identificar o que está acontecendo, principalmente para iniciantes.

Enquanto for loops certamente possuem vantagens quando iteramos em arrays, algumas estruturas de dados são diferentes da array, fazendo com que um for loop deixe de ser uma opção nesses casos.
*/


/*
for...in loop:
O for...in loop reduz as fraquezas do for loop, eliminando a contagem lógica e a condição de saída.
*/
const digits2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits2) {
    console.log(digits[index]);
}
/*
Output:
0
1
2
3
4
5
6
7
8
9
*/

/*
Mas você ainda tem que lidar com um index para acessar os valores da array, e isso é um mal sinal; torna o código quase mais confuso do que antes.

Além disso, o for...in loop pode te colocar em uma enrascada quando você precisar adicionar métodos extras a uma array (ou outro objeto) porque for...in loops iteram por todas as propriedades enumeráveis, o que fará com que as propriedades adicionadas ao prototype de array também aparecerão no loop.
*/
Array.prototype.decimalfy = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toFixed(2);
    }
};

const digits3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits3) {
    console.log(digits[index]);
}

/*
0
1
2
3
4
5
6
7
8
9
function() {
 for (let i = 0; i < this.length; i++) {
  this[i] = this[i].toFixed(2);
 }
}
*/

/*
Horrível! Esse é o motivo pelo qual for...in loops não são recomendados para iterar por arrays.
OBSERVAÇÃO: o forEach loop é outro tipo de for loop em JavaScript, porém, forEach() é um método de array, então ele só pode ser utilizado por arrays. Também não existe maneira de parar ou interromper um forEach loop. Se você precisa desse tipo de comportamento, terá que usar um for loop básico.
*/

/*
Loop for...of:
O for...of loop é utilizado para iterar qualquer tipo de dado que seja um iterable.

Você escreve um loop for...of exatamente da maneira como escreveria um loop for...in, exceto pela troca do in pelo of e pelo fato de que você não precisa de um index.
*/

const digits4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits4) {
  console.log(digit);
}

/*
Output:
0
1
2
3
4
5
6
7
8
9
*/

/*
Isso torna o loop for...of o mais enxuto de todos os loops for.
DICA: é uma boa prática utilizar nomes no plural para objetos que são coleções de valores. Dessa forma, quando você iterar pela coleção, pode usar o singular do nome da coleção para representar um item individual contido nela. Por exemplo, for (const button of buttons) {...}.
*/

const digits5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits5) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
/*
Output:
1
3
5
7
9

*/

