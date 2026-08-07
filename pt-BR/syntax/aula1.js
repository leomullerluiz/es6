/*

===========================================
            Aula 1: let e const
===========================================


Agora, existem duas novas formas de declarar variáveis em JavaScript: let e const.
Antes dessa atualização, a única forma de declarar uma variável em JavaScript era usando a palavra reservada var. Para entender o motivo para a adição das palavras reservadas let e const, vamos analisar um exemplo de uso do var que poderia nos causar problemas.
Dê uma olhada no código a seguir.
*/
function getClothing(isCold) {
    if (isCold) {
        var freezing = 'Grab a jacket!';
    } else {
        var hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
} //Output: Undefined

/*
Hoisting:
Hoisting é o resultado de como o código JavaScript é interpretado pelo seu navegador. Normalmente, antes de qualquer código JavaScript ser executado, todas as variáveis declaradas com var sofrem "hoisting", o que significa que elas, na verdade, são declaradas no topo do escopo da função. Portanto, em tempo de execução, a função getClothing() na verdade funciona mais ou menos assim…
*/

function getClothing(isCold) {
    var freezing;
    var hot;
    if (isCold) {
        freezing = 'Grab a jacket!';
    } else {
        hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}

/*
Antes da função ser executada, todas as variáveis são "içadas" para o topo do escopo da função. Então, qual é a solução para isso?
*/

/*
Let e const:
Variáveis declaradas com let e const eliminam esse problema específico do hoisting, pois seu escopo é do bloco onde foram declaradas, e não o escopo da função. Antes, quando usávamos var, variáveis possuíam o escopo global ou o escopo local de uma função inteira.

Se uma variável é declarada usando let ou const no interior de um bloco de código (delimitado por chaves { }), então a variável fica presa no que chamamos de zona morta temporal até que a declaração da variável seja processada. Esse comportamento garante que as variáveis só possam ser acessadas após a sua declaração.
*/

function getClothing(isCold) {
    if (isCold) {
        let freezing = 'Grab a jacket!';
    } else {
        const hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}//Output: ReferenceError: freezing is not defined

/*

Como freezing não é declarado dentro do elemento else, o escopo da função, ou escopo global, um ReferenceError é passado.

Variáveis declaradas com `let` e `const` só estão disponíveis dentro do bloco em que são declaradas.

*/

/*

Regras para usar let e const:

let e const também possuem outras propriedades interessantes:
 - Variáveis declaradas com let podem ter seu valor reatribuído, mas não podem ser redeclaradas no mesmo escopo.
 - Variáveis declaradas com const devem ter um valor inicial atribuído, mas não podem ser redeclaradas no mesmo escopo e não podem ter seu valor reatribuído.

 */

/*
Casos de uso
A grande questão é: quando você deve usar let e quando você deve usar const? A regra geral é a seguinte:

use let quando você pretender reatribuir novos valores para uma variável.
use const quando você não pretender reatribuir novos valores para uma variável.
Uma vez que const é a maneira mais restrita de se declarar uma variável, nós sugerimos que você sempre declare variáveis com const, porque isso tornará seu código mais legível, uma vez que você sabe que esses valores não serão alterados ao longo da execução de seu programa. Se você achar que será necessário atualizar ou modificar uma variável, volte atrás e troque de const para let.

Bem fácil, não é mesmo? Mas e quanto ao var?

E quanto ao var?
Ainda existe alguma razão para utilizar var ? Na verdade não.

Existem poucos argumentos para defender o uso da palavra reservada var em situações em que você quer declarar uma variável globalmente, mas isso é considerado má prática e deve ser evitado. De agora em diante, sugerimos que você abandone o var e utilize let ou const.

*/
