//  \(barra invertida) = Vaza caracteres de aspas durante o código
let umaString = "Um \"texto\"";

console.log(umaString);

// Strings são indexadas 
// Pegar string em uma posição especifica
console.log(umaString[4]);
console.log(umaString.charAt(6));

// Concatenar variáveis
console.log(umaString.concat(' em um lindo dia'));

// Pesquisar índice
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('texto'));

// Expressões regulares
console.log(umaString.match(/[a-z]/g)); // Encontrar todas as letras minusculas da string

// Substituir caracteres
console.log(umaString.replace('Um', "Outro")); 

umaString = "O rato roeu a roupa do rei de Roma.";

// Substituir todos os caracteres
console.log(umaString.replace(/r/g, "#"));

// Saber tamanho da string
console.log(umaString.length);

// Dividir string
console.log(umaString.slice(2, 6)); // Pegar a palavra "rato"
console.log(umaString.slice(-5, -1)); // Pegar a palavra "Roma"

// Dividir string #2
console.log(umaString.substring(umaString.length -5, umaString.length -1));

// Dividir string #3
console.log(umaString.split(' ')); // Dividir string nos espaços
console.log(umaString.split(' ', 3)); // Dividir string nos espaços, limitando divisões

// Deixar string maiúscula
console.log(umaString.toUpperCase());

// Deixar string minuscula
console.log(umaString.toLowerCase());