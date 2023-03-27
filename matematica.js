class Calculadora {
    constructor() {}

    fatorial(valorParaCalcular) {
        if (valorParaCalcular === 0) {
            return 1; // Fatorial de zero é 1
        }

        let resultado = 1;
        for (let i = 1; i <= valorParaCalcular; i++) {
            resultado *= i;
        }

        return resultado; // Retorna o valor do fatorial
    }

    raizQuadrada(valorParaCalcular) {
        return valorParaCalcular ** (1 / 2)
    }

    raizCubica(valorParaCalcular) {
        return valorParaCalcular ** (1 / 3)
    }

    fatorar(valorParaCalcular) {

        if (typeof valorParaCalcular !== 'number') return console.log('Isso não é um numero inteiro');

        const A = [];

        for (let y = 2; y < valorParaCalcular; y++) {
            while (valorParaCalcular % y === 0) {
                valorParaCalcular /= y;
                A.push(y);
            }
        }

        if (A.length === 0) {
            A.push(valorParaCalcular);
        }

        return A;
    }
}

const startCalculadora = new Calculadora(); // Cria um executor da classe

export default startCalculadora;