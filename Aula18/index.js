// Não é possível acessar informações da função, fora da função
// () = Parâmetro dentro da função
// Para retornar dados da função é necessário colocar o return
// Após o return, nada mais após ele, será executado

// Criar função
function saudacao(nome){
    console.log(`Boa Noite Dev ${nome}!!`);
    // Retornar dados da função em uma varável
    return `Boa Noite Dev ${nome}!!`;
}

// Chamar função
saudacao('Raquel');

// Pegar dados do retorno da função
const retorno = saudacao('Raquel');
console.log(retorno);


// Função para somar
function soma(x, y){
    const resultado = x + y;
    if(x == undefined){
        return `Faltou os números abestado!!`;
    }
    return resultado;
}

console.log(soma(5, 7));

console.log(soma());

// Criar função anonima
const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));

// Criar Arrow Functions
const multiplicacao = (n1, n2) =>{
    return n1 * n2;
}

console.log(multiplicacao(2, 8));