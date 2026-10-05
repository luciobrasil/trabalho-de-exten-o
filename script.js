// ==========================
// NAVEGAÇÃO
// ==========================

function mostrarTela(nome) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {
        tela.classList.remove("ativa");
    });

    document.getElementById(nome).classList.add("ativa");

    window.scrollTo(0, 0);
}


// ==========================
// MENSAGEM SUSPEITA
// ==========================

function respostaSuspeita(resposta) {

    const resultado = document.getElementById("resultadoSuspeita");

    if (resposta === true) {

        resultado.innerHTML =
            "✅ Correto! A mensagem apresenta sinais de golpe, como urgência, pedido de dados e link suspeito.";

        resultado.style.color = "green";

    } else {

        resultado.innerHTML =
            "❌ Cuidado! Essa mensagem apresenta vários sinais de golpe.";

        resultado.style.color = "red";
    }
}


// ==========================
// QUIZ
// ==========================

const perguntas = [

    {
        pergunta: "Um desconhecido pede o código recebido por SMS. O que você deve fazer?",
        alternativas: [
            "Enviar o código",
            "Ignorar e não compartilhar",
            "Enviar apenas metade do código",
            "Passar o código para um amigo"
        ],
        correta: 1
    },

    {
        pergunta: "Qual destas é uma boa prática de segurança?",
        alternativas: [
            "Usar a mesma senha em todos os sites",
            "Compartilhar sua senha com amigos",
            "Ativar autenticação em dois fatores",
            "Clicar em qualquer link recebido"
        ],
        correta: 2
    },

    {
        pergunta: "Você recebe uma mensagem dizendo que ganhou um prêmio e precisa pagar uma taxa. O que deve fazer?",
        alternativas: [
            "Pagar imediatamente",
            "Enviar seus documentos",
            "Desconfiar e verificar a informação",
            "Enviar seus dados bancários"
        ],
        correta: 2
    },

    {
        pergunta: "Qual informação deve ser protegida?",
        alternativas: [
            "Senha",
            "Código de autenticação",
            "Dados bancários",
            "Todas as anteriores"
        ],
        correta: 3
    },

    {
        pergunta: "Qual atitude é mais segura ao receber um link desconhecido?",
        alternativas: [
            "Clicar imediatamente",
            "Compartilhar com amigos",
            "Verificar a origem antes de clicar",
            "Digitar seus dados no site"
        ],
        correta: 2
    }

];


let perguntaAtual = 0;
let pontos = 0;


function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").innerHTML = `
        <h2>
            ${perguntaAtual + 1}. ${pergunta.pergunta}
        </h2>
    `;

    const alternativas =
        document.getElementById("alternativas");

    alternativas.innerHTML = "";

    pergunta.alternativas.forEach(function(alternativa, indice) {

        const botao = document.createElement("button");

        botao.className = "alternativa";

        botao.innerText = alternativa;

        botao.onclick = function() {
            responder(indice);
        };

        alternativas.appendChild(botao);

    });
}


function responder(indice) {

    const pergunta = perguntas[perguntaAtual];

    if (indice === pergunta.correta) {
        pontos++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

    } else {

        finalizarQuiz();

    }
}


function finalizarQuiz() {

    document.getElementById("pergunta").innerHTML =
        `<h2>🎉 Quiz finalizado!</h2>`;

    document.getElementById("alternativas").innerHTML = "";

    document.getElementById("resultadoQuiz").innerHTML =
        `Você acertou <strong>${pontos}</strong> de <strong>${perguntas.length}</strong> perguntas.`;

}


// Inicia o quiz
carregarPergunta();