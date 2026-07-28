function gerarHash(texto) {
    const bytes = new TextEncoder().encode(texto);
    let binary = '';
    bytes.forEach(b => binary += String.fromCharCode(b));
    return btoa(binary);
}

function descriptografar(hash) {
    const binary = atob(hash);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
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
        respostaHash: gerarHash("Garantir que o produto atenda aos requisitos e identificar falhas antes da implantação.")
    },
    {
        pergunta: "O que é o Teste Unitário?",
        opcoes: [
            "Teste feito por apenas uma pessoa da equipe.",
            "Verificação de aspectos de desempenho e segurança.",
            "Teste de integração entre vários sistemas externos.",
            "Verificação de componentes individuais do código."
        ],
        respostaHash: gerarHash("Verificação de componentes individuais do código.")
    },
    {
        pergunta: "Por que é importante testar o software antes da sua implantação?",
        opcoes: [
            "Para evitar custos elevados, erros e problemas futuros no sistema.",
            "Para garantir que o código fique mais longo.",
            "Apenas para cumprir exigências burocráticas.",
            "Para obrigar os usuários a atualizarem o computador."
        ],
        respostaHash: gerarHash("Para evitar custos elevados, erros e problemas futuros no sistema.")
    },
    {
        pergunta: "Qual dos tipos de teste avalia aspectos como desempenho e segurança?",
        opcoes: [
            "Teste Unitário.",
            "Teste de Integração.",
            "Teste Não Funcional.",
            "Teste Manual Básico."
        ],
        respostaHash: gerarHash("Teste Não Funcional.")
    },
    {
        pergunta: "Qual é o objetivo principal do Teste de Integração?",
        opcoes: [
            "Testar a combinação e a interação entre diferentes módulos ou componentes.",
            "Verificar apenas as cores e fontes das telas do sistema.",
            "Garantir que o servidor nunca desligue.",
            "Testar apenas um trecho isolado de uma função sem conectar com nada."
        ],
        respostaHash: gerarHash("Testar a combinação e a interação entre diferentes módulos ou componentes.")
    },
    {
        pergunta: "Qual destes exemplos é citado no texto como um sistema que enfrentou problemas graves nos testes?",
        opcoes: [
            "Lançamento do HealthCare.gov em 2013.",
            "Lançamento do sistema operacional Windows XP.",
            "A criação do primeiro navegador web.",
            "O sistema de caixa eletrônico do Banco Central."
        ],
        respostaHash: gerarHash("Lançamento do HealthCare.gov em 2013.")
    },
    {
        pergunta: "O que o Teste Funcional verifica no sistema?",
        opcoes: [
            "Se o software atende aos requisitos funcionais e comportamentos esperados pelo usuário.",
            "A velocidade de carregamento da memória RAM.",
            "Se o código-fonte possui comentários explicativos.",
            "A resistência do hardware contra impactos físicos."
        ],
        respostaHash: gerarHash("Se o software atende aos requisitos funcionais e comportamentos esperados pelo usuário.")
    },
    {
        pergunta: "O teste de software é considerado uma etapa...",
        opcoes: [
            "Opcional e desnecessária para projetos modernos.",
            "Fundamental no desenvolvimento para identificar erros e comportamentos inesperados.",
            "Exclusiva apenas para aplicativos de celular.",
            "Que deve ser feita somente após os clientes reclamarem dos erros."
        ],
        respostaHash: gerarHash("Fundamental no desenvolvimento para identificar erros e comportamentos inesperados.")
    },
    {
        pergunta: "Qual outro sistema real é mencionado no texto como exemplo de falhas registradas durante os testes?",
        opcoes: [
            "O Boeing 787 Dreamliner com falha no controle de geradores elétricos.",
            "O sistema de piloto automático de carros elétricos.",
            "O software de controle de tráfego aéreo de Londres.",
            "A rede interna da agência espacial NASA."
        ],
        respostaHash: gerarHash("O Boeing 787 Dreamliner com falha no controle de geradores elétricos.")
    },
    {
        pergunta: "O que envolve a prática do teste de software?",
        opcoes: [
            "Apenas ler o código sem executá-lo em nenhum momento.",
            "Execução de casos de teste, análise de resultados e verificação dos requisitos.",
            "Gravação de vídeos promocionais para divulgação do programa.",
            "Apenas a formatação do computador onde o sistema foi criado."
        ],
        respostaHash: gerarHash("Execução de casos de teste, análise de resultados e verificação dos requisitos.")
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
    
    if (quizContainer) quizContainer.style.display = 'block';
    if (resultadoContainer) resultadoContainer.style.display = 'none';

    mostrarPergunta();
}

