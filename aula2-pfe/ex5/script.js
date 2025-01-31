function calcularMedia() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let mensagem = document.getElementById('mensagem');
    let soma = 0;

    if (isNaN(quantidade) || quantidade < 1) {
        mensagem.innerHTML = 'Por favor, insira um número inteiro positivo para a quantidade de notas.';
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
        if (isNaN(nota) || nota < 0) {
            mensagem.innerHTML = 'Por favor, insira notas válidas (números não negativos).';
            return;
        }
        soma += nota;
    }

    let media = soma / quantidade;
    mensagem.innerHTML = `A média aritmética das notas é: ${media.toFixed(2)}`;
}