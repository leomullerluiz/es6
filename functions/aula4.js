/*
===========================================
    Aula 4: parâmetros default
===========================================
Dê uma olhada neste código:
*/
function greet(name, greeting) {
    name = (typeof name !== 'undefined') ? name : 'Student';
    greeting = (typeof greeting !== 'undefined') ? greeting : 'Welcome';

    return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!
//Output:
// Welcome Student!
// Welcome James!
// Howdy Richard!

// O que é essa bagunça estranha nas primeiras duas linhas da função greet()? Essas duas linhas servem para estipular valores padrão se os argumentos não forem passados para a função, mas é muito feio...

// Felizmente, foi introduzido ao ES6 uma nova maneira de criar argumentos padrão, chamada de parâmetros de função default


// Parâmetros de função default
// Parâmetros de função default são muito fáceis de ler, já que ficam na lista de parâmetros da função:

function greet(name = 'Student', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

// Para criar um parâmetro default, devemos adicionar um sinal de igual e o valor que desejamos que seja o valor do parâmetro, caso a função não receba outro valor nesta posição de parâmetro quando for chamada. No código acima, os dois parâmetros possuem valores padrão de strings, mas podem receber qualquer tipo JavaScript.








