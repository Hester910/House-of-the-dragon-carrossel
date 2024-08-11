/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

// PASSO 1
const botoesCarrossel = document.querySelectorAll(".botao")

const imagens = document.querySelectorAll(".imagem")

const informacoes = document.querySelectorAll(".informacoes")

// PASSO 2
botoesCarrossel.forEach((botao, indice )=> {
    botao.addEventListener('click', () => {

        // PASSO 3
        desativarBotaoSelecionado()

        // PASSO 4
        marcarBotaoSelecionado(botao)

        // PASSO 5
        desativarImagemAtiva()

        // PASSO 6
        mostrarImagemDeFundo(indice)

        // PASSO 7
        desativarInformacaoAtiva()

        // PASSO 8
        mostrarInformacoesAtivas(indice)
    })
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado")
}

function mostrarInformacoesAtivas(indice) {
    informacoes[indice].classList.add("ativa")
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa")
}

function desativarImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa")
    imagemAtiva.classList.remove("ativa")
}

function desativarInformacaoAtiva() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa")
    informacaoAtiva.classList.remove("ativa")
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove("selecionado")
}

