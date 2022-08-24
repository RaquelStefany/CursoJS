// Operadores Aritméticos

// + = Adução e Concatenação
// - = Subtração
// / = Divisão
// * = Multiplicação
// ** = Potenciação
// % = Resto da Divisão

// () = Tudo dentro dos parenteses será executado primeiro
// ++ = Atribuição de 1 no valor da variável
// -- = Subtração de 1 no valor da variável
// += = Variável + adição de outro valor
// -= = Variável + subtração de outro valor
// *= = Variável + multiplicação de outro valor
// /= = Variável + divisão de outro valor
// **= = Variável + potenciação de outro valor

// parseInt() = Converter número String para Int
// parseFloat() = Converter número String para DEcimais
// Number() = Converter número String para Number

const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log('');

console.log((num1 + num2) * num3);
console.log('');

let contadorAdd = 1;
contadorAdd++;

console.log(contadorAdd);
console.log('');

let contadorSub = 10;
contadorSub--;

console.log(contadorSub);
console.log('');

let contador = 10;
contador += 2;

console.log(contador);
console.log('');

const number = 10;
const string = parseInt('5');

console.log(number + string);