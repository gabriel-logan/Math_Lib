import ExtendedsTest from "../src/ExtendedsTests";

describe("ArithmeticOp", () => {
	let arithmeticOp: ExtendedsTest;

	beforeEach(() => {
		arithmeticOp = new ExtendedsTest();
	});

	describe("sum", () => {
		it("should calculate the sum of the given numbers", () => {
			expect(arithmeticOp.getSum(1, 2, 3)).toBe(6);
			expect(arithmeticOp.getSum(10, 20, 30, 40)).toBe(100);
		});
	});

	describe("sub", () => {
		it("should calculate the difference between the given numbers", () => {
			expect(arithmeticOp.getSub(5, 2)).toBe(3);
			expect(arithmeticOp.getSub(10, 5, 3)).toBe(2);
		});
	});

	describe("mul", () => {
		it("should calculate the product of the given numbers", () => {
			expect(arithmeticOp.getMul(2, 3)).toBe(6);
			expect(arithmeticOp.getMul(5, 10, 2)).toBe(100);
		});
	});

	describe("div", () => {
		it("should calculate the division of the given numbers", () => {
			expect(arithmeticOp.getDiv(10, 2)).toBe(5);
			expect(arithmeticOp.getDiv(100, 5, 2)).toBe(10);
		});
	});

	describe("mod", () => {
		it("should calculate the modulo of the given numbers", () => {
			expect(arithmeticOp.getMod(10, 3)).toBe(1);
			expect(arithmeticOp.getMod(100, 5, 3)).toBe(0);
			expect(arithmeticOp.getMod(100, 54, 6)).toBe(4);
		});
	});

	describe("power", () => {
		it("should calculate the power of the given base and exponent", () => {
			expect(arithmeticOp.getPower(2, 3)).toBe(8);
			expect(arithmeticOp.getPower(5, 3)).toBe(125);
			expect(arithmeticOp.getPower(-10, 2)).toBe(100);
			expect(arithmeticOp.getPower(-2, 3)).toBe(-8);
		});
	});
});
