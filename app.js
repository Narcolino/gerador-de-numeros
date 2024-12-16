function sortear() {
    quantidade = parseInt(document.getElementById('quantidade').value);
    de = parseInt(document.getElementById('de').value);
    ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio (de,ate);
        sorteados.push(numero );
    }

    alert(sorteados);
}

function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

