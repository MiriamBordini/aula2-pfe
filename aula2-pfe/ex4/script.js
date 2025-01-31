function encontrarPrimos() {
    let N = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');
    let primos = [];
    let divisaoCount = 0;

    if (isNaN(N) || N < 1) {
        mensagem.innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    for (let num = 2; num <= N; num++) {
        let isPrimo = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            divisaoCount++;
            if (num % i === 0) {
                isPrimo = false;
                break;
            }
        }

        if (isPrimo) {
            primos.push(num);
        }
    }

    if (primos.length > 0) {
        mensagem.innerHTML = `Números primos entre 1 e ${N}: ${primos.join(', ')}.<br>Divisões realizadas: ${divisaoCount}.`;
    } else {
        mensagem.innerHTML = `Não há números primos entre 1 e ${N}.<br>Divisões realizadas: ${divisaoCount}.`;
    }
}