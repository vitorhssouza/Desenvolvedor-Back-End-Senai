// Exercicios aula 3 de Função

/* 1 - Escreva uma função que imprime “Hello World!” no 
console.

// Resolução 

function olaMundo(){
    console.log('Hello World!');
}

olaMundo();

*/ 

/* 2 - Escreva uma função que recebe um parâmetro de idade e imprima esta mensagem no console com template literals dizendo “Você tem x anos”.

// Resolução 

const idade = parseInt(prompt('Informe sua idade: '))

function imprimeIdade(idade){
    console.log(`Você tem ${idade} anos`);
}
imprimeIdade(idade);
*/ 

/* 3 - Escreva uma função que some dois números e imprima este retorno.

const num1 = parseFloat(prompt('Informe o primeiro valor: '));
const num2 = parseFloat(prompt('Informe o segundo valor: '));

function soma(valor1, valor2){
    return (valor1 + valor2);
}

console.log(`O valor das soma dos números é: ${soma(num1, num2)}`);

*/


/* 4 - Escreva uma função que retorne um número aleatório. 
O número máximo retornado deve ser passado via parâmetro.

// Resolução 

const numero = parseInt(prompt('Informe um número: '));

function numeroAleatorios(num){
    return (Math.floor(Math.random() * num + 1));
}

console.log(`O número aleatorio gerado é: ${numeroAleatorios(numero)}`);

*/

/* 5 - Escreva uma função que recebe a idade de uma pessoa. Se ela tem mais
 de 18 anos ela pode entrar na auto escola, imprima uma 
 mensagem informando isso. Se ela tem menos, ela não pode, 
 imprima outra mensagem com este aviso. Execute a função nos 
 dois casos.

  const idadePessoa = parseInt(prompt('Informe sua idade: '));

 function idade(idade){
    if (idade >= 18){
        console.log('Você pode entrar na auto escola');
    }else if (idade < 18){
        console.log('Você não pode fazer auto escola ainda');
    }
 }

 idade(idadePessoa);

 */

 /* 6 - Escreva uma função que detecta o tipo de dado passado. 
 Verifque se é um: number, boolean ou string e retorne uma 
 mensagem para cada tipo. Execute uma função para cada caso.

// Resolução 

const dado = 't';

 function verifiqueDados(dado){
    return typeof(dado);
 }

console.log(`O valor inserido é: ${verifiqueDados(dado)}`);

 */

/* 7 - Escreva uma função que receba um número negativo e retorne um número positivo.

// Resolução 

const numero = parseFloat(prompt('Informe um número negativo: '))

function numeroPositivo(num){
    return Math.abs(num);
}

console.log(`Retornando o número positivo: ${numeroPositivo(numero)}`);
*/ 

/* 8 - Escreva uma função que recebe uma string. Se o texto conter mais de 10 caracteres imprima 
“Texto muito longo”. Se conter menos, imprima “Texto dentro do limite”.

// Resolução
const palavra = prompt("Digite uma palavra: ")

function contaCaracter(palavras){
    if (palavra.length >= 10){
        console.log('Texto muito longo');
    }else {
        console.log('Texto dentro do limite');
    }
}

contaCaracter(palavra)

*/

/* 9 - Escreva uma função que receba dois números, o primeiro é a base e o segundo a potência. 
Depois faça essa operação e retorne o resultado. Por exemplo: 3, 2 = 9.

// Resolução 

const base = parseFloat(prompt('Informe o valor da base: '));
const potencia = parseFloat(prompt('Informe o valor da potência: '));

function operacao(base, potencia){
    return Math.pow(base, potencia);
}

console.log(`O valor da Potência é: ${operacao(base, potencia)}`); 

*/ 

/* 10 - Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop. 
Além disso imprima somente os números pares no console.

// Resolução 

const numero = parseInt(prompt("Informe um número: "));

function decrementa(num){
    
    for(let i = 0; i <= num; i += 1){
        if (i % 2 == 0){
            console.log(`Imprimindo apenas os números pares ${i}`);
        }
    }
}

decrementa(numero);

*/ 



