const alunos = ['Camilly', 'Douglas', 'Gaby', 'Paloma', 'Bruna', 'Jose'];

console.log(alunos);
console.log(alunos[1]);

alunos[4] = 'Samuel';
alunos[5] = 'Luan';

console.log(alunos);

// Adicionar + ao array
alunos[alunos.length] = 'Valeria';

console.log(alunos);

// Adicionar + ao array
alunos.push('Caio');

console.log(alunos);

// Adicionar + ao array no começo
alunos.unshift('Raquel');

console.log(alunos);

// Adicionar removido a uma variável
const removido1 = alunos.pop();

console.log(removido1);

// Remover do começo do array
const removido2 = alunos.shift();

console.log(removido2);

// Remover do fim do array
alunos.pop();

console.log(alunos);

// Remover sem interferir nos índices
delete alunos[1];

console.log(alunos);

alunos[1] = 'Douglas';

console.log(alunos);

// Fatiar arrays
console.log(alunos.slice(0, 3));

// Array é um objeto, automaticamente indexado 

// Saber se é um array
console.log(alunos instanceof Array);