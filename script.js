const caixaPrincipal = document.querySelector( '.caixa-principal');
const caixaPerguntas = document.querySelector( '.caixa-perguntas');
const caixaAlternativas = document.querySelector( '.caixa-alternativas');
const caixaResultado = document.querySelector( '.caixa-resultado');
const textoResultado = document.querySelector( '.texto-resultado');

const perguntas = [
    {
        enunciado: "No Âmbito social, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmacao: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No Âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmacao: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmacao: "afirmação",
            },
        ]
    },
    {
        enunciado: "No Âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "alternativa 1",
                afirmacao: "afirmação",
            },
            {
                texto: "alternativa 2",
                afirmacao: "afirmação",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
