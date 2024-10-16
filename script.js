function choose(option) {
    const storyText = document.getElementById('story-text');
    const resultText = document.getElementById('result-text');
    const choices = document.getElementById('choices');
    const restartBtn = document.getElementById('restart-btn');

    if (option === 'explorar') {
        storyText.innerHTML = 'Você desce ao porão e encontra uma caixa antiga. Dentro dela, há um diário misterioso. Ao ler o diário, você descobre que está amaldiçoado!';
        choices.innerHTML = '<button onclick="choose(\'lerDiario\')">Ler mais do diário</button> <button onclick="choose(\'sair\')">Sair da casa rapidamente</button>';
    } else if (option === 'fugir') {
        storyText.innerHTML = 'Você decide correr da casa. Ao sair, você sente que algo sinistro te observa... mas você está a salvo, por enquanto.';
        resultText.innerHTML = 'Final feliz! Você escapou do mistério.';
        choices.style.display = 'none';
        restartBtn.style.display = 'block';
    } else if (option === 'lerDiario') {
        storyText.innerHTML = 'O diário contém segredos obscuros sobre a casa. De repente, você sente uma presença atrás de você...';
        resultText.innerHTML = 'Final triste! Você foi capturado pelo espírito que assombra a casa.';
        choices.style.display = 'none';
        restartBtn.style.display = 'block';
    } else if (option === 'sair') {
        storyText.innerHTML = 'Você decide fugir do porão antes que algo ruim aconteça.';
        resultText.innerHTML = 'Final feliz! Você conseguiu escapar a tempo.';
        choices.style.display = 'none';
        restartBtn.style.display = 'block';
    }
}

function restartGame() {
    const storyText = document.getElementById('story-text');
    const resultText = document.getElementById('result-text');
    const choices = document.getElementById('choices');
    const restartBtn = document.getElementById('restart-btn');

    storyText.innerHTML = 'Você está em uma casa antiga e misteriosa, cheia de segredos. Você ouve um barulho estranho vindo do porão. O que você fará?';
    resultText.innerHTML = '';
    choices.innerHTML = '<button onclick="choose(\'explorar\')">Explorar o porão</button> <button onclick="choose(\'fugir\')">Fugir da casa</button>';
    choices.style.display = 'block';
    restartBtn.style.display = 'none';
}
