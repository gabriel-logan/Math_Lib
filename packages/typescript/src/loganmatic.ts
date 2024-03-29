// Classe que representa uma calculadora com algumas funções matemáticas básicas

import {
	ReturnTypesForEquation,
	ReturnTypesForEquation2upDegree,
} from "./types/loganmatic";

const valorPi: string = "3.1415926535897932384626433832795";

/**
 * @author - Gabriel Logan
 * @description - Programa Criado como uma biblioteca de matematica em portugues
 * @example - import Matematica from "./loganmatic.js"
 * console.log(Matematica.Pi)
 */
class Calculadora {
	NumeroEuler: number; // Declare NumeroEuler property
	Pi: number; // Declare Pi property

	constructor() {
		this.NumeroEuler = this.crieEulerNumber();
		this.Pi = parseFloat(valorPi);
	}

	/**
	 * Método para calcular o valor absoluto de um numero
	 * @param n - Precisão do numero de euler
	 * @example Matematica.crieEulerNumber(99999); ira criar um numero de euler com 99999 somas, cuidado
	 * isso pode travar o seu pc, numeros muito grande resultam em demora para encontrar o valor
	 * @return - Numero de Euler
	 */
	protected crieEulerNumber(n = 9999): number {
		const inicioSomatorio = 0;
		let valorVasio = 0;

		for (let k = inicioSomatorio; k < n + 1; k++) {
			const serie = 1 ** k / this.fatorial(k);
			valorVasio += serie;
		}
		return valorVasio;
	}