function mostrarPergunta() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;
    
    quizContainer.innerHTML = '';

    const dadosPergunta = quiz[perguntaAtual];

    const perguntaDiv = document.createElement('div');
    perguntaDiv.classList.add('pergunta');
    perguntaDiv.innerHTML = `
        <h3>${perguntaAtual + 1} de ${quiz.length}. ${dadosPergunta.pergunta}</h3>
        <ul style="list-style: none; padding: 0;">
            ${dadosPergunta.opcoes.map((opcao) => `
                <li style="margin-bottom: 10px;">
                    <label style="cursor: pointer; display: block; padding: 10px; border-radius: 6px;">
                        <input type="radio" name="resposta" value="${opcao.replace(/"/g, '&quot;')}" onchange="selecionarResposta(this.value)"> 
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

    if (quizContainer) quizContainer.style.display = 'none';
    if (!resultadoContainer) return;

    resultadoContainer.style.display = 'block';

    const percentual = Math.round((pontosObtidos / total) * 100);

    let gabaritoHTML = quiz.map((item, index) => {
        const respostaUsuario = respostasDoUsuario[index];
        const respostaCorretaTexto = descriptografar(item.respostaHash);
        const acertou = respostaUsuario === respostaCorretaTexto;

        return `
            <div style="margin-bottom: 20px; padding: 15px; border-radius: 8px; border-left: 5px solid ${acertou ? '#2ed573' : '#ff4757'}; text-align: left;">
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

const bancoDePalavras = [
    "SOFTWARE", "TESTE", "DEFEITO", "FALHA", "UNITARIO",
    "CYPRESS", "POSTMAN", "JMETER", "JIRA", "REGRESSAO",
    "BUG", "SELENIUM", "PLAYWRIGHT", "AUTOMACAO", "MOCK",
    "ASSERT", "COBERTURA", "PIPELINE", "INTEGRACAO", "VALIDACAO",
    "CUCUMBER", "QUALITY", "PROD", "STAGING", "SMOKE", "BLACKBOX"
];

let palavrasCaca = [];
const LINHAS_GRID = 12;
const COLUNAS_GRID = 15;
let matrizGrid = [];
let letrasSelecionadas = [];
let posicoesPalavras = {};

function sortearPalavras(quantidade = 15) {
    const embaralhadas = [...bancoDePalavras].sort(() => 0.5 - Math.random());
    return embaralhadas.slice(0, quantidade);
}

function criarCacaPalavras() {
    const gridContainer = document.getElementById('grid-caca-palavras');
    const listaContainer = document.getElementById('lista-palavras');

    if (!gridContainer || !listaContainer) {
        console.warn("Aviso: Elementos HTML do Caça-Palavras não foram encontrados.");
        return;
    }

    palavrasCaca = sortearPalavras(15);

    matrizGrid = Array(LINHAS_GRID).fill(null).map(() => Array(COLUNAS_GRID).fill(''));
    posicoesPalavras = {};
    letrasSelecionadas = [];

    listaContainer.innerHTML = palavrasCaca
        .map(p => `<li id="word-${p}">${p}</li>`)
        .join('');

    palavrasCaca.forEach(palavra => posicionarPalavra(palavra));

    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < LINHAS_GRID; r++) {
        for (let c = 0; c < COLUNAS_GRID; c++) {
            if (matrizGrid[r][c] === '') {
                matrizGrid[r][c] = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            }
        }
    }

    gridContainer.innerHTML = '';

    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${COLUNAS_GRID}, 1fr)`;
    gridContainer.style.width = '100%';

    for (let r = 0; r < LINHAS_GRID; r++) {
        for (let c = 0; c < COLUNAS_GRID; c++) {
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

function reembaralharCacaPalavras() {
    criarCacaPalavras();
}

function posicionarPalavra(palavra) {
    let posicionou = false;
    let tentativas = 0;

    while (!posicionou && tentativas < 300) {
        tentativas++;
        const direcao = Math.random() > 0.5 ? 'H' : 'V';
        const linhaMax = direcao === 'V' ? LINHAS_GRID - palavra.length : LINHAS_GRID - 1;
        const colMax = direcao === 'H' ? COLUNAS_GRID - palavra.length : COLUNAS_GRID - 1;

        if (linhaMax < 0 || colMax < 0) continue;

        const row = Math.floor(Math.random() * (linhaMax + 1));
        const col = Math.floor(Math.random() * (colMax + 1));

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
            let celulasPalavra = [];
            for (let i = 0; i < palavra.length; i++) {
                const r = direcao === 'V' ? row + i : row;
                const c = direcao === 'H' ? col + i : col;
                matrizGrid[r][c] = palavra[i];
                celulasPalavra.push(`${r}-${c}`);
            }
            posicoesPalavras[palavra] = celulasPalavra;
            posicionou = true;
        }
    }
}

function selecionarCelula(celula, r, c) {
    if (celula.classList.contains('encontrada')) return;

    const idCoordenada = `${r}-${c}`;

    if (celula.classList.contains('selecionada')) {
        celula.classList.remove('selecionada');
        letrasSelecionadas = letrasSelecionadas.filter(item => item.id !== idCoordenada);
    } else {
        celula.classList.add('selecionada');
        letrasSelecionadas.push({ celula, id: idCoordenada });
    }

    verificarPalavraFormada();
}

function verificarPalavraFormada() {
    const idsSelecionados = letrasSelecionadas.map(item => item.id);

    for (const [palavra, coordenadas] of Object.entries(posicoesPalavras)) {
        if (coordenadas.length === idsSelecionados.length) {
            const acertou = coordenadas.every(coord => idsSelecionados.includes(coord));

            if (acertou) {
                letrasSelecionadas.forEach(item => {
                    item.celula.classList.remove('selecionada');
                    item.celula.classList.add('encontrada');
                });

                const elementoLista = document.getElementById(`word-${palavra}`);
                if (elementoLista) {
                    elementoLista.classList.add('riscada');
                }

                letrasSelecionadas = [];
                delete posicoesPalavras[palavra];
                break;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuNavegacao = document.getElementById('menuNavegacao');

    if (menuToggle && menuNavegacao) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menuNavegacao.classList.toggle('active');
        });

        document.querySelectorAll('.itens-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menuNavegacao.classList.remove('active');
            });
        });
    }

    const observador = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    const elementosParaAnimar = document.querySelectorAll('section, .lista-detalhes li');
    elementosParaAnimar.forEach(el => observador.observe(el));

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

const baseGlossario = [
    {
        termo: "Flaky Test",
        categoria: "Automação",
        def: "Um teste automatizado que apresenta resultados inconsistentes (passa ou falha) sem que haja alterações no código-fonte do sistema."
    },
    {
        termo: "Smoke Test",
        categoria: "Estratégia",
        def: "Teste rápido das funcionalidades mais críticas para validar se o ambiente de build está estável o suficiente para testes mais aprofundados."
    },
    {
        termo: "Sanity Testing",
        categoria: "Estratégia",
        def: "Execução focada para verificar se uma alteração pontual no código ou correção de bug não quebrou a funcionalidade direta afetada."
    },
    {
        termo: "Shift-Left",
        categoria: "Cultura",
        def: "Prática de mover as atividades de teste e qualidade para o início do ciclo de desenvolvimento de software (fase de requisitos/design)."
    },
    {
        termo: "TDD vs BDD",
        categoria: "Metodologia",
        def: "TDD (Test-Driven Development) foca no desenvolvimento guiado por testes unitários técnicos. BDD (Behavior-Driven Development) foca no comportamento do sistema sob a perspectiva do negócio (ex: Gherkin)."
    },
    {
        termo: "Mocks vs Stubs",
        categoria: "Automação",
        def: "Stubs fornecem respostas prontas e fixas para chamadas feitas durante o teste. Mocks são objetos simulados que também verificam se determinadas chamadas e métodos foram executados."
    },
    {
        termo: "Regression (Teste de Regressão)",
        categoria: "Estratégia",
        def: "Reexecução de testes em funcionalidades já existentes para garantir que novas alterações de código ou correções não introduziram novos defeitos."
    },
    {
        termo: "Bug vs Defeito vs Falha",
        categoria: "Conceitos",
        def: "Um erro humano gera um Defeito no código (Bug). Quando esse defeito é executado pelo usuário, ele se manifesta como uma Falha no sistema."
    },
    {
        termo: "Assertion (Asserção)",
        categoria: "Automação",
        def: "Verificação lógica no código de teste que compara o resultado obtido pelo sistema com o resultado esperado. Se forem diferentes, o teste falha."
    },
    {
        termo: "Monkey Testing",
        categoria: "Exploratório",
        def: "Técnica de teste aleatório onde o usuário/script fornece dados ou cliques imprevisíveis sem um roteiro pré-definido para tentar quebrar a aplicação."
    },
    {
        termo: "Code Coverage (Cobertura)",
        categoria: "Métricas",
        def: "Métrica que indica a percentagem do código-fonte de um sistema que é executada durante a bateria de testes automatizados."
    },
    {
        termo: "Test Debt (Dívida de Testes)",
        categoria: "Gestão",
        def: "Acúmulo de testes não escritos, desatualizados ou ignorados que aumenta o risco de bugs em entregas futuras."
    }
];

function carregarGlossario(termos = baseGlossario) {
    const grid = document.getElementById('gridGlossario');
    const msgVazia = document.getElementById('semResultadosGlossario');

    if (!grid) return;

    grid.innerHTML = '';

    if (termos.length === 0) {
        if (msgVazia) msgVazia.style.display = 'block';
        return;
    }

    if (msgVazia) msgVazia.style.display = 'none';

    termos.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card-termo');
        card.innerHTML = `
            <div class="card-header-termo">
                <h3>${item.termo}</h3>
                <span class="badge-categoria">${item.categoria}</span>
            </div>
            <p>${item.def}</p>
        `;
        grid.appendChild(card);
    });
}

function filtrarGlossario() {
    const input = document.getElementById('inputBuscaGlossario');
    if (!input) return;

    const termoBusca = input.value.toLowerCase().trim();

    const resultados = baseGlossario.filter(item => 
        item.termo.toLowerCase().includes(termoBusca) ||
        item.def.toLowerCase().includes(termoBusca) ||
        item.categoria.toLowerCase().includes(termoBusca)
    );

    carregarGlossario(resultados);
}
document.addEventListener("DOMContentLoaded", () => {
    carregarGlossario();
});