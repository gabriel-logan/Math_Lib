import { ReturnTypesForEquation, ReturnTypesForEquation2upDegree } from "./types/loganmatic";
/**
 * @author - Gabriel Logan
 * @description - Programa Criado como uma biblioteca de matematica em portugues
 * @example - import Matematica from "./loganmatic.js"
 * console.log(Matematica.Pi)
 */
declare class Calculadora {
    NumeroEuler: number;
    Pi: number;
    constructor();
    /**
     * Método para calcular o valor absoluto de um numero
     * @param n - Precisão do numero de euler
     * @example Matematica.crieEulerNumber(99999); ira criar um numero de euler com 99999 somas, cuidado
     * isso pode travar o seu pc, numeros muito grande resultam em demora para encontrar o valor
     * @return - Numero de Euler
     */
    protected crieEulerNumber(n?: number): number;
    /**
     * @param valorA
     * @param valorB
     * @param valorC
     * @param valorD
     * @param checkedSim
     */
    protected metodoDeNewton(valorA: number, valorB: number, valorC: number, valorD: number, checkedSim: boolean): {
        value: number;
        msg: string;
    } | {
        value: number[];
        msg: string;
    };
    /**
     * @param valorA
     * @param valorB
     * @param valorC
     * @param valorD
     * @param raizes
     * @param checkedSim
     */
    protected dispositivoBrioRufinho(valorA: number, valorB: number, valorC: number, valorD: number, raizes: number[], checkedSim: boolean): {
        value: number;
        msg: string;
    } | {
        value: number[];
        msg: string;
    } | {
        value: null;
        msg: string;
    };
    /**
     * Método para calcular o valor absoluto de um numero
     * @param numero - O número a ser calculado o modulo
     * @example Matematica.modulo(-4)
     * @return - O resultado = 4
     */
    modulo(numero: number): number;
    /**
     * Método para calcular o fatorial de um número
     * @param valorParaCalcular - O número a ser calculado o fatorial
     * @example Matematica.fatorial(4)
     * @return - O resultado do fatorial que é 24
     */
    fatorial(valorParaCalcular: number): number;
    /**
     * Método para calcular a raiz quadrada de um número
     * @param valorParaCalcular - O número a ter a raiz quadrada calculada
     * @example Matematica.raizQuadrada(9)
     * @return - O resultado da raiz quadrada = 3
     */
    raizQuadrada(valorParaCalcular: number): number;
    /**
     * Método para calcular a raiz cúbica de um número
     * @param valorParaCalcular - O número a ter a raiz cúbica calculada
     * @example Matematica.raizCubica(8)
     * @return - O resultado da raiz cúbica = 2
     */
    raizCubica(valorParaCalcular: number): number;
    /**
     * Método para fatorar um número
     * @param valorParaCalcular - O número a ser fatorado
     * @example Matematica.fatorar(100)
     * @return - Um array com os fatores do número [2, 2, 5, 5]
     */
    fatorar(valorParaCalcular: number): void | number[];
    /**
     * Método para calcular o seno
     * @param valorParaCalcular - O número a ser calculado
     * @example Matematica.seno(Matematica.Pi)
     * @return - O resultado = 0 pois o seno de pi(180Graus) = 0
     */
    seno(valorParaCalcular: number): number;
    /**
     * Método para calcular o cosseno
     * @param valorParaCalcular - O número a ser calculado
     * @example Matematica.cosseno(Matematica.Pi)
     * @return - O resultado = 0 pois o cosseno de pi(180Graus) = 0
     */
    cosseno(valorParaCalcular: number): number;
    /**
     * Método para calcular o numero aleatorio entre 2 numeros
     * @param max
     * @param min
     * @example Matematica.numeroAleatorioEntre(10, 20)
     * @return - O resultado = algum numero entre 10 e 20
     */
    numeroAleatorioEntre(min: number, max: number): number;
    /**
     * Método para calcular a raiz de um polinomio de grau 1
     * @param a
     * @param b
     * @example Matematica.raizDePrimeiroGrau(a, b)
     *
     * a = termo que acompanha o (x)
     * e b = termo independente
     *
     * EX: ax + b = 0 ou 2x + 3 = 0 | a=2 e b=3
     *
     * Matematica.raizDePrimeiroGrau(2, 3)
     * @return - O resultado = x = -3/2 = -1,5
     */
    raizDePrimeiroGrau(a: number, b: number): ReturnTypesForEquation;
    /**
     * Método para calcular a raiz de um polinomio de grau 1
     * @param a
     * @param b
     * @param c
     * @example Matematica.raizDeSegundoGrau(a, b, c)
     *
     * a = termo que acompanha o (x^2)
     * b = termo que acompanha o (x)
     * c = termo independente
     *
     * EX: a(x^2) + b(x) + c = 0
     *
     *     1(x^2) + 2(x) - 3 = 0 | a = 1, b = 2, c = -3
     *
     * Matematica.raizDeSegundoGrau(1, 2, -3)
     * @return - O resultado = [1, -3]
     */
    raizDeSegundoGrau(a: number, b: number, c: number): ReturnTypesForEquation2upDegree;
    /**
     * Método para calcular a raiz de um polinomio de grau 1
     * @param a
     * @param b
     * @param c
     * @param d
     * @param [aproxima=false]
     * @example Matematica.raizDeTerceiroGrau(a, b, c, d)
     *
     * a = termo que acompanha o (x^3)
     * b = termo que acompanha o (x^2)
     * c = termo que acompanha o (x)
     * d = termo independente
     *
     * Matematica.raizDeTerceiroGrau(1, 2, -3, 5)
     * @return - Possui apenas 1 raiz real em X = -3.344171229347796
     */
    raizDeTerceiroGrau(a?: number, b?: number, c?: number, d?: number, aproxima?: boolean): ReturnTypesForEquation2upDegree;
}
declare const _default: Calculadora;
export = _default;
