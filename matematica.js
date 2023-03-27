class Calculadora {
    constructor() {
        this.valorVasio = 0 // Valor vasio para iniciar o somatorio
    }

    fatorial(valorParaFatoriar) {
        if (valorParaFatoriar === 0) {
            return 1; // Fatorial de zero é 1
        } else {
            let resultado = 1;
            for (let i = 1; i <= valorParaFatoriar; i++) {
                resultado *= i;
            }
            return resultado; // Retorna o valor do fatorial
        }
    }

    somatorio(x) { // Valor da variavel X se tiver
        const n = 23 // Valor An para soma parcial
        const inicioSomatorio = 0 // Valor inicial do somatorio | Atenção com
            // indeterminações

        for (let k = inicioSomatorio; k < n + 1; k++) {
            const serie = ((-1) ** (k) * x ** (2 * k)) / (this.fatorial(2 * k)) // Aqui você passa a função
            this.valorVasio += serie // Soma a serie de acordo com o valor de n
        }
        return this.valorVasio // Retorna a soma parcial da serie
    }
}

const startCalculadora = new Calculadora() // Crie um executor da classe

export default startCalculadora