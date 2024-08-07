const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como as redes sociais têm mudado a forma como as pessoas se comunicam e interagem?",
        alternativas: [
            {
                texto: " As redes sociais têm facilitado a comunicação instantânea e global, permitindo que indivíduos se conectem e interajam independentemente da distância física.'",
                afirmacao:" As redes sociais são uma poderosa ferramenta que tem redefinido as interações sociais ao possibilitar conexões rápidas, compartilhamento de informações e formação de comunidades virtuais.", 
            },
            {
                texto: "Elas facilitam a formação de comunidades online baseadas em interesses comuns, permitindo discussões e debates sobre diversos temas em escala global.",
                afirmacao: " Sim, as redes sociais facilitam a formação de comunidades online baseadas em interesses comuns, permitindo discussões e debates sobre diversos temas em escala global. Essas plataformas oferecem espaços onde indivíduos podem compartilhar ideias, informações e opiniões com pessoas que possuem interesses similares, promovendo interações significativas e construção de conhecimento colaborativo."
            }
        ]
    },
    {
        enunciado: "Quais são os benefícios e os riscos do armazenamento de dados na nuvem?",
        alternativas: [
            {
                texto: "O armazenamento na nuvem oferece benefícios como acesso remoto a arquivos e dados a partir de qualquer dispositivo conectado à internet.",
                afirmacao: "O armazenamento na nuvem proporciona acesso fácil e remoto a arquivos a partir de qualquer dispositivo conectado à internet.",
            },
            {
                texto: "Além disso, a nuvem permite escalabilidade rápida e flexível, onde empresas podem expandir ou reduzir recursos de armazenamento conforme suas necessidades operacionais.",
                afirmacao: "A tecnologia de nuvem proporciona às empresas a capacidade de escalar recursos de armazenamento de forma ágil e flexível, adaptando-se dinamicamente às demandas do negócio.",
            }
        ]
    },
    {
        enunciado: "Qual é a importância dos cookies nos navegadores da web e como eles funcionam?",
        alternativas: [
            {
                texto: "Os cookies são essenciais para melhorar a experiência do usuário ao permitir que sites se lembrem das preferências e configurações dos visitantes.",
                afirmacao: "Os cookies desempenham um papel crucial na personalização da experiência do usuário em sites, ao lembrarem das preferências e configurações dos visitantes, melhorando assim a usabilidade e a conveniência."
            },
            {
                texto: "Eles também facilitam a personalização de conteúdos e anúncios com base no comportamento de navegação do usuário, melhorando a relevância das informações apresentadas.",
                afirmacao: "Os cookies são utilizados para personalizar conteúdos e anúncios de acordo com o comportamento de navegação do usuário, aumentando a relevância das informações apresentadas durante sua experiência online."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