	/**
	 * @param valorA
	 * @param valorB
	 * @param valorC
	 * @param valorD
	 * @param checkedSim
	 */
	protected metodoDeNewton(
		valorA: number,
		valorB: number,
		valorC: number,
		valorD: number,
		checkedSim: boolean,
	) {
		const valorADerivado = valorA * 3;
		const valorBDerivado = valorB * 2;
		const valorCDerivado = valorC * 1;

		const delta = valorBDerivado ** 2 - 4 * valorADerivado * valorCDerivado;

		const resposta1 =
			(-valorBDerivado + delta ** (1 / 2)) / (2 * valorADerivado);
		const resposta2 =
			(-valorBDerivado - delta ** (1 / 2)) / (2 * valorADerivado);

		let pontoCritico1 = resposta1 * 1000;
		let pontoCritico2 = resposta2 * 1000;

		if (resposta1 < 0 && resposta2 < 0) {
			pontoCritico1 = pontoCritico2 * -1;
		} else if (resposta1 > 0 && resposta2 > 0) {
			pontoCritico1 = pontoCritico2 * -1;
		}

		function geraIntervaloPontoCritico(min: number, max: number) {
			return Math.random() * (max - min + 1) + min;
		}

		let pontoCritico3: number;

		if (resposta1 > resposta2) {
			if (Number(resposta1) - Number(resposta2) > 1) {
				pontoCritico3 = geraIntervaloPontoCritico(
					Math.ceil(Number(resposta2) + 0.2),
					Number(resposta1),
				);
			} else {
				pontoCritico3 = geraIntervaloPontoCritico(
					Number(resposta2) + 0.2,
					Number(resposta1),
				);
			}
		} else {
			if (Number(resposta2) - Number(resposta1) > 1) {
				pontoCritico3 = geraIntervaloPontoCritico(
					Math.ceil(Number(resposta1) + 0.2),
					Number(resposta2),
				);
			} else {
				pontoCritico3 = geraIntervaloPontoCritico(
					Number(resposta1) + 0.2,
					Number(resposta2),
				);
			}
		}

		if (delta < 0) {
			pontoCritico1 = -10000;
			pontoCritico2 = 9000;
		}

		const primeiraRaizCritica = [];

		const iteracoes = 100000;

		for (let index = 0; index < iteracoes; index++) {
			pontoCritico1 =
				pontoCritico1 -
				(Number(valorA) * pontoCritico1 ** 3 +
					Number(valorB) * pontoCritico1 ** 2 +
					Number(valorC) * pontoCritico1 +
					Number(valorD)) /
					(Number(valorADerivado) * pontoCritico1 ** 2 +
						Number(valorBDerivado) * pontoCritico1 +
						Number(valorCDerivado));

			const valorDaFuncao1 = (
				Number(valorA) * pontoCritico1 ** 3 +
				Number(valorB) * pontoCritico1 ** 2 +
				Number(valorC) * pontoCritico1 +
				Number(valorD)
			).toFixed(10);

			pontoCritico2 =
				pontoCritico2 -
				(Number(valorA) * pontoCritico2 ** 3 +
					Number(valorB) * pontoCritico2 ** 2 +
					Number(valorC) * pontoCritico2 +
					Number(valorD)) /
					(Number(valorADerivado) * pontoCritico2 ** 2 +
						Number(valorBDerivado) * pontoCritico2 +
						Number(valorCDerivado));

			const valorDaFuncao2 = (
				Number(valorA) * pontoCritico2 ** 3 +
				Number(valorB) * pontoCritico2 ** 2 +
				Number(valorC) * pontoCritico2 +
				Number(valorD)
			).toFixed(10);

			pontoCritico3 =
				pontoCritico3 -
				(Number(valorA) * pontoCritico3 ** 3 +
					Number(valorB) * pontoCritico3 ** 2 +
					Number(valorC) * pontoCritico3 +
					Number(valorD)) /
					(Number(valorADerivado) * pontoCritico3 ** 2 +
						Number(valorBDerivado) * pontoCritico3 +
						Number(valorCDerivado));

			// const valorDaFuncao3 = ((Number(valorA)*((pontoCritico3)**3)) + (Number(valorB)*((pontoCritico3)**2)) + (Number(valorC)*(pontoCritico3)) + Number(valorD)).toFixed(10);

			if (
				parseFloat(valorDaFuncao1) === 0.0 &&
				parseFloat(valorDaFuncao2) === 0.0
			) {
				primeiraRaizCritica.push(pontoCritico1, pontoCritico2, pontoCritico3);
				break;
			}
		}

		if (
			primeiraRaizCritica[0].toFixed(7) == primeiraRaizCritica[1].toFixed(7)
		) {
			if (checkedSim) {
				return {
					value: [primeiraRaizCritica[0]],
					msg: `Possui apenas 1 raiz real em X = ${primeiraRaizCritica[0].toFixed(4)}`,
				};
			} else {
				return {
					value: [primeiraRaizCritica[0]],
					msg: `Possui apenas 1 raiz real em X = ${primeiraRaizCritica[0]}`,
				};
			}
		} else if (
			primeiraRaizCritica[0].toFixed(4) == primeiraRaizCritica[2].toFixed(4)
		) {
			this.metodoDeNewton(valorA, valorB, valorC, valorD, checkedSim);
		} else if (
			primeiraRaizCritica[1].toFixed(4) == primeiraRaizCritica[2].toFixed(4)
		) {
			this.metodoDeNewton(valorA, valorB, valorC, valorD, checkedSim);
		} else {
			if (checkedSim) {
				return {
					value: [
						primeiraRaizCritica[0],
						primeiraRaizCritica[1],
						primeiraRaizCritica[2],
					],
					msg: `X1 ≅ ${primeiraRaizCritica[0].toFixed(4)}, X2 ≅ ${primeiraRaizCritica[1].toFixed(4)}, X3 ≅ ${primeiraRaizCritica[2].toFixed(4)}`,
				};
			} else {
				return {
					value: [
						primeiraRaizCritica[0],
						primeiraRaizCritica[1],
						primeiraRaizCritica[2],
					],
					msg: `X1 ≅ ${primeiraRaizCritica[0]}, X2 ≅ ${primeiraRaizCritica[1]}, X3 ≅ ${primeiraRaizCritica[2]}`,
				};
			}
		}

		return {
			value: [primeiraRaizCritica[0]],
			msg: `X1 = ${primeiraRaizCritica[0]}`,
		};
	}

