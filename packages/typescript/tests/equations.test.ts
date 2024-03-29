import calculadora from "../src/loganmatic";

describe("Calculadora equations", () => {
	test("should correctly calculate the root of a linear equation", () => {
		const equationRoot = calculadora.raizDePrimeiroGrau(2, 3);
		expect(equationRoot).toEqual({
			value: -1.5,
			msg: "O valor de x é igual a: -1.5",
		});
	});

	test("should correctly calculate the roots of a quadratic equation", () => {
		const equationRoots = calculadora.raizDeSegundoGrau(1, -4, 4);
		expect(equationRoots).toEqual({
			value: 2,
			msg: "Possui apenas 1 raiz real em X = 2",
		});
	});

	test("should correctly calculate the roots of a cubic equation with c = 0", () => {
		const equationRoots = calculadora.raizDeTerceiroGrau(1, -6, 11, 0);
		expect(equationRoots).toEqual({
			value: 0,
			msg: "Possui apenas 1 raiz real em X = 0",
		});
	});

	test("should correctly calculate the roots of a cubic equation with c = 0", () => {
		const equationRoots = calculadora.raizDeTerceiroGrau(1, 3, -4, 0);
		expect(equationRoots).toEqual({
			value: [0, 1, -4],
			msg: "O valor de X1 = 0, X2 é igual a: 1 e O valor de X3 é igual a: -4",
		});
	});

	test("should correctly calculate the roots of a cubic equation using the deviceBrioRufinho method", () => {
		const equationRoots = calculadora.raizDeTerceiroGrau(1, -6, 11, -6);
		expect(equationRoots).toEqual({
			value: [1, 3, 2],
			msg: "O valor de X1 = 1, X2 é igual a: 3 e O valor de X3 é igual a: 2",
		});
	});

	test("should correctly calculate the roots of a cubic equation using the metodoDeNewton method", () => {
		const equationRoots = calculadora.raizDeTerceiroGrau(1, -6, 2, -6, true);
		expect(equationRoots).toEqual({
			value: 5.833469159762645,
			msg: "Possui apenas 1 raiz real em X = 5.8335",
		});
	});
});

/**
 * Raiz de um polinômio de grau 1 (método raizDePrimeiroGrau)
Raiz de um polinômio de grau 2 (método raizDeSegundoGrau)
Raiz de um polinômio de grau 3 (método raizDeTerceiroGrau)
Método de Newton para encontrar raízes de equações
Método Dispositivo de Brio-Rufinho para encontrar raízes de equações
 */
