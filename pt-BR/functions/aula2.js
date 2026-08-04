/*
===========================================
    Aula 2: this in Regular Functions
===========================================

Para ter uma noção de como o this funciona de forma diferente nas funções arrow, vamos fazer uma pequena revisão de como o this funciona em uma função padrão.

O valor da palavra-chave this é completamente baseado em como a função ou método ao qual ela se refere é chamado. A this pode ter seu valor definido das seguintes formas:

*/

// 1. Um novo objeto
// Se a função foi chamada utilizando new:
const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']); 
// No código acima, o valor do this dentro do escopo de Sundae é um novo objeto, porque ele foi chamado com new.

// 2. Um objeto específico
// Caso a função tenha sido invocada com call/apply:
const result = obj1.printName.call(obj2);
// No código acima, o valor do this dentro do escopo de printName() fará referência ao obj2, uma vez que o primeiro parâmetro do método do call() é explicitamente configurado como o objeto para o qual o this faz referência.

// 3. O objeto de um contexto
// Se a função é o método de um objeto:
data.teleport();
// No código acima, o valor do this dentro do escopo do método teleport() faz referência à data.

// 4. O objeto global ou undefinet
// Se a função é invocada fora de um contexto específico (não é um método):
teleport();
// No código acima, o valor do this dentro do escopo de teleport() é o objeto global ou, se o modo strict estiver ativado, é undefined

// DICA: a palavra this é um tópico complicado em JavaScript. Nós fizemos uma rápida revisão, mas, para uma consulta detalhada sobre como this é determinada, dê uma olhada em this All Makes Sense Now!( https://github.com/getify/You-Dont-Know-JS/tree/master ), da série de livros do autor Kyle Simpson, You Don't Know JS (conteúdo em inglês)

