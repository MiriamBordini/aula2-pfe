function verificarPrimo() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 1) {
        mensagem.innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    let isPrimo = true;
    let divisores = [];

    // 0 e 1 não são primos
    if (numero === 0 || numero === 1) {
        isPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                isPrimo = false;
                divisores.push(i);
                if (i !== numero / i) {
                    divisores.push(numero / i); // Adiciona o divisor complementar
                }
            }
        }
    }

    if (isPrimo) {
        mensagem.innerHTML = `${numero} é um número primo.`;
    } else {
        mensagem.innerHTML = `${numero} não é um número primo. Ele é divisível por: ${divisores.join(', ')}.`;
    }
}