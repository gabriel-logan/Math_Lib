/**
 * Classe que representa uma calculadora com algumas funções matemáticas básicas
 */
class Calculadora {
    // Construtor vazio
    constructor() {}

    /**
     * Método para calcular o fatorial de um número
     * @param {number} valorParaCalcular - O número a ser calculado o fatorial
     * @example Calcula.fatorial(4)
     * @return {number} - O resultado do fatorial que é 24
     */
    fatorial(valorParaCalcular) {
        // Se o valor é zero, o fatorial é 1
        if (valorParaCalcular === 0) {
            return 1;
        }

        let resultado = 1;
        // Itera sobre os números menores ou iguais ao valor para calcular o fatorial
        for (let i = 1; i <= valorParaCalcular; i++) {
            resultado *= i;
        }

        // Retorna o resultado do fatorial
        return resultado;
    }

    /**
     * Método para calcular a raiz quadrada de um número
     * @param {number} valorParaCalcular - O número a ter a raiz quadrada calculada
     * @return {number} - O resultado da raiz quadrada
     */
    raizQuadrada(valorParaCalcular) {
        return valorParaCalcular ** (1 / 2);
    }

    /**
     * Método para calcular a raiz cúbica de um número
     * @param {number} valorParaCalcular - O número a ter a raiz cúbica calculada
     * @return {number} - O resultado da raiz cúbica
     */
    raizCubica(valorParaCalcular) {
        return valorParaCalcular ** (1 / 3);
    }

    /**
     * Método para fatorar um número
     * @param {number} valorParaCalcular - O número a ser fatorado
     * @return {array} - Um array com os fatores do número
     */
    fatorar(valorParaCalcular) {
        // Se o valor não é um número, retorna uma mensagem de erro
        if (typeof valorParaCalcular !== 'number') {
            return console.log('Isso não é um numero inteiro');
        }

        const A = [];

        // Encontra os fatores do número
        for (let y = 2; y < valorParaCalcular; y++) {
            while (valorParaCalcular % y === 0) {
                valorParaCalcular /= y;
                A.push(y);
            }
        }

        // Se o array está vazio, significa que o número é primo e ele é adicionado ao array
        if (A.length === 0) {
            A.push(valorParaCalcular);
        }

        // Retorna o array com os fatores
        return A;
    }
}

// Cria uma instância da classe Calculadora
const startCalculadora = new Calculadora();

// Exporta a instância da classe Calculadora
export default startCalculadora;
