/* 1 - 
Crie uma regex que aceite só letras maiúsculas.

// Resolução 

const letrasregex = /^[A-Z]+$/

texto1 = 'teste';
texto2 = 'TESTE';
texto3 = 'TesTe-É';
texto4 = 'Tes-=0';

console.log(letrasregex.test(texto1))
console.log(letrasregex.test(texto2))
console.log(letrasregex.test(texto3))
console.log(letrasregex.test(texto4))

*/


/* 2 - Crie uma regex que só aceite strings terminadas com ID;

// Resolução 

const letrasregex = /[idIDiDId]$/;

texto1 = 'tesIDgur';
texto2 = 'VIDEOID';
texto3 = 'videoid';
texto4 = 'idvideo';

console.log(letrasregex.test(texto1));
console.log(letrasregex.test(texto2));
console.log(letrasregex.test(texto3));
console.log(letrasregex.test(texto4));

*/




/* 3 -Crie uma regex que aceite a seguinte expressão “Marca:
nomeDaMarca”;
Onde nomeDaMarca pode variar para Nike, Adidas, Puma,
Asics;

// Resolução 

const reg = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(reg.test("Marca: Nike"));
console.log(reg.test('Marca: Adidas'));
console.log(reg.test('Marca: Puma'));
console.log(reg.test('Marca: Asics'));

console.log(reg.test('teste: Adidas'));
console.log(reg.test('teste: Puma'));
console.log(reg.test('teste: Asiscs'));
console.log(reg.test('teste: Nike'));

*/

/*  4 - Crie uma regex que valide endereços de IP;
Ex: 127.0.0.1

// Resolução 

const validandoIp = /^[0-9]{3}[.][0-9]{1}[.][0-9]{1}[.][0-9]{1}/;

console.log(validandoIp.test('127.0.0.1'));
console.log(validandoIp.test('17.0.0.1'));
console.log(validandoIp.test('127.02.0.1'));
console.log(validandoIp.test('12-.0.01.1'));
console.log(validandoIp.test('wer.02.0'));
console.log(validandoIp.test('358.0.0.1'));

*/ 


/* 5 - Crie uma regex que valide nome de usuários no sistema;
Aceita letras de a z, _ e --, números de 0 9, mínimo de 3
caracteres e máximo de 16;  */

const validaUsuario = /^[aA-zZ0-9-_]{3,16}$/;

console.log(validaUsuario.test('8vtr/*-RTva'));
console.log(validaUsuario.test('103'));
console.log(validaUsuario.test('-8-7_8-'));
console.log(validaUsuario.test('8vtr/*-RTva-*)('))
console.log(validaUsuario.test('0099874'));
console.log(validaUsuario.test('--/po4532'));
console.log(validaUsuario.test('12345678912345678'));
console.log(validaUsuario.test('vitor_345'));
console.log(validaUsuario.test('VITOR-_1254'));




















