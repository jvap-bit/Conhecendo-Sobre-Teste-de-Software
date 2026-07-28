// 1. Array expandido com 10 perguntas baseadas no conteúdo da página
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

// 2. Função para iniciar o quiz e renderizar as perguntas
function iniciarQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const resultadoContainer = document.getElementById('resultado-container');
    
    quizContainer.style.display = 'block';
    resultadoContainer.style.display = 'none';

    quizContainer.innerHTML = '';
    resultadoContainer.innerHTML = '';

    // Renderiza cada pergunta com numeração dinâmica
    quiz.forEach((pergunta, index) => {
        const perguntaDiv = document.createElement('div');
        perguntaDiv.classList.add('pergunta');
        perguntaDiv.innerHTML = `
            <h3>${index + 1}. ${pergunta.pergunta}</h3>
            <ul style="list-style: none; padding: 0;">
                ${pergunta.opcoes.map((opcao) => `
                    <li>
                        <label>
                            <input type="radio" name="resposta-${index}" value="${opcao}"> 
                            ${opcao}
                        </label>
                    </li>
                `).join('')}
            </ul>
        `;
        quizContainer.appendChild(perguntaDiv);
    });

    // Adiciona o botão de enviar ao final do quiz
    const botaoEnviar = document.createElement('button');
    botaoEnviar.innerText = 'Enviar Respostas';
    botaoEnviar.classList.add('botao-quiz');
    botaoEnviar.onclick = calcularResultado;
    quizContainer.appendChild(botaoEnviar);
}

// 3. Função para validar as respostas e mostrar o resultado
function calcularResultado() {
    let pontos = 0;
    let todasRespondidas = true;

    quiz.forEach((pergunta, index) => {
        const opcaoSelecionada = document.querySelector(`input[name="resposta-${index}"]:checked`);

        if (!opcaoSelecionada) {
            todasRespondidas = false;
        } else if (opcaoSelecionada.value === pergunta.respostaCorreta) {
            pontos++;
        }
    });

    if (!todasRespondidas) {
        alert("Por favor, responda a todas as perguntas antes de enviar!");
        return;
    }

    exibirResultado(pontos, quiz.length);
}

// 4. Exibe a pontuação final na tela
function exibirResultado(pontos, total) {
    const quizContainer = document.getElementById('quiz-container');
    const resultadoContainer = document.getElementById('resultado-container');

    quizContainer.style.display = 'none';
    resultadoContainer.style.display = 'block';

    const percentual = Math.round((pontos / total) * 100);

    resultadoContainer.innerHTML = `
        <h2>Resultado do Quiz</h2>
        <p class="paragrafo-principal">Você acertou <strong>${pontos}</strong> de <strong>${total}</strong> perguntas (${percentual}% de aproveitamento).</p>
        <button class="botao-quiz" onclick="iniciarQuiz()">Tentar Novamente</button>
    `;
}