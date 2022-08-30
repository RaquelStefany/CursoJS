const numero = Number(prompt('Digite um número: '));
console.log(numero);

const numeroTitulo = document.getElementsByClassName('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero

texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`

texto.innerHTML += `<p><strong>${numero}</strong> é inteiro: ${Number.isInteger(numero)}</p>`;

texto.innerHTML += `<p><strong>${numero}</strong> é NaN: ${Number.isNaN(numero)}</p>`;

texto.innerHTML += `<p><strong>${numero}</strong> arredondado para baixo: ${Math.floor(numero)}</p>`;

texto.innerHTML += `<p><strong>${numero}</strong> arredondado para cima: ${Math.ceil(numero)}</p>`;

texto.innerHTML += `<p><strong>${numero}</strong> com duas casas decimais: ${numero.toFixed(2)}</p>`;