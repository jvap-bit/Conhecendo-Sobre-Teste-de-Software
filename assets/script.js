function gerarHash(texto) {
    return btoa(encodeURIComponent(texto));
}


function descriptografar(hash) {
    return decodeURIComponent(atob(hash));
}

const quiz = [
    {
        pergunta: "Qual é o principal objetivo do teste de software?",
        opcoes: [
            "Aumentar a velocidade do processador.",
            "Garantir que o produto atenda aos requisitos e identificar falhas antes da implantação.",
            "Criar o design gráfico das telas do sistema.",
            "Substituir a equipe de desenvolvedores."
        ],
        respostaHash: "R2FyYW50aXIlMjBxdWUlMjBvJTIwcHJvZHV0byUyMGF0ZW5kYSUyMGFvcyUyMHJlcXVpc2l0b3MlMjBlJTIwaWRlbnRpZmlxdWUlMjBmYWxoYXMlMjBhbnRlcyUyMGRhJTIwaW1wbGFudGElQzMlQTdhby4="
    },
    {
        pergunta: "O que é o Teste Unitário?",
        opcoes: [
            "Teste feito por apenas uma pessoa da equipe.",
            "Verificação de aspectos de desempenho e segurança.",
            "Teste de integração entre vários sistemas externos.",
            "Verificação de componentes individuais do código."
        ],
        respostaHash: "VmVyaWZpY2ElQzMlQTdhbyUyMGRlJTIwY29tcG9uZW50ZXMlMjBpbmRpdmlkdWFpcyUyMGRvJTIwYyVDMyVCM2RpZ28u"
    },
    {
        pergunta: "Por que é importante testar o software antes da sua implantação?",
        opcoes: [
            "Para evitar custos elevados, erros e problemas futuros no sistema.",
            "Para garantir que o código fique mais longo.",
            "Apenas para cumprir exigências burocráticas.",
            "Para obrigar os usuários a atualizarem o computador."
        ],
        respostaHash: "UGFyYSUyMGV2aXRhciUyMGN1c3RvcyUyMGVsZXZhZG9zJTJDJTIwZXJyb3MlMjBlJTIwcHJvYmxlbWFzJTIwZnV0dXJvcyUyMG5vJTIwc2lzdGVtYS4="
    },
    {
        pergunta: "Qual dos tipos de teste avalia aspectos como desempenho e segurança?",
        opcoes: [
            "Teste Unitário.",
            "Teste de Integração.",
            "Teste Não Funcional.",
            "Teste Manual Básico."
        ],
        respostaHash: "VGVzdGUlMjBOJUMzJUExbyUyMEZ1bmNpb25hbC4="
    },
    {
        pergunta: "Qual é o objetivo principal do Teste de Integração?",
        opcoes: [
            "Testar a combinação e a interação entre diferentes módulos ou componentes.",
            "Verificar apenas as cores e fontes das telas do sistema.",
            "Garantir que o servidor nunca desligue.",
            "Testar apenas um trecho isolado de uma função sem conectar com nada."
        ],
        respostaHash: "VGVzdGFyJTIwYSUyMGNvbWJpbmElQzMlQTdhbyUyMGUlMjBhJTIwaW50ZXJhJUMzJUExbyUyMGVudHJlJTIwZGlmZXJlbnRlcyUyMG0lQzMlQjRkdWxvcyUyMG91JTIwY29tcG9uZW50ZXMu"
    },
    {
        pergunta: "Qual destes exemplos é citado no texto como um sistema que enfrentou problemas graves nos testes?",
        opcoes: [
            "Lançamento do HealthCare.gov em 2013.",
            "Lançamento do sistema operacional Windows XP.",
            "A criação do primeiro navegador web.",
            "O sistema de caixa eletrônico do Banco Central."
        ],
        respostaHash: "TGFuJUMzJUE3YW1lbnRvJTIwZG8lMjBIZWFsdGhDYXJlLmdvdiUyMGVtJTIwMjAxMy4="
    },
    {
        pergunta: "O que o Teste Funcional verifica no sistema?",
        opcoes: [
            "Se o software atende aos requisitos funcionais e comportamentos esperados pelo usuário.",
            "A velocidade de carregamento da memória RAM.",
            "Se o código-fonte possui comentários explicativos.",
            "A resistência do hardware contra impactos físicos."
        ],
        respostaHash: "U2UlMjBvJTIwc29mdHdhcmUlMjBhdGVuZGUlMjBhb3MlMjByZXF1aXNpdG9zJTIwZnVuY2lvbmFpcyUyMGUlMjBjb21wb3J0YW1lbnRvcyUyMGVzcGVyYWRvcyUyMHBlbG8lMjB1c3UlQzMlQTFyaW8u"
    },
    {
        pergunta: "O teste de software é considerado uma etapa...",
        opcoes: [
            "Opcional e desnecessária para projetos modernos.",
            "Fundamental no desenvolvimento para identificar erros e comportamentos inesperados.",
            "Exclusiva apenas para aplicativos de celular.",
            "Que deve ser feita somente após os clientes reclamarem dos erros."
        ],
        respostaHash: "RnVuZGFtZW50YWwlMjBubyUyMGRlc2Vudm9sdmltZW50byUyMHBhcmElMjBpZGVudGlmaWNhciUyMGVycm9zJTIwZSUyMGNvbXBvcnRhbWVudG9zJTIwaW5lc3BlcmFkb3Mu"
    },
    {
        pergunta: "Qual outro sistema real é mencionado no texto como exemplo de falhas registradas durante os testes?",
        opcoes: [
            "O sistema de pagamento do Boeing 787 Dreamliner.",
            "O sistema de piloto automático de carros elétricos.",
            "O software de controle de tráfego aéreo de Londres.",
            "A rede interna da agência espacial NASA."
        ],
        respostaHash: "TyUyMHNpc3RlbWElMjBkZSUyMHBhZ2FtZW50byUyMGRvJTIwQm9laW5nJTIwNzg3JTIwRHJlYW1saW5lci4="
    },
    {
        pergunta: "O que envolve a prática do teste de software?",
        opcoes: [
            "Apenas ler o código sem executá-lo em nenhum momento.",
            "Execução de casos de teste, análise de resultados e verificação dos requisitos.",
            "Gravação de vídeos promocionais para divulgação do programa.",
            "Apenas a formatação do computador onde o sistema foi criado."
        ],
        respostaHash: "RXhlY3UlQzMlQTdhbyUyMGRlJTIwY2Fzb3MlMjBkZSUyMHRlc3RlJTJDJTIwYW4lQzMlQTFsaXNlJTIwZGUlMjByZXN1bHRhZG9zJTIwZSUyMHZlcmlmaWNhJUMzJUExbyUyMGRvcyUyMHJlcXVpc2l0b3Mu"
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
    respostasDoUsuario.push(opcaoEscolhida);

    // Converte a escolha do usuário em Hash para validar contra o Hash armazenado
    const hashOpcaoEscolhida = gerarHash(opcaoEscolhida);

    if (hashOpcaoEscolhida === quiz[perguntaAtual].respostaHash) {
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

    let gabaritoHTML = quiz.map((item, index) => {
        const respostaUsuario = respostasDoUsuario[index];
        const respostaCorretaTexto = descriptografar(item.respostaHash);
        const acertou = respostaUsuario === respostaCorretaTexto;

        return `
            <div style="margin-bottom: 20px; padding: 15px; border-radius: 8px; background: rgba(255,255,255,0.03); border-left: 5px solid ${acertou ? '#2ed573' : '#ff4757'}; text-align: left;">
                <p style="font-weight: bold; margin-bottom: 8px;">${index + 1}. ${item.pergunta}</p>
                <p style="margin: 4px 0; color: ${acertou ? '#2ed573' : '#ff4757'};">
                    <strong>Sua resposta:</strong> ${respostaUsuario} ${acertou ? '✓ (Correto)' : '✗ (Incorreto)'}
                </p>
                ${!acertou ? `
                    <p style="margin: 4px 0; color: #2ed573;">
                        <strong>Resposta correta:</strong> ${respostaCorretaTexto}
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

        <button class="botao-quiz" onclick="iniciarQuiz()">$ tentar_novamente()</button>
    `;

    resultadoContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    resultadoContainer.classList.remove('visivel');
    setTimeout(() => resultadoContainer.classList.add('visivel'), 50);
}

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

function carregarVLibras() {

    // Evita carregar duas vezes
    if (document.getElementById("vlibras-script")) {
        return;
    }
}


const palavrasCaca = [
    "SOFTWARE",
    "TESTE",
    "DEFEITO",
    "FALHA",
    "UNITARIO",
    "CYPRESS",
    "POSTMAN",
    "JMETER",
    "JIRA",
    "REGRESSAO"
];

const TAMANHO_GRID = 12;
let matrizGrid = Array(TAMANHO_GRID).fill(null).map(() => Array(TAMANHO_GRID).fill(''));
let letrasSelecionadas = [];

function criarCacaPalavras() {
    const gridContainer = document.getElementById('grid-caca-palavras');
    const listaContainer = document.getElementById('lista-palavras');

    if (!gridContainer || !listaContainer) return;

    // Renderiza a lista de palavras lateral
    listaContainer.innerHTML = palavrasCaca
        .map(p => `<li id="word-${p}">${p}</li>`)
        .join('');

    // Preenche as palavras na matriz (Horizontal e Vertical)
    palavrasCaca.forEach(palavra => posicionarPalavra(palavra));

    // Preenche os espaços vazios com letras aleatórias
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < TAMANHO_GRID; r++) {
        for (let c = 0; c < TAMANHO_GRID; c++) {
            if (matrizGrid[r][c] === '') {
                matrizGrid[r][c] = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            }
        }
    }

    // Renderiza a grade HTML
    gridContainer.innerHTML = '';
    for (let r = 0; r < TAMANHO_GRID; r++) {
        for (let c = 0; c < TAMANHO_GRID; c++) {
            const celula = document.createElement('div');
            celula.classList.add('celula-letra');
            celula.textContent = matrizGrid[r][c];
            celula.dataset.row = r;
            celula.dataset.col = c;
            
            celula.addEventListener('click', () => selecionarCelula(celula, r, c));
            gridContainer.appendChild(celula);
        }
    }
}

function posicionarPalavra(palavra) {
    let posicionou = false;
    let tentativas = 0;

    while (!posicionou && tentativas < 100) {
        tentativas++;
        const direcao = Math.random() > 0.5 ? 'H' : 'V'; // Horizontal ou Vertical
        const linhaMax = direcao === 'V' ? TAMANHO_GRID - palavra.length : TAMANHO_GRID;
        const colMax = direcao === 'H' ? TAMANHO_GRID - palavra.length : TAMANHO_GRID;

        const row = Math.floor(Math.random() * linhaMax);
        const col = Math.floor(Math.random() * colMax);

        let podePosicionar = true;
        for (let i = 0; i < palavra.length; i++) {
            const r = direcao === 'V' ? row + i : row;
            const c = direcao === 'H' ? col + i : col;
            if (matrizGrid[r][c] !== '' && matrizGrid[r][c] !== palavra[i]) {
                podePosicionar = false;
                break;
            }
        }

        if (podePosicionar) {
            for (let i = 0; i < palavra.length; i++) {
                const r = direcao === 'V' ? row + i : row;
                const c = direcao === 'H' ? col + i : col;
                matrizGrid[r][c] = palavra[i];
            }
            posicionou = true;
        }
    }
}

function selecionarCelula(celula, r, c) {
    if (celula.classList.contains('encontrada')) return;

    if (celula.classList.contains('selecionada')) {
        celula.classList.remove('selecionada');
        letrasSelecionadas = letrasSelecionadas.filter(item => item.celula !== celula);
    } else {
        celula.classList.add('selecionada');
        letrasSelecionadas.push({ celula, letra: celula.textContent, row: r, col: c });
    }

    verificarPalavraFormada();
}

function verificarPalavraFormada() {
    const palavraFormada = letrasSelecionadas.map(item => item.letra).join('');
    const palavraInversa = palavraFormada.split('').reverse().join('');

    const palavraEncontrada = palavrasCaca.find(p => p === palavraFormada || p === palavraInversa);

    if (palavraEncontrada) {
        letrasSelecionadas.forEach(item => {
            item.celula.classList.remove('selecionada');
            item.celula.classList.add('encontrada');
        });

        const elementoLista = document.getElementById(`word-${palavraEncontrada}`);
        if (elementoLista) {
            elementoLista.classList.add('riscada');
        }

        letrasSelecionadas = [];
    }
}

// Inicializa o Caça-Palavras quando o HTML carregar
document.addEventListener("DOMContentLoaded", () => {
    criarCacaPalavras();
});

(function () {
    const root = document.documentElement;
    const switchInput = document.getElementById('themeSwitch');
    const saved = localStorage.getItem('qa-lab-theme');

    if (saved === 'light') {
        root.setAttribute('data-theme', 'light');
        if (switchInput) switchInput.checked = true;
    }

    if (switchInput) {
        switchInput.addEventListener('change', () => {
            if (switchInput.checked) {
                root.setAttribute('data-theme', 'light');
                localStorage.setItem('qa-lab-theme', 'light');
            } else {
                root.removeAttribute('data-theme');
                localStorage.setItem('qa-lab-theme', 'dark');
            }
        });
    }
})();