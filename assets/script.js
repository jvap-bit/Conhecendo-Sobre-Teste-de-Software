const quiz = [
    {
        pergunta: "Qual é o principal objetivo do teste de software?",
        opcoes: [
            "Aumentar a velocidade do processador.",
            "Garantir que o produto atenda aos requisitos e identificar falhas antes da implantação.",
            "Criar o design gráfico das telas do sistema.",
            "Substituir a equipe de desenvolvedores."
        ],
        respostaCorreta: "Garantir que o produto atenda aos requisitos e identificar falhas antes da implantação."
    },
    {
        pergunta: "O que é o Teste Unitário?",
        opcoes: [
            "Teste feito por apenas uma pessoa da equipe.",
            "Verificação de aspectos de desempenho e segurança.",
            "Teste de integração entre vários sistemas externos.",
            "Verificação de componentes individuais do código."
        ],
        respostaCorreta: "Verificação de componentes individuais do código."
    },
    {
        pergunta: "Por que é importante testar o software antes da sua implantação?",
        opcoes: [
            "Para evitar custos elevados, erros e problemas futuros no sistema.",
            "Para garantir que o código fique mais longo.",
            "Apenas para cumprir exigências burocráticas.",
            "Para obrigar os usuários a atualizarem o computador."
        ],
        respostaCorreta: "Para evitar custos elevados, erros e problemas futuros no sistema."
    },
    {
        pergunta: "Qual dos tipos de teste avalia aspectos como desempenho e segurança?",
        opcoes: [
            "Teste Unitário.",
            "Teste de Integração.",
            "Teste Não Funcional.",
            "Teste Manual Básico."
        ],
        respostaCorreta: "Teste Não Funcional."
    },
    {
        pergunta: "Qual é o objetivo principal do Teste de Integração?",
        opcoes: [
            "Testar a combinação e a interação entre diferentes módulos ou componentes.",
            "Verificar apenas as cores e fontes das telas do sistema.",
            "Garantir que o servidor nunca desligue.",
            "Testar apenas um trecho isolado de uma função sem conectar com nada."
        ],
        respostaCorreta: "Testar a combinação e a interação entre diferentes módulos ou componentes."
    },
    {
        pergunta: "Qual destes exemplos é citado no texto como um sistema que enfrentou problemas graves nos testes?",
        opcoes: [
            "Lançamento do HealthCare.gov em 2013.",
            "Lançamento do sistema operacional Windows XP.",
            "A criação do primeiro navegador web.",
            "O sistema de caixa eletrônico do Banco Central."
        ],
        respostaCorreta: "Lançamento do HealthCare.gov em 2013."
    },
    {
        pergunta: "O que o Teste Funcional verifica no sistema?",
        opcoes: [
            "Se o software atende aos requisitos funcionais e comportamentos esperados pelo usuário.",
            "A velocidade de carregamento da memória RAM.",
            "Se o código-fonte possui comentários explicativos.",
            "A resistência do hardware contra impactos físicos."
        ],
        respostaCorreta: "Se o software atende aos requisitos funcionais e comportamentos esperados pelo usuário."
    },
    {
        pergunta: "O teste de software é considerado uma etapa...",
        opcoes: [
            "Opcional e desnecessária para projetos modernos.",
            "Fundamental no desenvolvimento para identificar erros e comportamentos inesperados.",
            "Exclusiva apenas para aplicativos de celular.",
            "Que deve ser feita somente após os clientes reclamarem dos erros."
        ],
        respostaCorreta: "Fundamental no desenvolvimento para identificar erros e comportamentos inesperados."
    },
    {
        pergunta: "Qual outro sistema real é mencionado no texto como exemplo de falhas registradas durante os testes?",
        opcoes: [
            "O sistema de pagamento do Boeing 787 Dreamliner.",
            "O sistema de piloto automático de carros elétricos.",
            "O software de controle de tráfego aéreo de Londres.",
            "A rede interna da agência espacial NASA."
        ],
        respostaCorreta: "O sistema de pagamento do Boeing 787 Dreamliner."
    },
    {
        pergunta: "O que envolve a prática do teste de software?",
        opcoes: [
            "Apenas ler o código sem executá-lo em nenhum momento.",
            "Execução de casos de teste, análise de resultados e verificação dos requisitos.",
            "Gravação de vídeos promocionais para divulgação do programa.",
            "Apenas a formatação do computador onde o sistema foi criado."
        ],
        respostaCorreta: "Execução de casos de teste, análise de resultados e verificação dos requisitos."
    }
];

