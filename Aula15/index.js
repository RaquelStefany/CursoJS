let num1 = 9.54578;

// Arredondar número para baixo
let num2 = Math.floor(num1);
console.log(num2);

// Arredondar número para cima
num2 = Math.ceil(num1);
console.log(num2);

// Arredondar para o mair proximo
num2 = Math.round(num1);
console.log(num2);

// Encontrar maior números em um array
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// Encontrar menor números em um array
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// Gerar números aleatórios
console.log(Math.random());

// Pegar valor de Pi
console.log(Math.PI);

// Elevalar número
console.log(Math.pow(2, 10));

// Raiz quadrada de um número
num1 = 9;
const quadrado = num1 ** 0.5;
console.log(quadrado);