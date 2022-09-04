function meuEscopo(){
    const form = document.querySelector('.form'); // Chamar class .form do HTML
    const resultado = document.querySelector('.resultado'); // Chamar class .resultado do HTML

    const pessoas = [];

    /*form.onsubmit = function(evento){
        evento.preventDefault(); // Cancelar auto recarregamento ao enviar formulário
        alert('Enviado');
        console.log('Enviado');
    }*/

    function recebeEventoForm(evento){
        evento.preventDefault(); // Cancelar auto recarregamento ao enviar formulário

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value});

        resultado.innerHTML += `<p>
                                    <strong>Nome:</strong> ${nome.value} ${sobrenome.value} - <strong>Peso:</strong> ${peso.value} - <strong>Altura:</strong> ${altura.value}
                                </p>`;

        //console.log(nome.value, sobrenome.value, peso.value, altura.value);
        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();