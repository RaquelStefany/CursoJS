let varA = 'A';
let varB = 'B';
let varC = 'C';

const backupA = varA;

varA = varB;
varB = varC;
varC = backupA;

console.log(varA, varB, varC);