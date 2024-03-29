import Mathematics from "../src/loganmatic";

describe("Calculadora general", () => {
	// ...existing test cases...

	test("should correctly calculate the least common multiple of two numbers", () => {
		const lcm = Mathematics.lcm([12, 18]);
		expect(lcm).toBe(36);
	});

	test("should correctly calculate the least common multiple of two negative numbers", () => {
		const lcm = Mathematics.lcm([-12, -18]);
		expect(lcm).toBe(36);
	});

	test("should correctly calculate the least common multiple of a positive and a negative number", () => {
		const lcm = Mathematics.lcm([12, -18]);
		expect(lcm).toBe(36);
	});

	test("should correctly calculate the greatest common divisor of two numbers", () => {
		const gcd = Mathematics.gcd([12, 18]);
		expect(gcd).toBe(6);
	});

	test("should correctly calculate the greatest common divisor of two negative numbers", () => {
		const gcd = Mathematics.gcd([-12, -18]);
		expect(gcd).toBe(6);
	});

	test("should correctly calculate the greatest common divisor of a positive and a negative number", () => {
		const gcd = Mathematics.gcd([12, -18]);
		expect(gcd).toBe(6);
	});
});
