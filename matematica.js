// Classe que representa uma calculadora com algumas funções matemáticas básicas
/**
 * @author - Gabriel Logan
 * @description - Programa Criado como uma biblioteca de matematica em portugues
 * @example - import Matematica from "./matematica.js" 
 * console.log(Matematica.Pi)
 */
class Calculadora {
    // Construtor vazio
    constructor() {
        const crieEulerNumber = () => {
            const n = 9999;
            const inicioSomatorio = 0;
            let valorVasio = 0;

            for (let k = inicioSomatorio; k < n + 1; k++) {
                const serie = ((1 ** k)) / (this.fatorial(k));
                valorVasio += serie;
            }
            return valorVasio;
        };

        /**
        * Numero de Euler
        * @example Matematica.NumeroEuler
        * @return {number} - 2.7182818284590455...
        * @author - Gabriel Logan
        */
        this.NumeroEuler = crieEulerNumber(); 

        /**
        * Numero PI
        * @example Matematica.Pi
        * @return {number} - 3.14159265358979323...
        */
        this.Pi = 3.1415926535897932384626433832795
    }

    /**
     * Método para calcular o valor absoluto de um numero
     * @param {number} valorParaCalcular - O número a ser calculado o modulo
     * @example Matematica.modulo(-4)
     * @return {number} - O resultado = 4
     */    
    modulo(numero) {
        if (numero < 0) {
          return -numero; // Retorna o valor negativo como positivo
        } else {
          return numero; // Retorna o valor positivo como é
        }
    }

    /**
     * Método para calcular o fatorial de um número
     * @param {number} valorParaCalcular - O número a ser calculado o fatorial
     * @example Matematica.fatorial(4)
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
     * @example Matematica.raizQuadrada(9)
     * @return {number} - O resultado da raiz quadrada = 3
     */
    raizQuadrada(valorParaCalcular) {
        return valorParaCalcular ** (1 / 2);
    }

    /**
     * Método para calcular a raiz cúbica de um número
     * @param {number} valorParaCalcular - O número a ter a raiz cúbica calculada
     * @example Matematica.raizCubica(8)
     * @return {number} - O resultado da raiz cúbica = 2
     */
    raizCubica(valorParaCalcular) {
        return valorParaCalcular ** (1 / 3);
    }

    /**
     * Método para fatorar um número
     * @param {number} valorParaCalcular - O número a ser fatorado
     * @example Matematica.fatorar(100)
     * @return {array} - Um array com os fatores do número [2, 2, 5, 5]
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

    /**
     * Método para calcular o seno
     * @param {number} valorParaCalcular - O número a ser calculado
     * @example Matematica.seno(Matematica.Pi)
     * @return {number} - O resultado = 0 pois o seno de pi(180Graus) = 0 
     */   
    seno(valorParaCalcular) { // Valor da variavel X se tiver
        if(this.modulo(valorParaCalcular) > 5 && this.modulo(valorParaCalcular) <= 30){
            var n = 100 // Valor An para soma parcial
        }else if(this.modulo(valorParaCalcular) > 30){
            var n = 40 // Valor An para soma parcial
        }else{
            var n = 200 // Valor An para soma parcial
        }
        const inicioSomatorio = 0 // Valor inicial do somatorio
        let valorVasio = 0
        for (let k = inicioSomatorio; k < n + 1; k++) {
            const serie = (((-1)**k)*(valorParaCalcular**(2*k+1)))/(this.fatorial(2*k+1))
            valorVasio += serie // Soma a serie de acordo com o valor de n
        }

        if(this.modulo(valorVasio) < 0.00000001){
            return 0
        }else{
            return valorVasio // Retorna a soma parcial da serie
        }
    }

    /**
     * Método para calcular o cosseno
     * @param {number} valorParaCalcular - O número a ser calculado
     * @example Matematica.cosseno(Matematica.Pi)
     * @return {number} - O resultado = 0 pois o cosseno de pi(180Graus) = 0 
     */   
    cosseno(valorParaCalcular) { // Valor da variavel X se tiver
        if(this.modulo(valorParaCalcular) > 5 && this.modulo(valorParaCalcular) <= 30){
            var n = 100 // Valor An para soma parcial
        }else if(this.modulo(valorParaCalcular) > 30){
            var n = 40 // Valor An para soma parcial
        }else{
            var n = 200 // Valor An para soma parcial
        }
        const inicioSomatorio = 0 // Valor inicial do somatorio
        let valorVasio = 0
        for (let k = inicioSomatorio; k < n + 1; k++) {
            const serie = (((-1)**k)*(valorParaCalcular**(2*k)))/(this.fatorial(2*k))
            valorVasio += serie // Soma a serie de acordo com o valor de n
        }

        if(this.modulo(valorVasio) < 0.00000001){
            return 0
        }else{
            return valorVasio // Retorna a soma parcial da serie
        }
    }

    /**
     * Método para calcular o ln
     * @param {number} valorParaCalcular - O número a ser calculado
     * @example IMPORTANTE !!!!
     * @example ln não pode conter valores <= 0
     * @description Essa função calcula valores para ln(x+1)
     * @example Matematica.ln(0)
     * @return {number} - O resultado = 0 pois o ln 1 = 0 
     */   
    ln(valorParaCalcular) { // Valor da variavel X se tiver
        const n = 100 // Valor An para soma parcial
        
        const inicioSomatorio = 1 // Valor inicial do somatorio
        let valorVasio = 0
        for (let k = inicioSomatorio; k < n + 1; k++) {
            const serie = (((-1)**(k+1))*((Number(valorParaCalcular))**k))/(k)
            valorVasio += serie // Soma a serie de acordo com o valor de n
        }
        return valorVasio // Retorna a soma parcial da serie
    }


    /**
     * Método para calcular o numero aleatorio entre 2 numeros
     * @param {min: number, max: number} valorParaCalcular - O número a ser calculado
     * @example Matematica.numeroAleatorioEntre(10, 20)
     * @return {number} - O resultado = algum numero entre 10 e 20
     */  
    numeroAleatorioEntre(min, max) {
        var timestamp = Date.now();
        return min + (timestamp % (max - min + 1));
    }
}

// Cria uma instância da classe Calculadora
const startCalculadora = new Calculadora();

// Exporta a instância da classe Calculadora
export default startCalculadora;
