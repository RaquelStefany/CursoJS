/*
    Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.8 de altura e seu IMC é de 25.925925925925924.
    Luiz Otávio nasceu em ANO.
*/

/*
const nome = 'Luiz Otávio'
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc; // formula = peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - 30;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de', imc + '.');
console.log(nome, sobrenome, 'nasceu em', anoNascimento + '.');
*/

const nome = 'Raquel'
const sobrenome = 'Stefany';
const idade = 19;
const peso = 60;
const alturaEmM = 1.60;

let indiceMassaCorporal; // formula = peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);