// Exercicio Aula 3 de Objetos e arrays

/* 1 - Crie um array com 5 itens. Acesse o item 1,3,4 e imprima-os.

// Resolução 

let array = [2, 8, 9, 4, 7];
console.log(array);
console.log(array[1]);
console.log(array[3]);
console.log(array[4]);
*/

/* 2 - Crie um array com 2 elementos e outro com 4. Imprima o número de elementos de cada um na tela.

// Resolução 

let array1 = [2, 6];
let array2 = [3, 4, 8, 9];

console.log(array1.length);
console.log(array2.length);

*/

/* 3 - Crie um objeto que representa um ônibus. Com as propriedades rodas = 8; Limite de passageiros = 40;
Portas = 2. Imprima todas as propriedades no console.

// Resolução 
let onibus = {
    'Rodas': 8,
    'Limite Passageiros': 40,
    'Portas': 2
};

console.log(onibus);
console.log(onibus['Rodas']);
console.log(onibus['Limite Passageiros']);
console.log(onibus['Portas']);

*/

/* 4 - Adicione a propriedade janelas no ônibus, com o valor de 20. Delete a propriedade rodas. Imprima a 
propriedade janelas no console.

// Resolução 

onibus['Janela'] = 20;
delete(onibus['Rodas']);

console.log(onibus);
console.log(onibus.Janela);

*/

/* 5 - Crie um array com 5 nomes, incluindo o seu. Verifique se o seu nome existe no array. Se existir 
imprima alguma mensagem no console.

// Resolução

let nomes = ['Ana', 'Caio', 'Davi', 'Vitor', 'Lucas'];

let verificacao = nomes.includes('Vitor');
if (verificacao == true){
    console.log('Encontrei seu nome no sistema');
}else{
    console.log(' Não encontrei seu nome no sistema');
}
*/

/* 6 - Crie dois arrays, um com mais de 5 elementos e outro com menos. Faça uma função que verifica o 
número de elementos. Se possuir menos que 5, imprima “Poucos elementos” no console. Se tiver mais, 
imprima “Muitos elementos”.

// Resolução 

let array1 = [5, 6, 7, 1, 2];
let array2 = [4, 6];

function verificaNumElementos(array){
    if (array >= 5){
        console.log('Muitos elementos');
    } else{
        console.log('Poucos elementos');
    }
}

verificaNumElementos(array1.length);
verificaNumElementos(array2.length);

*/


/* 7 - Crie um array com 5 elementos. Faça uma iteração entre todos eles e imprima no console o valor.

// Resolução */

const linguagens = ['sql', 'python', 'javascript', 'java', 'PHP'];

linguagens.forEach(linguagem =>{
    console.log(linguagem);
})



/* 8 - Crie um JSON com 3 propriedades. Atribua ele a uma variável. Acesse as propriedades 
imprimindo no console.

// Resolução 

const carro = {
    "Marca": "Fiat",
    "Cor": "Branco",
    "Modelo": "Toro",
    "Portas": 5,
    "Janelas": 4,
    "Motor": 3.2,
    "Combustível": ["Álcool", "Gasolina "]
};


let jsonString = JSON.stringify(carro);
console.log(jsonString);

let striToJson = JSON.parse(jsonString);
console.log(striToJson.Marca);
console.log(striToJson.Cor);
console.log(striToJson.Modelo);
console.log(striToJson.Portas);
console.log(striToJson.Janelas);
console.log(striToJson.Motor);
console.log(striToJson.Combustível);


*/


/* 9 - Crie um array a partir de uma frase. Imprima cada palavra do array no console
por meio de um for.

const frases = 'Eu estou aprendendo javaScript no curso back-end do senai';
let array = frases.split(' ');

for(let i = 0; i < array.length; i ++){
    console.log(array[i])
}

*/