	/**
	 * @param valorA
	 * @param valorB
	 * @param valorC
	 * @param valorD
	 * @param raizes
	 * @param checkedSim
	 */
	protected dispositivoBrioRufinho(
		valorA: number,
		valorB: number,
		valorC: number,
		valorD: number,
		raizes: number[],
		checkedSim: boolean,
	) {
		const primeiro = valorA * raizes[0];

		const segundoCoeficiente = Number(primeiro) + Number(valorB);

		const segundo = segundoCoeficiente * raizes[0];

		const terceiroCoeficiente = Number(segundo) + Number(valorC);

		const terceiro = terceiroCoeficiente * raizes[0];

		const quartoCoeficiente = Number(terceiro) + Number(valorD);

		if (quartoCoeficiente == 0) {
			const delta = segundoCoeficiente ** 2 - 4 * valorA * terceiroCoeficiente;

			if (delta < 0) {
				return {
					value: [0],
					msg: `Possui apenas 1 raiz real em X = ${raizes[0]}`,
				};
			} else {
				const resposta1 =
					(-segundoCoeficiente + delta ** (1 / 2)) / (2 * valorA);
				const resposta2 =
					(-segundoCoeficiente - delta ** (1 / 2)) / (2 * valorA);

				if (delta === 0) {
					if (resposta1 == raizes[0]) {
						return {
							value: [0],
							msg: "O valor de X1 = 0 | X1 = X2 = X3",
						};
					} else {
						if (checkedSim) {
							return {
								value: [0, resposta1],
								msg: `O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X2 = X3`,
							};
						} else {
							return {
								value: [0, resposta1],
								msg: `O valor de X1 = 0 e X2 é igual a: ${resposta1} | X2 = X3`,
							};
						}
					}
				} else {
					if (resposta1 == raizes[0]) {
						if (checkedSim) {
							return {
								value: [raizes[0], resposta2],
								msg: `O valor de X1 = ${raizes[0]} e X2 = ${resposta2.toFixed(2)} | X1 = X3`,
							};
						} else {
							return {
								value: [raizes[0], resposta2],
								msg: `O valor de X1 = ${raizes[0]} e X2 = ${resposta2} | X1 = X3`,
							};
						}
					} else if (resposta2 == raizes[0]) {
						if (checkedSim) {
							return {
								value: [raizes[0], resposta1],
								msg: `O valor de X1 = ${raizes[0]} e X2 é igual a: ${resposta1.toFixed(2)} | X1 = X3`,
							};
						} else {
							return {
								value: [raizes[0], resposta1],
								msg: `O valor de X1 = ${raizes[0]} e X2 é igual a: ${resposta1} | X1 = X3`,
							};
						}
					} else {
						if (checkedSim) {
							return {
								value: [raizes[0], resposta1, resposta2],
								msg: `O valor de X1 = ${raizes[0]}, X2 é igual a: ${resposta1.toFixed(2)} e O valor de X3 é igual a: ${resposta2.toFixed(2)}`,
							};
						} else {
							return {
								value: [raizes[0], resposta1, resposta2],
								msg: `O valor de X1 = ${raizes[0]}, X2 é igual a: ${resposta1} e O valor de X3 é igual a: ${resposta2}`,
							};
						}
					}
				}
			}
		} else if (quartoCoeficiente != 0) {
			return this.metodoDeNewton(valorA, valorB, valorC, valorD, checkedSim);
		} else {
			return {
				value: null,
				msg: "Vish, não sei oque rolou HEHEHE",
			};
		}
	}

	// ACIMA FUNCOES PRIVADAS

	/**
	 * Método para calcular o valor absoluto de um numero
	 * @param numero - O número a ser calculado o modulo
	 * @example Matematica.modulo(-4)
	 * @return - O resultado = 4
	 */
	modulo(numero: number): number {
		if (numero < 0) {
			return -numero; // Retorna o valor negativo como positivo
		} else {
			return numero; // Retorna o valor positivo como é
		}
	}