let perguntaAtual = 0;
let pontos = 0;
let respostasDoUsuario = [];

function iniciarQuiz() {
    perguntaAtual = 0;
    pontos = 0;
    respostasDoUsuario = [];

    const quizContainer = document.getElementById('quiz-container');
    const resultadoContainer = document.getElementById('resultado-container');
    
    quizContainer.style.display = 'block';
    resultadoContainer.style.display = 'none';

    quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    mostrarPergunta();
}

function mostrarPergunta() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const dadosPergunta = quiz[perguntaAtual];

    const perguntaDiv = document.createElement('div');
    perguntaDiv.classList.add('pergunta');
    perguntaDiv.innerHTML = `
        <h3>${perguntaAtual + 1} de ${quiz.length}. ${dadosPergunta.pergunta}</h3>
        <ul style="list-style: none; padding: 0;">
            ${dadosPergunta.opcoes.map((opcao) => `
                <li style="margin-bottom: 10px;">
                    <label style="cursor: pointer; display: block; padding: 10px; border-radius: 6px; background: rgba(255,255,255,0.05); transition: background 0.2s;">
                        <input type="radio" name="resposta" value="${opcao}" onchange="selecionarResposta(this.value)"> 
                        ${opcao}
                    </label>
                </li>
            `).join('')}
        </ul>
    `;

    quizContainer.appendChild(perguntaDiv);

    setTimeout(() => {
        perguntaDiv.classList.add('visivel');
    }, 50);
}

function selecionarResposta(opcaoEscolhida) {
    // Guarda a resposta do usuário
    respostasDoUsuario.push(opcaoEscolhida);

    if (opcaoEscolhida === quiz[perguntaAtual].respostaCorreta) {
        pontos++;
    }

    setTimeout(() => {
        perguntaAtual++;

        if (perguntaAtual < quiz.length) {
            mostrarPergunta();
        } else {
            exibirResultado(pontos, quiz.length);
        }
    }, 300);
}

function exibirResultado(pontosObtidos, total) {
    const quizContainer = document.getElementById('quiz-container');
    const resultadoContainer = document.getElementById('resultado-container');

    quizContainer.style.display = 'none';
    resultadoContainer.style.display = 'block';

    const percentual = Math.round((pontosObtidos / total) * 100);

    // Monta o gabarito detalhado
    let gabaritoHTML = quiz.map((item, index) => {
        const respostaUsuario = respostasDoUsuario[index];
        const acertou = respostaUsuario === item.respostaCorreta;

        return `
            <div style="margin-bottom: 20px; padding: 15px; border-radius: 8px; background: rgba(255,255,255,0.03); border-left: 5px solid ${acertou ? '#2ed573' : '#ff4757'}; text-align: left;">
                <p style="font-weight: bold; margin-bottom: 8px;">${index + 1}. ${item.pergunta}</p>
                <p style="margin: 4px 0; color: ${acertou ? '#2ed573' : '#ff4757'};">
                    <strong>Sua resposta:</strong> ${respostaUsuario} ${acertou ? '✓ (Correto)' : '✗ (Incorreto)'}
                </p>
                ${!acertou ? `
                    <p style="margin: 4px 0; color: #2ed573;">
                        <strong>Resposta correta:</strong> ${item.respostaCorreta}
                    </p>
                ` : ''}
            </div>
        `;
    }).join('');

    resultadoContainer.innerHTML = `
        <h2>Resultado do Quiz</h2>
        <p class="paragrafo-principal">Você acertou <strong>${pontosObtidos}</strong> de <strong>${total}</strong> perguntas (${percentual}% de aproveitamento).</p>
        
        <div style="margin-top: 25px; margin-bottom: 25px;">
            <h3>Revisão das Questões</h3>
            ${gabaritoHTML}
        </div>

        <button class="botao-quiz" onclick="iniciarQuiz()">Tentar Novamente</button>
    `;

    resultadoContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    resultadoContainer.classList.remove('visivel');
    setTimeout(() => resultadoContainer.classList.add('visivel'), 50);
}

// =======================================================
// ANIMAÇÃO DE APARECIMENTO AO ROLAR A PÁGINA (SCROLL REVEAL)
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
    const observador = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    const elementosParaAnimar = document.querySelectorAll('section, .lista-detalhes li');
    elementosParaAnimar.forEach(el => observador.observe(el));
});