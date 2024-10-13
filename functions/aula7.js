/*
===========================================
    Aula 7: Trabalhando com subclasses
===========================================

Assim como a maior parte das novas funcionalidades, a sintaxe fica muito mais clara e é necessário muito menos código para criar uma subclasse utilizando class, super e extends

Lembre-se que, por debaixo dos panos, as mesmas conexões são feitas entre as funções e os prototypes.

super deve ser chamado de this
Numa função construtora de uma subclasse, antes da palavra reservada this poder ser utilizada, uma chamada para a super classe deve ser feita.
*/

class Apple {}
class GrannySmith extends Apple {
  constructor(tartnessLevel, energy) {
    this.tartnessLevel = tartnessLevel; // `this` before `super` will throw an error!
    super(energy); 
  }
}


// Instruções:
// Crie uma subclasse Bicycle que estende a classe Vehicle. A subclasse Bicycle deve sobrescrever a função construtora de Bicycle alterando os valores padrão de wheels de 4 para 2 e horn de 'beep beep' para 'honk honk'.


/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

class Bicycle extends Vehicle {
	constructor(color, wheels = 2, horn = 'honk honk') {
		super(color, wheels, horn);
	}
}

// your code goes here

/* testing */

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk
















