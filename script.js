// Obtém a referência para o visor da calculadora
const visor = document.getElementById('visor');

// Função para adicionar números e operadores ao visor
function adicionar(valor) {
    // Evita múltiplos zeros no início
    if (visor.value === '0' && valor !== '.') {
        visor.value = valor;
    } else {
        visor.value += valor;
    }
}

// Função para limpar o visor (botão 'C')
function limparVisor() {
    visor.value = '';
}

// Função para apagar o último caractere (botão '←')
function backspace() {
    visor.value = visor.value.slice(0, -1);
}

// Função para calcular o resultado (botão '=')
function calcular() {
    try {
        // Usa a função eval() para avaliar a expressão matemática.
        // CUIDADO: eval() é geralmente desaconselhado em produção por questões de segurança,
        // mas é o método mais simples para este tipo de calculadora básica.
        // Para projetos mais robustos, seria melhor criar um parser de expressões.
        const resultado = eval(visor.value);
        
        // Verifica se o resultado é finito (não é NaN ou Infinity)
        if (isFinite(resultado)) {
            visor.value = resultado;
        } else {
            visor.value = 'Erro';
        }
    } catch (e) {
        // Trata erros de sintaxe (ex: 5++ ou apenas um operador)
        visor.value = 'Erro';
    }
}