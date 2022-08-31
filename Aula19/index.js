// Mesmo utilizando const é possível alterar os valores do array
// Não é possível reatribuir um valor diferente do array utilizando const

const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';

// console.log(array);

// Criar atributos dentro do array
const pessoal = {
    nome: 'Raquel',
    sobrenome: 'Rodrigues',
    idade: 19
};

console.log(pessoal.nome);

// Função para criar um array com atributos
function criaPessoa(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa2 = criaPessoa('Douglas', 'Souza', 17);
const pessoa3 = criaPessoa('Bruna', 'Alves', 18);
const pessoa4 = criaPessoa('Rayssa', 'Kelly', 16);

console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);