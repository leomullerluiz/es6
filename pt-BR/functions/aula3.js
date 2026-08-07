/*
===========================================
    Aula 3: this in Arrow Functions
===========================================
Em funções regulares, o valor de this é configurado baseado em como a função é chamada. Em funções arrow, o valor de this é baseado no contexto em que a função se encontra. Em outras palavras, o valor de this no interior de uma função arrow é o mesmo que seu valor fora da função.

Vejamos outro exemplo de this em funções regulares e, depois, vamos checar como as funções arrow funcionam.
*/
// constructor
function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
    setTimeout(function () {
        this.scoops++;
        console.log('scoop added!');
    }, 500);
};

const dessert = new IceCream();
dessert.addScoop();
// Output: scoop added!
// Depois de executar o código acima, você pode pensar que dessert.scoops seria 1 depois de meio segundo. Mas, infelizmente, não é:
console.log(dessert.scoops);
//Output: 0
// Você consegue identificar o motivo?
// A função passada para setTimeOut() é chamada sem a palavra reservada new (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) , sem o método call(), sem apply() e sem um objeto contexto. Isso significa que o valor de this dentro da função é o objeto global e não o objeto dessert criado (com um valor padrão undefined). Em seguida, a nova propriedade do objeto global é incrementada (undefined + 1 resultando em NaN):
console.log(scoops);
//Output: NaN

//Uma maneira de contornar isso é utilizando closure:
// constructor
function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
    const cone = this; // sets `this` to the `cone` variable
    setTimeout(function () {
        cone.scoops++; // references the `cone` variable
        console.log('scoop added!');
    }, 0.5);
};

const dessert2 = new IceCream();
dessert2.addScoop();

// O código acima funcionará porque, em vez de usar this no interior de uma função, ele atribui ao cone a variável this e incrementa uma propriedade da variável cone quando a função é chamada. Como a função está utilizando o valor de this de fora da função, isso funciona. Se checarmos agora o valor da propriedade scoops do objeto dessert, veremos o valor esperado 1:
console.log(dessert2.scoops);
//Output: 1

// Isso é exatamente o que as funções arrow fazem, então, vamos substituir a função passada como parâmetro para setTimeout() por uma arrow function:
// constructor
function IceCream() {
    this.scoops = 0;
  }
  
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    setTimeout(() => { // an arrow function is passed to setTimeout
      this.scoops++;
      console.log('scoop added!');
    }, 0.5);
  };
  
  const dessert3 = new IceCream();
  dessert3.addScoop();
//Como as funções arrow herdam this do escopo onde estão contidas, esse código funciona!
console.log(dessert3.scoops);
// Output: 1

// Quando addScoop() é chamado, o valor de this dentro de addScoop() faz referência a dessert. Como uma função arrow é passada como parâmetro para setTimeout(), o contexto onde ela está inserida é utilizado para determinar o valor de this. Como this, fora da função arrow, faz referência ao objeto dessert, o valor de this dentro da arrow também fará referência a dessert.

// Agora, o que você acha que aconteceria se alterássemos o método addScoop() para uma função arrow?
// constructor
function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = () => { // addScoop is now an arrow function
  setTimeout(() => {
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert4 = new IceCream();
dessert4.addScoop();

// Sim, isso não funciona pelo mesmo motivo - as funções arrow herdam o valor de this do contexto onde estão inseridas. Fora do escopo do método addScoop(), o valor de this é o objeto global; portanto, se addScoop() é uma função arrow, o valor de this em seu contexto interno é o objeto global.



