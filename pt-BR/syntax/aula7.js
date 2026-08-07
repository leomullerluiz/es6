/*
===========================================
            Aula 7: Parametro ...rest
===========================================
Se você pode utilizar o operador spread em diversos elementos, então, certamente deve haver uma forma de agrupar diversos elementos na array novamente, certo?

Pois há mesmo! Ela se chama parâmetro rest, e é mais uma novidade em ES6.
*/

// O parâmetro rest, também escrito com três pontos consecutivos ( ... ), permite que você represente um número indefinido de elementos como uma array. Isso pode ser útil em diversas situações.

// Uma situação é a atribuição de valores de uma array para variáveis. Por exemplo,

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

//Output: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

// Esse código recupera os valores da array order e os atribui a variáveis isoladas usando destructuring. total, subtotal e tax recebem os três primeiros valores da array, enquanto items é onde você deve prestar mais atenção.

// Utilizando o parâmetro rest, items recebe o resto dos valores da array (no formato de uma array).

// Funções variádicas (Variadic functions)

// Outro caso de uso para o parâmetro rest é quando se está trabalhando com funções variadic. Funções variadic são funções que podem receber um número indefinido de argumentos.

// Por exemplo, digamos que temos uma função chamada sum(), que calcula a soma de um número indefinido de números. Como a função sum() poderia ser chamada em tempo de execução?


sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);

// Existe, literalmente, um número indefinido de possíveis maneiras de se chamar a função sum(). Independentemente da quantidade de parâmetros passados para a função, ela sempre deverá retornar o total da soma desses parâmetros.


// Usando o objeto arguments
// Nas versões anteriores do JavaScript, esse tipo de função seria criado utilizando o objeto arguments(opens in a new tab). O objeto arguments é um objeto similar a uma array, que está disponível como uma variável local no interior de qualquer função. Esse objeto contém um valor para cada argumento que está sendo passado para a função, começando em 0 para o primeiro argumento, 1 para o segundo e assim por diante.
// Se observarmos a implmenentação da função sum(), veremos como o objeto arguments poderia ser usado para tratar a quantidade variável de parâmetros que está sendo passada para ele.

function sum() {
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    return total;
}

// 1. Analisando a implementação da função sum(), vemos que ela não possui nenhum parâmetro.
//   -Isso pode nos levar ao erro, pois sabemos que a função sum() pode receber um número indefinido de parâmetros.

// 2. Pode ser difícil de entender.
//   -Se você nunca utilizou o objeto arguments, pode estar se perguntando de onde ele surgiu. Apareceu do nada? Realmente é difícil perceber.

// Usando o parâmetro rest
// Felizmente, com a adição do parâmetro rest, você pode re-escrever a função sum() e torná-la mais legível.

function sum(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

//Essa versão da função sum() não só é mais enxuta como é mais fácil de ler. Além disso, observe que o loop for...in foi substituído pelo for...of loop