	/**
	 * Método para calcular o fatorial de um número
	 * @param valorParaCalcular - O número a ser calculado o fatorial
	 * @example Matematica.fatorial(4)
	 * @return - O resultado do fatorial que é 24
	 */
	fatorial(valorParaCalcular: number): number {
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
	 * @param valorParaCalcular - O número a ter a raiz quadrada calculada
	 * @example Matematica.raizQuadrada(9)
	 * @return - O resultado da raiz quadrada = 3
	 */
	raizQuadrada(valorParaCalcular: number): number {
		return valorParaCalcular ** (1 / 2);
	}

	/**
	 * Método para calcular a raiz cúbica de um número
	 * @param valorParaCalcular - O número a ter a raiz cúbica calculada
	 * @example Matematica.raizCubica(8)
	 * @return - O resultado da raiz cúbica = 2
	 */
	raizCubica(valorParaCalcular: number): number {
		const convertToPositive = this.modulo(valorParaCalcular);
		const result = convertToPositive ** (1 / 3);
		if (valorParaCalcular < 0) {
			return result * -1;
		} else {
			return result;
		}
	}

	/**
	 * Método para fatorar um número
	 * @param valorParaCalcular - O número a ser fatorado
	 * @example Matematica.fatorar(100)
	 * @return - Um array com os fatores do número [2, 2, 5, 5]
	 */
	fatorar(valorParaCalcular: number): void | number[] {
		// Se o valor não é um número, retorna uma mensagem de erro
		if (typeof valorParaCalcular !== "number") {
			return console.log("Isso não é um numero inteiro");
		}

		const numerosFatorados = [];

		// Encontra os fatores do número
		for (let y = 2; y < valorParaCalcular; y++) {
			while (valorParaCalcular % y === 0) {
				valorParaCalcular /= y;
				numerosFatorados.push(y);
			}
		}

		// Se o array está vazio, significa que o número é primo e ele é adicionado ao array
		if (numerosFatorados.length === 0) {
			numerosFatorados.push(valorParaCalcular);
		}

		// Retorna o array com os fatores
		return numerosFatorados;
	}

	/**
	 * Método para calcular o seno
	 * @param valorParaCalcular - O número a ser calculado
	 * @example Matematica.seno(Matematica.Pi)
	 * @return - O resultado = 0 pois o seno de pi(180Graus) = 0
	 */
	seno(valorParaCalcular: number): number {
		// Valor da variavel X se tiver
		let n: number;
		if (
			this.modulo(valorParaCalcular) > 5 &&
			this.modulo(valorParaCalcular) <= 30
		) {
			n = 100; // Valor An para soma parcial
		} else if (this.modulo(valorParaCalcular) > 30) {
			n = 40; // Valor An para soma parcial
		} else {
			n = 200; // Valor An para soma parcial
		}
		const inicioSomatorio = 0; // Valor inicial do somatorio
		let valorVasio = 0;
		for (let k = inicioSomatorio; k < n + 1; k++) {
			const serie =
				((-1) ** k * valorParaCalcular ** (2 * k + 1)) /
				this.fatorial(2 * k + 1);
			valorVasio += serie; // Soma a serie de acordo com o valor de n
		}

		if (this.modulo(valorVasio) < 0.00000001) {
			return 0;
		} else {
			return valorVasio; // Retorna a soma parcial da serie
		}
	}

	/**
	 * Método para calcular o cosseno
	 * @param valorParaCalcular - O número a ser calculado
	 * @example Matematica.cosseno(Matematica.Pi)
	 * @return - O resultado = 0 pois o cosseno de pi(180Graus) = 0
	 */
	cosseno(valorParaCalcular: number): number {
		// Valor da variavel X se tiver
		let n: number;
		if (
			this.modulo(valorParaCalcular) > 5 &&
			this.modulo(valorParaCalcular) <= 30
		) {
			n = 100; // Valor An para soma parcial
		} else if (this.modulo(valorParaCalcular) > 30) {
			n = 40; // Valor An para soma parcial
		} else {
			n = 200; // Valor An para soma parcial
		}
		const inicioSomatorio = 0; // Valor inicial do somatorio
		let valorVasio = 0;
		for (let k = inicioSomatorio; k < n + 1; k++) {
			const serie =
				((-1) ** k * valorParaCalcular ** (2 * k)) / this.fatorial(2 * k);
			valorVasio += serie; // Soma a serie de acordo com o valor de n
		}

		if (this.modulo(valorVasio) < 0.00000001) {
			return 0;
		} else {
			return valorVasio; // Retorna a soma parcial da serie
		}
	}

	/**
	 * Método para calcular o numero aleatorio entre 2 numeros
	 * @param max
	 * @param min
	 * @example Matematica.numeroAleatorioEntre(10, 20)
	 * @return - O resultado = algum numero entre 10 e 20
	 */
	numeroAleatorioEntre(min: number, max: number): number {
		const timestamp = Date.now();
		return min + (timestamp % (max - min + 1));
	}

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
	raizDePrimeiroGrau(a: number, b: number): ReturnTypesForEquation {
		const numeroA = Number(a);
		const numeroB = Number(b);

		if (numeroA === 0) {
			return {
				value: null,
				msg: "O valor de 'a' não pode ser 0",
			};
		}

		const raiz = -numeroB / numeroA;
		return {
			value: raiz,
			msg: `O valor de x é igual a: ${raiz}`,
		};
	}

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
	raizDeSegundoGrau(
		a: number,
		b: number,
		c: number,
	): ReturnTypesForEquation2upDegree {
		const numeroA = Number(a);
		const numeroB = Number(b);
		const numeroC = Number(c);

		if (numeroB ** 2 - 4 * numeroA * numeroC < 0)
			return {
				value: null,
				msg: "A equação não possui raízes reais",
			};

		if (numeroA === 0 && numeroB === 0) {
			return {
				value: null,
				msg: "O valor de 'a' e 'b' não podem ser 0 ao mesmo tempo",
			};
		} else {
			const raiz1 =
				(-numeroB + this.raizQuadrada(b ** 2 - 4 * numeroA * numeroC)) /
				(2 * numeroA);
			const raiz2 =
				(-numeroB - this.raizQuadrada(b ** 2 - 4 * numeroA * numeroC)) /
				(2 * numeroA);

			if (raiz1 === raiz2) {
				return {
					value: [raiz1],
					msg: `Possui apenas 1 raiz real em X = ${raiz1}`,
				};
			} else {
				return {
					value: [raiz1, raiz2],
					msg: `O valor de X1 = ${raiz1} e X2 = ${raiz2}`,
				};
			}
		}
	}
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
	raizDeTerceiroGrau(
		a = 0,
		b = 0,
		c = 0,
		d = 0,
		aproxima = false,
	): ReturnTypesForEquation2upDegree {
		const checkedSim = aproxima;
		const valorA = Number(a);
		const valorB = Number(b);
		const valorC = Number(c);
		const valorD = Number(d);

		if (valorD == 0) {
			const x1 = 0;
			const delta = valorB ** 2 - 4 * valorA * valorC;

			if (delta < 0) {
				return {
					value: [0],
					msg: "Possui apenas 1 raiz real em X = 0",
				};
			} else {
				const resposta1 = (-valorB + delta ** (1 / 2)) / (2 * valorA);
				const resposta2 = (-valorB - delta ** (1 / 2)) / (2 * valorA);

				if (delta === 0) {
					if (resposta1 == x1) {
						return {
							value: [0],
							msg: "O valor de X1 = 0 | X1 = X2 = X3",
						};
					} else {
						if (checkedSim) {
							return {
								value: [0, resposta1],
								msg: `O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X2 = X3`,
							};
						} else {
							return {
								value: [0, resposta1],
								msg: `O valor de X1 = 0 e X2 é igual a: ${resposta1} | X2 = X3`,
							};
						}
					}
				} else {
					if (resposta1 == x1) {
						if (checkedSim) {
							return {
								value: [0, resposta2],
								msg: `O valor de X1 = 0 e X2 = ${resposta2.toFixed(2)} | X1 = X3`,
							};
						} else {
							return {
								value: [0, resposta2],
								msg: `O valor de X1 = 0 e X2 = ${resposta2} | X1 = X3`,
							};
						}
					} else if (resposta2 == x1) {
						if (checkedSim) {
							return {
								value: [0, resposta1],
								msg: `O valor de X1 = 0 e X2 = ${resposta1.toFixed(2)} | X1 = X3`,
							};
						} else {
							return {
								value: [0, resposta1],
								msg: `O valor de X1 = 0 e X2 é igual a: ${resposta1} | X1 = X3`,
							};
						}
					} else {
						if (checkedSim) {
							return {
								value: [0, resposta1, resposta2],
								msg: `O valor de X1 = 0, X2 é igual a: ${resposta1.toFixed(2)} e O valor de X3 é igual a: ${resposta2.toFixed(2)}`,
							};
						} else {
							return {
								value: [0, resposta1, resposta2],
								msg: `O valor de X1 = 0, X2 é igual a: ${resposta1} e O valor de X3 é igual a: ${resposta2}`,
							};
						}
					}
				}
			}
		} else {
			const possiveisRaizes = [];

			if (valorD > 0) {
				for (let index = 1; index < Number(valorD) + 1; index++) {
					const isInteger = valorD % index;
					if (isInteger == 0) {
						possiveisRaizes.push(index);
						possiveisRaizes.push(-index);
					}
				}
			} else {
				for (let index = -1; index > Number(valorD) - 1; index--) {
					const isInteger = valorD % index;
					if (isInteger == 0) {
						possiveisRaizes.push(index);
						possiveisRaizes.push(-index);
					}
				}
			}
			const raizes: number[] = [];
			possiveisRaizes.forEach((test) => {
				const primeiraRaiz =
					Number(valorA) * test ** 3 +
					Number(valorB) * test ** 2 +
					Number(valorC) * test +
					Number(valorD);
				if (primeiraRaiz == 0) {
					raizes.push(test);
				}
			});

			if (raizes.length === 0) {
				return this.metodoDeNewton(valorA, valorB, valorC, valorD, checkedSim);
			}

			return this.dispositivoBrioRufinho(
				valorA,
				valorB,
				valorC,
				valorD,
				raizes,
				checkedSim,
			);
		}
	}
}

// Cria uma instância da classe Calculadora
// Exporta a instância da classe Calculadora
export = new Calculadora();
