function sortear() {
    quantidade = parseInt(document.getElementById('quantidade').value);
    de = parseInt(document.getElementById('de').value);
    ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;

    let resultado = document.getElementById('resultado');

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio (de,ate);
        
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de,ate);
        }

        sorteados.push(numero );
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    
}

function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ba() {
    
}
