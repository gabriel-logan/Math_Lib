/**
 * Represents a class for performing arithmetic operations.
 */
export default class ArithmeticOp {
	/**
	 * Calculates the sum of the given numbers.
	 * @param numbers - The numbers to be summed.
	 * @returns The sum of the numbers.
	 */
	protected sum(...numbers: number[]): number {
		return numbers.reduce((acc, curr) => acc + curr, 0);
	}

	/**
	 * Calculates the difference between the given numbers.
	 * @param numbers - The numbers to be subtracted.
	 * @returns The difference between the numbers.
	 */
	protected sub(...numbers: number[]): number {
		return numbers.reduce((acc, curr) => acc - curr);
	}

	/**
	 * Calculates the product of the given numbers.
	 * @param numbers - The numbers to be multiplied.
	 * @returns The product of the numbers.
	 */
	protected mul(...numbers: number[]): number {
		return numbers.reduce((acc, curr) => acc * curr, 1);
	}

	/**
	 * Calculates the division of the given numbers.
	 * @param numbers - The numbers to be divided.
	 * @returns The division of the numbers.
	 */
	protected div(...numbers: number[]): number {
		return numbers.reduce((acc, curr) => acc / curr);
	}

	/**
	 * Calculates the modulo of the given numbers.
	 * @param numbers - The numbers to be modded.
	 * @returns The modulo of the numbers.
	 */
	protected mod(...numbers: number[]): number {
		return numbers.reduce((acc, curr) => acc % curr);
	}

	/**
	 * Calculates the power of the given base and exponent.
	 * @param base - The base number.
	 * @param exponent - The exponent number.
	 * @returns The power of the base and exponent.
	 */
	protected power(base: number, exponent: number): number {
		let result = 1;
		for (let i = 0; i < exponent; i++) {
			result *= base;
		}
		return result;
	}

	public getSum() {
		return this.sum;
	}

	public getSub() {
		return this.sub;
	}

	public getMul() {
		return this.mul;
	}

	public getDiv() {
		return this.div;
	}

	public getMod() {
		return this.mod;
	}

	public getPower() {
		return this.power;
	}
}
