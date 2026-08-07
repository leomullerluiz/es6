# Guia Completo do ES6 (ECMAScript 2015)

Este repositório é dedicado a ensinar os principais conceitos do ES6 (ECMAScript 2015), uma atualização revolucionária do JavaScript. Aqui, você encontrará explicações detalhadas e exemplos práticos de cada recurso fundamental.

## Sumário

- [O que é ES6?](#o-que-é-es6)
- [Declaração de Variáveis: `let` e `const`](#declaração-de-variáveis-let-e-const)
- [Arrow Functions](#arrow-functions)
- [Template Literals](#template-literals)
- [Destructuring](#destructuring)
- [Operador Spread e Rest](#operador-spread-e-rest)
- [Classes e Orientação a Objetos](#classes-e-orientação-a-objetos)
- [Modules (Módulos)](#modules-módulos)
- [Promessas (Promises)](#promessas-promises)
- [Outras Novidades](#outras-novidades)

---

## O que é ES6?

O ECMAScript 6, conhecido como ES6 ou ECMAScript 2015, é uma das maiores atualizações do JavaScript, publicada em 2015. Ele introduziu sintaxes modernas, melhorou a legibilidade do código e trouxe recursos que tornam o desenvolvimento mais robusto, seguro e eficiente. Com o ES6, JavaScript passou a ser mais utilizado em projetos complexos tanto no front-end quanto no back-end.

Principais objetivos do ES6:
- Modernizar a linguagem para acompanhar outras linguagens populares.
- Facilitar o desenvolvimento de aplicações grandes e estruturadas.
- Tornar o código mais expressivo e fácil de manter.

---

## Declaração de Variáveis: `let` e `const`

Antes do ES6, só existia o `var`, que tinha escopo de função e permitia reatribuição, podendo gerar bugs por hoisting e vazamento de escopo. O ES6 introduziu:

### `let`

- Possui escopo de bloco (dentro de `{}`), prevenindo vazamentos acidentais.
- Permite reatribuição.

```js
let contador = 0;
if (true) {
  let contador = 1; // Este 'contador' só existe dentro do bloco
  console.log(contador); // 1
}
console.log(contador); // 0
```

### `const`

- Também possui escopo de bloco.
- **Não** permite reatribuição, tornando o valor imutável após a atribuição.
- O objeto ou array declarado com `const` pode ter suas propriedades alteradas, mas não pode ser reatribuído.

```js
const PI = 3.14;
const pessoa = { nome: "Leo" };
pessoa.nome = "Muller"; // Válido!
pessoa = {}; // Erro!
```

**Resumo:**  
Use `let` para variáveis que mudam e `const` para valores que nunca mudam. Evite `var` em código moderno.

---

## Arrow Functions

As arrow functions (`=>`) simplificam a escrita de funções anônimas e de callbacks, trazendo uma sintaxe mais enxuta e melhorando o funcionamento do `this`.

### Sintaxe

```js
// Função tradicional
function dobro(x) {
  return x * 2;
}

// Arrow function equivalente
const dobro = x => x * 2;
```

### Características

- **Sintaxe curta:** Ideal para funções pequenas ou callbacks.
- **Não possui seu próprio `this`:** O contexto é herdado do escopo superior, o que evita bugs em métodos de objetos e eventos.
- **Não possui `arguments`, `super` ou `new.target`.**
- Não pode ser utilizada como construtora (`new MyArrow()` causa erro).

```js
const pessoa = {
  nome: "Leo",
  mostrarNome: function() {
    setTimeout(() => {
      // Arrow function herda o 'this' do objeto pessoa
      console.log(this.nome);
    }, 1000);
  }
};
pessoa.mostrarNome(); // Leo
```

---

## Template Literals

Permite criar strings dinâmicas e multilinhas, facilitando interpolação e formatação.

### Interpolação de Variáveis

```js
const usuario = "Leo";
const saudacao = `Olá, ${usuario}! Bem-vindo ao ES6.`;
```

### Strings Multilinha

```js
const texto = `
  Esta é uma string
  que ocupa múltiplas linhas
  sem necessidade de concatenar.
`;
```

### Expressões

Você pode executar expressões dentro da interpolação:

```js
const a = 5, b = 10;
console.log(`A soma de ${a} e ${b} é ${a + b}`); // A soma de 5 e 10 é 15
```

**Vantagem:** Código mais limpo e legível, evitando concatenação manual.

---

## Destructuring

Destructuring permite "desmontar" arrays e objetos para extrair valores em variáveis separadas, tornando o código mais expressivo e direto.

### Arrays

```js
const cores = ["azul", "vermelho", "verde"];
const [primaria, secundaria, terciaria] = cores;
console.log(primaria); // azul
```

### Objetos

```js
const usuario = { nome: "Leo", idade: 25 };
const { nome, idade } = usuario;
console.log(nome); // Leo
```

### Renomeando variáveis

```js
const pessoa = { nome: "Ana", idade: 30 };
const { nome: nomePessoa, idade: idadePessoa } = pessoa;
```

### Parâmetros de função

```js
function mostrarInfo({ nome, idade }) {
  console.log(`${nome} tem ${idade} anos.`);
}
```

**Vantagem:** Menos linhas de código e maior clareza na manipulação de dados.

---

## Operador Spread (`...`) e Rest (`...`)

Ambos usam a mesma sintaxe, mas têm funções distintas.

### Spread (`...`)

Expande elementos de um array ou propriedades de um objeto.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

### Rest (`...`)

Agrupa múltiplos elementos em um array. Usado em parâmetros de função ou destructuring.

```js
function soma(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}
console.log(soma(1, 2, 3)); // 6

const [primeiro, ...resto] = [10, 20, 30, 40];
console.log(resto); // [20, 30, 40]
```

---

## Classes e Orientação a Objetos

O ES6 trouxe a sintaxe de classes, tornando o paradigma de orientação a objetos mais acessível e semelhante a outras linguagens.

### Definição de Classe

```js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
```

### Herança

```js
class Funcionario extends Pessoa {
  constructor(nome, idade, cargo) {
    super(nome, idade);
    this.cargo = cargo;
  }
  apresentar() {
    super.apresentar();
    console.log(`Eu trabalho como ${this.cargo}.`);
  }
}
```

### Métodos Estáticos

```js
class Matematica {
  static dobro(x) {
    return x * 2;
  }
}
console.log(Matematica.dobro(5)); // 10
```

**Vantagem:** Sintaxe mais clara, suporte à herança, métodos estáticos e construtores.

---

## Modules (Módulos)

Permitem dividir o código JavaScript em arquivos independentes e reutilizáveis, facilitando a organização e manutenção.

### Exportando

```js
// arquivo: calculo.js
export function soma(a, b) {
  return a + b;
}

export const PI = 3.14;
```

### Importando

```js
// arquivo: app.js
import { soma, PI } from './calculo.js';
console.log(soma(2, 3));
```

### Export Default

Permite exportar uma única entidade principal por arquivo.

```js
// arquivo: saudacao.js
export default function() {
  console.log("Olá!");
}

// Importação
import saudacao from './saudacao.js';
saudacao(); // Olá!
```

**Vantagem:** Melhora a modularização e o reuso do código.

---

## Promessas (Promises)

Promises facilitam o trabalho com operações assíncronas (ex: requisições HTTP, timers), tornando o código mais legível e evitando o "callback hell".

### Criando e Usando Promises

```js
const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Operação concluída!");
    } else {
      reject("Erro na operação.");
    }
  }, 1000);
});

promessa
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro));
```

### Encadeando Promises

```js
promessa
  .then(resultado => resultado + " Próximo passo.")
  .then(msg => console.log(msg))
  .catch(erro => console.error(erro));
```

### Async/Await (ES8)

ES6 trouxe Promises, mas o ES8 aprimorou com `async/await`, tornando o código assíncrono mais simples:

```js
async function executar() {
  try {
    const resultado = await promessa;
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
}
```

**Vantagem:** Fluxo de tratamento assíncrono mais intuitivo.

---

## Outras Novidades

### Default Parameters

Permite definir valores padrão para parâmetros de funções.

```js
function cumprimentar(nome = "Visitante") {
  console.log(`Olá, ${nome}!`);
}
```

### For...of

Itera sobre elementos de arrays ou objetos iteráveis.

```js
const lista = ["a", "b", "c"];
for (const item of lista) {
  console.log(item);
}
```

### Map e Set

Novas estruturas de dados para coleções.

```js
const mapa = new Map();
mapa.set("chave", "valor");
console.log(mapa.get("chave")); // valor

const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto); // Set(3) {1, 2, 3}
```

### Métodos úteis de Array

- `find`: retorna o primeiro elemento que satisfaz uma condição.
- `findIndex`: retorna o índice do primeiro elemento que satisfaz uma condição.

```js
const numeros = [5, 12, 8, 130, 44];
const encontrado = numeros.find(n => n > 10); // 12
const indice = numeros.findIndex(n => n > 10); // 1
```

---

## Referências

- [Documentação MDN - ES6](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Guia ES6 Features](https://es6-features.org/#Constants)
- [ES6 para iniciantes](https://www.javascript.com/learn/es6)

---

**Contribua!**  
Sinta-se livre para sugerir exemplos, enviar dúvidas ou aprimorar este guia por meio de pull requests.
