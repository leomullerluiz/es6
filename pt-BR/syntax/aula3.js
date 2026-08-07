/*

===========================================
            Aula 3: Desestruturação (Destructuring)
===========================================

No ES6, você pode extrair dados de arrays e objetos para diferentes variáveis utilizando destructuring (desestruturação).

Isso provavelmente é parecido com algo que você já fez antes. Por exemplo, dê uma olhada nos dois trechos de código abaixo, que extraem dados utilizando técnicas anteriores à ES6:

*/

const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);
//Output: 10 25 -34

/*
    O exemplo acima mostra a extração de valores de uma array.
*/

const gemstone = {
    type: 'quartz',
    color: 'rose',
    karat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const karat = gemstone.karat;

console.log(type, color, karat);
//Output: quartz rose 21.29

/*
E esse exemplo mostra a extração de valores de um objeto.

Ambos são bem simples; no entanto, nenhum desses examplos usou destructuring.

Então o que exatamente é destructuring?
*/

/*
Destructuring:
Destructuring permite que você especifique os elementos que deseja extrair de uma array ou de um objeto no lado esquerdo de uma atribuição. Isso pode soar um pouco estranho, mas permite chegar ao mesmo resultado de antes, porém, com muito menos código; e continua fácil de se entender.

Vamos dar uma olhada nos dois exemplos, agora re-escritos usando destructuring.

Usando destructuring para extrair valores de uma array:
*/
const point2 = [10, 25, -34];

const [a, b, c] = point2;

console.log(a, b, c);
//Output: 10 25 -34

/*

Nesse exemplo, os colchetes representam a array sendo desestruturada, enquanto x, y, e z representam as variáveis onde você deseja armazenar os valores extraídos da array. Observe que você não precisa especificar os índices de onde os valores devem ser extraídos, pois eles estão implícitos (seguem a ordem dos elementos da array).


DICA: você pode pular valores quando estiver realizando o destructuring de arrays. Por exemplo, const [x, , z] = point; ignorará a coordenada y e a descartará.


*/


let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;
console.log(second);
//Output: Jarrod
/*
As variáveis first, second, e third são populadas com os primeiros 3 valores na array positions, enquanto que os valores restantes são ignorados.
*/

/* Usando destructuring para extrair valores de um objeto */
const gemstone2 = {
    type2: 'quartz',
    color2: 'rose',
    karat2: 21.29
};

const { type2, color2, karat2 } = gemstone2;

console.log(type2, color2, karat2);
//Output: quartz rose 21.29

/*
  Neste exemplo, as chaves { } representam o objeto sendo desestruturado e as variáveis type, color e karat representam onde você deseja armazenar as propriedades do objeto. Repare que você não precisa especificar a propriedade de onde os valores são extraídos, pois, como o objeto gemstone possui uma propriedade denominada type, o valor é automaticamente armazenado na variável type declarada. Do mesmo modo, gemstone possui uma propriedade color, então, o valor de color é automaticamente armazenado na variável color (criada com o mesmo nome da propriedade do objeto). O mesmo ocorre com karat.
  DICA: você também pode especificar os valores que deseja selecionar quando utiliza destructuring em um objeto. Por exemplo, let {color} = gemstone; selecionará apenas a propriedade color do objeto gemstone.
*/

const circle = {
    radius: 10,
    color: 'orange',
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getCircumference: function () {
        return 2 * Math.PI * this.radius;
    }
};

let { radius, getArea, getCircumference } = circle;

/*
Ao chamar getArea(), ela retornará NaN. Quando você desestrutura o objeto e armazena o método getArea() em uma variável getArea, ele não consegue mais acessar ao this no objeto circle o que resulta em uma área que é NaN.
*/