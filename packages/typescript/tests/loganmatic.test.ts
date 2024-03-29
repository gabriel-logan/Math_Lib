import calculadora from "../src/loganmatic";

describe("Calculadora", () => {
	test("should correctly calculate Pi", () => {
		expect(calculadora.Pi).toBeCloseTo(3.141592653589793);
	});

	test("should correctly calculate Euler number", () => {
		const eulerNumber = calculadora.NumeroEuler;
		expect(eulerNumber).toBeCloseTo(2.71828);
	});

	test("should correctly calculate the square root of 4", () => {
		const squareRoot = calculadora.raizQuadrada(4);
		expect(squareRoot).toBe(2);
	});

	test("should correctly calculate the square root of 9", () => {
		const squareRoot = calculadora.raizQuadrada(9);
		expect(squareRoot).toBe(3);
	});

	test("should show only positive numbers", () => {
		const positiveNumber = calculadora.modulo(-1);
		expect(positiveNumber).toBe(1);
	});
});
