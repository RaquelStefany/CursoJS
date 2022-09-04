// Dados Primitivos (Imutáveis) = String, Number, Boolen, Undefined, Null(Bigint, Symbol).
// Dados Referências (Mutáveis) = Array, object, function.

// ... (Spread) = Copia o valor de uma variável mutável em outra variável

// Variável imutável, alteração em posição de dados não é executada
// Valores primitivos são copiados ao serem passados para outras variáveis
let nome = 'Raquel';
nome[0] = 'S';
console.log(nome[0], nome);


console.log('');


// Valores mutáveis, ocupam um mesmo espaço na memoria
// Valores referência são exatamente os mesmo valores
let a = [1, 2, 3];
let b = [...a]; // Valor de a foi copiado para variável b
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, b, c);

// Copiar valor de varA para varB, sem que os 2 apontem um mesmo espaço na memoria
const varA = {
    nome: 'Raquel',
    sobrenome: 'Stefany'
};
const varB = {...varA}; //Spread 

b.nome = 'Rayssa';
console.log(a);
console.log(b);

