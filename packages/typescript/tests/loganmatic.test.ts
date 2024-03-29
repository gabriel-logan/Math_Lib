import calculadora from "../src/loganmatic";

describe("Calculadora general", () => {
	test("should correctly calculate Pi", () => {
		expect(calculadora.Pi).toBeCloseTo(3.141592653589793);
	});

	test("should correctly calculate Euler number", () => {
		const eulerNumber = calculadora.NumeroEuler;
		expect(eulerNumber).toBeCloseTo(2.71828);
	});

	test("should show only positive numbers", () => {
		const positiveNumber = calculadora.modulo(-1);
		expect(positiveNumber).toBe(1);
	});

	test("should correctly calculate the factorial of 5", () => {
		const factorial = calculadora.fatorial(5);
		expect(factorial).toBe(120);
	});

	test("should correctly calculate the square root of 9", () => {
		const squareRoot = calculadora.raizQuadrada(9);
		expect(squareRoot).toBe(3);
	});

	test("should correctly calculate the square root of 0", () => {
		const squareRoot = calculadora.raizQuadrada(0);
		expect(squareRoot).toBe(0);
	});

	test("should correctly calculate the square root of -1", () => {
		const squareRoot = calculadora.raizQuadrada(-1);
		expect(squareRoot).toBe(NaN);
	});

	test("should correctly calculate the cube root of 8", () => {
		const cubeRoot = calculadora.raizCubica(8);
		expect(cubeRoot).toBe(2);
	});

	test("should correctly calculate the cube root of -8", () => {
		const cubeRoot = calculadora.raizCubica(-8);
		expect(cubeRoot).toBe(-2);
	});

	test("Must correctly return factored numbers", () => {
		const factoredNumber = calculadora.fatorar(100);
		expect(factoredNumber).toEqual([2, 2, 5, 5]);
	});

	test("should correctly calculate the sine of 0", () => {
		const sine = calculadora.seno(0);
		expect(sine).toBe(0);
	});

	test("should correctly calculate the cosine of 0", () => {
		const cosine = calculadora.cosseno(0);
		expect(cosine).toBe(1);
	});

	test("should correctly calculate a random number between 1 and 10", () => {
		const randomNumber = calculadora.numeroAleatorioEntre(1, 10);
		expect(randomNumber).toBeGreaterThanOrEqual(1);
		expect(randomNumber).toBeLessThanOrEqual(10);
	});
});
