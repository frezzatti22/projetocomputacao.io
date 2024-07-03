const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a principal origem de jiu-jitsu?",
        alternativas: [
            {
                texto: "Indiana",
                afirmacao: "O jiu-jítsu teve origem cerca de três mil anos antes de Cristo, provavelmente na Índia, onde era praticado por monges budistas. "
            },
            {
                texto: "Russa",
                afirmacao: "O jiu-jítsu teve origem cerca de três mil anos antes de Cristo, provavelmente na Índia, onde era praticado por monges budistas. "
            }
        ]
    },
    {
        enunciado: "Quais são os três pilares do jiu jitsu ",
        alternativas: [
            {
                texto: "defender,controlar e atacar",
                afirmacao: "correto."
            },
            {
                texto: "desistencia,arrogancia e deshonra",
                afirmacao: "errado."
            }
        ]
    },
    {
        enunciado: "Qual a faixa que um aluno faixa azul recebe após 3 anos de treino?",
        alternativas: [
            {
                texto: "roxa",
                afirmacao: "correto."
            },
            {
                texto: "verde",
                afirmacao: "errado."
            }
        ]
    },
    
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "jiujitsu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
