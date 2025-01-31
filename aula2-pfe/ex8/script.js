function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(nota1) || isNaN(nota2)) {
        mensagem.innerHTML = 'Por favor, insira notas válidas.';
        return;
    }

    let media = (nota1 + nota2) / 2;

    if (media === 10) {
        mensagem.innerHTML = 'Aprovado com Distinção';
    } else if (media >= 7) {
        mensagem.innerHTML = 'Aprovado';
    } else {
        mensagem.innerHTML = 'Reprovado';
    }
}