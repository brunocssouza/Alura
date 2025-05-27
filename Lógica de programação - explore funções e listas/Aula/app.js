function editarMensagem(tag, texto) {
    const elemento = document.querySelector(tag);
    elemento.innerHTML = texto
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10 + 1)    
}

function verificarChute() {
    const chute = document.querySelector('input').value;

    tentativas++
    if (chute == numeroSecreto) {
        editarMensagem('h1', 'Você acertou o número!')
        editarMensagem('p', `Tentativas realizadas: ${tentativas}`)
    } else {
        editarMensagem('h1', 'Você errou o número!')
        if (chute > numeroSecreto) {
            editarMensagem('p', 'O número secreto é menor')
        } else {
            editarMensagem('p', 'O número secreto é maior')
        }
    }
}

let tentativas = 0;
let numeroSecreto = gerarNumeroAleatorio();
editarMensagem('h1', "Jogo do Número Secreto")
editarMensagem('p', "Escolha um número entre 1 e 10:")



