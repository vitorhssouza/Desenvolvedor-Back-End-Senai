// Exercicios 

/* 
6 - Armazene em valores em variáveis com cada um dos tipos de dados vistos;
String, Number e Boolean;
Extra: imprima os tipos dos dados.


let nome = 'vitor';
let numero = 5;
let decimal = 5.98;
let boleano = true;

console.log('String', nome);
console.log(typeof(nome));
console.log('Numero', numero);
console.log(typeof(numero));
console.log('Decimal', decimal);
console.log(typeof(decimal));
console.log('Boleano', boleano); 
console.log(typeof(boleano));
*/

/* 7 - Cria uma estrutura if que verifica a entrada na balada, se tiver mais de 18 anos pode entrar;
Armazenar a idade em uma variável com let;
Insira uma instrução console.log(“Pode entrar”), caso a pessoa tenha mais que 18 anos;
Extra: Caso seja menor que 18 anos, imprima a mensagem como não permitido. (pode usar prompt e alert)


let nome, idade;

nome = prompt('Insira seu nome: ');
idade = prompt(`${nome}, qual sua idade? `);

console.log(idade > 18? 'Você pode entrar' : 'Não é permitido sua entrada') */

/* 8 - Crie uma constante com o seu nome como valor;
Depois uma estrutura if que verifica se o seu nome é o que está na constante;
Se estiver, emita uma mensagem de saudação com console.log(); 

let nome = 'vitor'

console.log(nome == 'Vitor'? `Saudações ${nome}` : 'Não encontrei seu nome') */

/* 9 - A função Math.pow() exibe a potencia de um número;
Teste a função com console.log() e as seguintes bases: 2, 3, 18 e o expoente deve ser 2;
Recebe 2 argumentos, base e expoente; Ex: Math.pow(5,3);
Extra: utilize variáveis para as bases e constante para expoente. 

let base_2, base_3, base_18 ;
base_2 = 2;
base_3 = 3;
base_18 = 18; 
const expoente = 2;

console.log(`${Math.pow(base_2, expoente)}`)
console.log(`${Math.pow(base_3, expoente)}`)
console.log(`${Math.pow(base_18, expoente)}`)  */  

/* 10 - Armazene a velocidade de um carro em uma variável, com o número que desejar;
Faça uma estrutura if/else que verifica se ele está acima da velocidade;
80 é a velocidade máxima permitida;
Se estiver acima ou abaixo exiba mensagens com console.log

let velocidade = 100; 

if (velocidade < 80){
    console.log('Você está na velocidade permitido')
} else if (velocidade == 80){
    console.log('Você está na velocidade máxima permitida')
} else {
    console.log('Você está acima do limite de velocidade')
}

*/ 

/* 11 - Faça uma estrutura if/else para verificar se um usuário pode dirigir;
Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH
Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem;
Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
Se não tiver 18 nem CNH, exiba outra mensagem;

let nome, idade, cnh

nome = prompt('Informe seu nome: ')
idade = prompt(`${nome} informe sua idade: `)

if (idade >= 18){
    cnh = prompt('Você possui Cnh? 1-sim ou 2-não : ')
    if (cnh == 1){
        console.log('Você pode dirigir')
        alert('Você pode dirigir')
    } else{
        console.log('Você não pode dirigir. Vá tira sua carteira')
        alert('Você não pode dirigir. Vá tira sua carteira')
    }
} else{
    console.log('Você não pode dirigir')
    alert('Você não pode dirigir')
}

*/

/* 12 - Escreva um loop while que exibe números de 0 a 100 no console;
Extra: apresentar somente os números pares;
Extra: apresentar somente os números impates. */

let contador = 0;

// contador de 0 a 100 
while (contador <= 100){
    console.log(contador);
    contador += 1;
    
}

// numeros pares 
while (contador <= 100){
    if (contador % 2 == 0){
        console.log(contador)  
        contador += 1
    } else{
        contador += 1;
    }
}

// numeros impares 
while (contador <= 100){
    if (contador % 2 != 0){
        console.log(contador)  
        contador += 1
    } else{
        contador += 1;
    }
}


/* 13 - Escreva um loop for que exibe números de 100 a 50 no console;
Extra: apresentar somente os números pares;
Extra: apresentar somente os números impates.

let contador;

// decrescente de 100 até 50 
for (contador = 100; contador >= 50; contador -= 1) {
    console.log(contador);
}

// numeros pares
for (contador = 100; contador >= 50; contador -= 1) {
    if (contador % 2 == 0){
        console.log(contador);
    }
}

// numeros impares
for (contador = 100; contador >= 50; contador -= 1) {
    if (contador % 2 != 0){
        console.log(contador);
    }
}

*/

/* 14 - Escreva um loop for ou while que exiba qual número é par e qual número é ímpar,
O contador deve iniciar em 0 e ir até 50;

let contador;
// separação de números pares e ímpares
for (contador = 0; contador <= 50; contador += 1){
    if (contador % 2 == 0){
        console.log(`${contador} - Número par`)
    } else {
        console.log(`${contador} - Número impar`)
    }
}
*/ 
























 