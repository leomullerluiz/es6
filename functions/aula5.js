/*
===========================================
    Aula 5: Defaults e arrays destructuring
===========================================
É possível combinar de parâmetros default a destructuring para criar funções muito poderosas!
*/

function createGrid([width = 5, height = 5]) {
    return `Generates a ${width} x ${height} grid`;
  }
  
  createGrid([]); // Generates a 5 x 5 grid
  createGrid([2]); // Generates a 2 x 5 grid
  createGrid([2, 3]); // Generates a 2 x 3 grid
  createGrid([undefined, 3]); // Generates a 5 x 3 grid

//   A função createGrid() espera uma array como parâmetro e utiliza destructuring para extrair o primeiro item da array e passá-lo no lugar da variável width, e faz o mesmo com a segundo item da array, passando-o no lugar do parâmetro height. Se a array estiver vazia ou só possuir um dos dois itens, os parâmetros default assumem e passam seu valor no lugar das variáveis que estiverem faltando.

// Existe um problema na função createGrid(). O código abaixo não funcionará:


createGrid(); 
//Output: Uncaught TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined

// Isso gera um erro porque createGrid() espera uma array como parâmetro, para que possa realizar o processo de destructuring. Uma vez que a função foi chamda sem passar uma array, ocorre um erro, mas podemos utilizar parâmetros de função default a fim de resolver o problema!

function createGrid([width = 5, height = 5] = []) {
    return `Generating a grid of ${width} by ${height}`;
  }

//   Repare no novo = [] na lista de parâmetros da função. Se createGrid() for chamada sem nenhum argumento, o valor default será utilizado, ou seja, uma array vazia será passada como parâmetro. Caso o método receba a array vazia, não há valores para fazer o destructuring e atribuir às variáveis width e height, então, seus valores padrão serão aplicados. Assim, adicionando o = [] como o default para o parâmetro inteiro, o código a seguir funcionará:


createGrid(); // Generates a 5 x 5 grid



//Defaults e objetos destructuring
// Assim como a array destructuring pode ser combinada a array defaults, uma função pode ter um objeto com parâmetro default e utilizar objeto destructuring:


function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }
  
  createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
  createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
  createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
  createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.


//   Assim como o exemplo da array anterior, se você chamar a função sem argumentos, ela não funcionará:
createSundae(); // Output: Uncaught TypeError: Cannot match against 'undefined' or 'null'.

// Podemos prevenir esse problema disponibilizando um objeto default para a função:

function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }

//   Adicionando um objeto vazio como o default parameter para os casos em que nenhum argumento for passado para a função, permite que a função seja chamada sem nenhum parâmetro e não ocorram erros.


function buildHouse({floors = 1, color = 'red', wallls = 'brick'} = {}) {
    return `Your house gas ${floors} floor(s) with ${color} ${wallls} walls.`;
}
