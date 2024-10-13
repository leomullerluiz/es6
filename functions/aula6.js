/*
===========================================
    Aula 5: Prévia de classes
===========================================

Eis um pequeno exemplo de como uma classe em JavaScript se parece:

*/
class Dessert {
    constructor(calories = 250) {
        this.calories = calories;
    }
}

class IceCream extends Dessert {
    constructor(flavor, calories, toppings = []) {
        super(calories);
        this.flavor = flavor;
        this.toppings = toppings;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
}

//   Observe como a nova palavra reservada class aparece logo antes de Dessert e de IceCream, e como a nova palavra reservada extends aparece em class IceCream extends Dessert. Repare também em como o método super() é chamado dentro do método constructor() do IceCream.

//   Existem diversas palavras reservadas novas e sintaxe para brincar quando estamos criando classes em JavaScript, porém, antes de mergulharmos nas questões específicas sobre como escrever as classes em JavaScript, queremos apontar uma parte bastante confusa da linguagem JS quando comparada a linguagens baseadas em classes.

// Revisão de classes em ES
//Sabendo que as classes no ES6 são apenas uma miragem e escondem o fato de que, por debaixo dos panos, ocorre herança via prototypes , vamos dar uma olhada rápida em como criar classes com código ES5

function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
};

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();


//   No código acima, a função plane é um construtor que criará um novo objeto plane. As informações de um objeto plane específicos são passadas para a função plane e atribuídas ao objeto. Métodos que são "herdados" por cada objeto plane ficam localizados no objeto plane.prototype. richardsPlane é criado com um motor, enquanto jamesPlane é criado com quatro motores. No entanto, os dois objetos usam o mesmo método startEngines para ativar seus respectivos motores.

// Observações importantes:

// a função construtora é chamada com a palavra reservada new
// por convenção, o nome da função construtora começa com letra maiúscula
// a função construtora controla os dados que serão atribuidos ao objeto que será criado
// métodos herdados são colocados no objeto prototype da função construtora.
// Tenha isso em mente enquanto estudamos como as classes funcionam no ES6, pois, por debaixo dos panos, elas fazem exatamente isso.

//Classes no ES6
//Este é um exemplo de como a mesma classe Plane seria escrita com a nova sintaxe de class:
class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    startEngines() {
        console.log('starting engines…');
        this.enginesActive = true;
    }
}


// Class é apenas uma função
//Apenas para provar que não há nada de especial com a palvra reservada class no ES6, dê uma olhada neste código

class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    startEngines() {
        console.log('starting engines…');
        this.enginesActive = true;
    }
}

typeof Plane; // output: function,


// Métodos estáticos

// Para criar um método estático, coloca-se a palavra reservada static antes do nome do método. Veja o método badWeather() no código a seguir.

class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    static badWeather(planes) {
        for (let plane of planes) {
            plane.enginesActive = false;
        }
    }

    startEngines() {
        console.log('starting engines…');
        this.enginesActive = true;
    }
}

// Benefícios das classes

//   Menor configuração
// Utilizando a nova sintaxe, você precisará escrever muito menos código para criar a função construtora.

// Clareza na definição da função construtora
// No interior da definição da classe, você pode declarar explicitamente a função construtora.

// Tudo fica mais organizado
// Todo o código necessário para o funcionamento da classe fica contido no interior da declaração da própria classe, em vez de ter que declarar a função construtora em um lugar e depois adicionar os métodos ao objeto prototype um a um!


// Cuidados para tomar ao utilizar classes

// class não é magia
// A palavra reservada class traz consigo muitos conceitos utilizados por outras linguagens. Essa palavra reservada não adiciona a funcionalidade de forma mágica ao JavaScript

// class é apenas uma camada mais superficial sobre a herança via prototype
// Nós já dissemos isso várias vezes antes, mas, por debaixo dos panos, uma classe JavaScript apenas usa herança via prototype.

// Usar classes demanda o uso de new
// Quando criamos uma nova instância de uma classe JavaScript, a palavra reservada new deve ser utilizada.


class Toy {
    //...
}

const myToy1 = Toy(); // throws an error
// Output: Uncaught TypeError: Class constructor Toy cannot be invoked without 'new'


// mas, utilizar a palavra reservada new resolve o problema,

const myToy2 = new Toy(); // this works!


//Subclasses com ES6

// Agora que já vimos como criar classes em JavaScript, vamos utilizar as novas palavras reservadas super e extends para extender uma classe.

class Tree {
    constructor(size = '10', leaves = { spring: 'green', summer: 'green', fall: 'orange', winter: null }) {
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }

    changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
            this.size += 1;
        }
    }
}

class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves) {
        super(size, leaves);
        this.syrupQty = syrupQty;
    }

    changeSeason(season) {
        super.changeSeason(season);
        if (season === 'spring') {
            this.syrupQty += 1;
        }
    }

    gatherSyrup() {
        this.syrupQty -= 3;
    }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');


// Tanto Tree como Maple são classes JavaScript. A classe Maple é uma "subcclasse" da classe Tree e utiliza o método extends para se tornar uma "subclasse". Para acessar a classe pai a partir da subclasse, utilizamos a palavra reservada super. Perceba que super foi utilizado de duas formas diferentes no construtor de Maple, super é utilizado como uma função. No método changeSeason() de Maple, super é utilizado como um objeto!


// Comparando com as subclasses do ES5
// Vamos ver a mesma funcionalidade, agora escrita em código ES5:

function Tree(size, leaves) {
    this.size = (typeof size === "undefined")? 10 : size;
    const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
    this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
    this.leafColor;
  }
  
  Tree.prototype.changeSeason = function(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
  
  function Maple (syrupQty, size, leaves) {
    Tree.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
  }
  
  Maple.prototype = Object.create(Tree.prototype);
  Maple.prototype.constructor = Maple;
  
  Maple.prototype.changeSeason = function(season) {
    Tree.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }
  
  Maple.prototype.gatherSyrup = function() {
    this.syrupQty -= 3;
  }
  
  const myMaple2 = new Maple(15, 5);
  myMaple2.changeSeason('fall');
  myMaple2.gatherSyrup();
  myMaple2.changeSeason('spring');

  //Tanto este código como o código ES6 visto anteriormente executam exatamente a mesma funcionalidade.










