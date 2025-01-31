function verificarDia() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    switch (numero) {
        case 1:
            mensagem.innerHTML = 'Domingo';
            break;
        case 2:
            mensagem.innerHTML = 'Segunda-feira';
            break;
        case 3:
            mensagem.innerHTML = 'Terça-feira';
            break;
        case 4:
            mensagem.innerHTML = 'Quarta-feira';
            break;
        case 5:
            mensagem.innerHTML = 'Quinta-feira';
            break;
        case 6:
            mensagem.innerHTML = 'Sexta-feira';
            break;
        case 7:
            mensagem.innerHTML = 'Sábado';
            break;
        default:
            mensagem.innerHTML = 'Valor inválido! Por favor, digite um número entre 1 e 7.';
            break;
    }
}