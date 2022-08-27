// Precisão de Números Decimais no JavaScript = IEEE 754-2008

let num1 = 1500;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof num1);

// Ver binário de um número
console.log(num1.toString(2));

num1 = 10.5789551255547;

// Arredondar número
console.log(num1.toFixed(2));

// Saber se número é inteiro
console.log(Number.isInteger(num1));

let temp = num1 * 'Ola';

// Saber se conta é invalida
console.log(Number.isNaN(temp));