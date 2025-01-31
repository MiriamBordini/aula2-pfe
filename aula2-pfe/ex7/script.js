function iniciarVotacao() {
    let totalEleitores = parseInt(document.getElementById('totalEleitores').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(totalEleitores) || totalEleitores < 1) {
        mensagem.innerHTML = 'Por favor, insira um número válido de eleitores.';
        return;
    }

    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;

    for (let i = 0; i < totalEleitores; i++) {
        let voto = parseInt(prompt(`Eleitor ${i + 1}, vote no candidato (1, 2 ou 3):`));
        
        if (voto === 1) {
            votosCandidato1++;
        } else if (voto === 2) {
            votosCandidato2++;
        } else if (voto === 3) {
            votosCandidato3++;
        } else {
            alert('Voto inválido! Por favor, vote apenas em 1, 2 ou 3.');
            i--; // Decrementa o contador para repetir a votação
        }
    }

    mensagem.innerHTML = `
        Votos do Candidato 1: ${votosCandidato1} <br>
        Votos do Candidato 2: ${votosCandidato2} <br>
        Votos do Candidato 3: ${votosCandidato3}
    `;
}