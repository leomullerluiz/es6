/*

===========================================
            Aula 2: Template literals
===========================================

Antes do ES6, a maneira antiga de se concatenar strings era usando o operador de concatenação ( + ).

*/

const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
  };
  
  const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
  }
  
  let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';

// Output: Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.

/* Isso funciona, mas fica mais complicado quando você precisa construir strings de múltiplas linhas. */
let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;
/* Output:
Mrs. Wilson,

Please excuse Richard Kalehoff.
He is recovering from the flu.

Thank you,
Mr. Kalehoff
*/

/*

No entanto, isso mudou com a introdução das template literals (conhecidas anteriormente, nas versões de desenvolvimento da ES6, como "template strings").

OBSERVAÇÃO: como uma alternativa ao uso do operador de concatenção de string, ( + ), você pode usar o método concat() do objeto string, mas as duas opções são bem fracas para simular a verdadeira interpolação de strings
https://en.wikipedia.org/wiki/String_interpolation

*/

/*

Template literals
Template literals são essencialmente string literals que incluem expressões embutidas.

Delimitadas por backticks ( ` `) em vez de apóstrofo ( '' ) ou aspas duplas ( "" ), template literals podem conter marcadores representados pela sintaxe ${expressão}. Isso torna a construção de strings muito mais fácil .

Veja os exemplos anteriores, agora utilizando template literals.

*/
let message2 = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
//Output: Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.

/*
Utilizando template literals, você pode abandonar as aspas e o operador de concatenação de strings. Além disso, pode referenciar as propriedades de um objeto no interior das expressões.

DICA: expressões embutidas no interior de template literals podem fazer mais do que apenas referenciar variáveis. Você pode executar operações, chamar funções e até mesmo usar loops dentro das expressões embutidas!
*/

