function calcularMediaIdade() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let mensagem = document.getElementById('mensagem');
    let somaIdades = 0;

    if (isNaN(quantidade) || quantidade < 1) {
        mensagem.innerHTML = 'Por favor, insira um número inteiro positivo para a quantidade de pessoas.';
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));
        if (isNaN(idade) || idade < 0) {
            mensagem.innerHTML = 'Por favor, insira idades válidas (números não negativos).';
            return;
        }
        somaIdades += idade;
    }

    let mediaIdade = somaIdades / quantidade;
    let classificacao;

    if (mediaIdade >= 0 && mediaIdade <= 25) {
        classificacao = 'jovem';
    } else if (mediaIdade > 25 && mediaIdade <= 60) {
        classificacao = 'adulta';
    } else {
        classificacao = 'idosa';
    }

    mensagem.innerHTML = `A média de idade da turma é: ${mediaIdade.toFixed(2)}. A turma é ${classificacao}.`;
}