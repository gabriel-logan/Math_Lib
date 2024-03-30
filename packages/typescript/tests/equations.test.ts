import Mathematics from "../src/loganmatic";
import generateCriticalPointInterval from "../src/generateCriticalPointInterval/";

describe("Calculadora equations", () => {
	// loganmatic.test.ts

	const rufineMethod = Mathematics.getRufinhoDevice();

	test("getRufinhoDevice returns the expected result", () => {
		// Substitua 'arg1', 'arg2', etc. pelos argumentos reais que getRufinhoDevice aceita
		const result = rufineMethod(1, -6, 11, -6, [1, 3, 2], false);
		// Substitua 'expectedResult' pelo resultado que você espera de getRufinhoDevice
		expect(result.value).toEqual([1, 3, 2]);
	});

	test("generateCriticalPointInterval returns a value within the expected range", () => {
		const min = 1;
		const max = 10;
		const result = generateCriticalPointInterval(min, max);
		expect(result).toBeGreaterThanOrEqual(min);
		expect(result).toBeLessThanOrEqual(max);
	});

	test("should correctly calculate the root of a linear equation", () => {
		const equationRoot = Mathematics.linearEquation(2, 3);
		expect(equationRoot).toEqual({
			value: -1.5,
			msg: "The value of x is the same as: -1.5",
		});
	});

	test("should correctly calculate the roots of a quadratic equation", () => {
		const equationRoots = Mathematics.quadraticEquation(1, -4, 4);
		expect(equationRoots).toEqual({
			value: [2],
			msg: "It has only 1 real root in X = 2",
		});
	});

	test("should correctly calculate the roots of a cubic equation with c = 0", () => {
		const equationRoots = Mathematics.cubicEquation(1, -6, 11, 0);
		expect(equationRoots).toEqual({
			value: [0],
			msg: "It has only 1 real root in X = 0",
		});
	});

	test("should correctly calculate the roots of a cubic equation with c = 0", () => {
		const equationRoots = Mathematics.cubicEquation(1, 3, -4, 0);
		expect(equationRoots).toEqual({
			value: [0, 1, -4],
			msg: "The value of X1 = 0, X2 it's the same as: 1 and The value of X3 it's the same as: -4",
		});
	});

	test("should correctly calculate the roots of a cubic equation using the deviceBrioRufinho method", () => {
		const equationRoots = Mathematics.cubicEquation(1, -6, 11, -6);
		expect(equationRoots).toEqual({
			value: [1, 3, 2],
			msg: "The value of X1 = 1, X2 it's the same as: 3 and The value of X3 it's the same as: 2",
		});
	});

	test("should correctly calculate the roots of a cubic equation using the metodoDeNewton method", () => {
		const equationRoots = Mathematics.cubicEquation(1, -6, 2, -6, true);
		const expectedRoots = [5.833469159762645];

		expect(equationRoots.value?.length).toEqual(expectedRoots.length);
		equationRoots.value?.forEach((root, index) => {
			expect(root).toBeCloseTo(expectedRoots[index]);
		});
	});
});
