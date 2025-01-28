// 1 - pegando o html da seta de avançar
const btnAvancar = document.getElementById("btn-avancar");
const cards = document.querySelectorAll(".card");
let cardAtual = 0;

//2 - identificando o clique do usuário
btnAvancar.addEventListener("click", function (){
    if(cardAtual === cards.length - 1) return;

    // mudar a classe selecionado de um card pro outro - seleciona quem tem essa classe e remove
    const cardSelecionado = document.querySelector(".selecionado");
    cardSelecionado.classList.remove("selecionado");
    
    //3 - mudar o slide pro próximo card acrescentando 1 a card atual e dando a classe selecionado
    cardAtual++;
    cards[cardAtual].classList.add("selecionado");
});

//ajustando a seta de voltar

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function (){
    if(cardAtual === 0) return;

    // mudar a classe selecionado de um card pro outro - seleciona quem tem essa classe e remove
    const cardSelecionado = document.querySelector(".selecionado");
    cardSelecionado.classList.remove("selecionado");
    
    //3 - mudar o slide pro card anterior tirando 1 da card atual e dando a classe selecionado
    cardAtual--;
    cards[cardAtual].classList.add("selecionado");
});