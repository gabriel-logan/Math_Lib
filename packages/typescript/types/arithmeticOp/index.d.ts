/**
 * Represents a class for performing arithmetic operations.
 */
export default class ArithmeticOp {
    /**
     * Calculates the sum of the given numbers.
     * @param numbers - The numbers to be summed.
     * @returns The sum of the numbers.
     */
    protected sum(...numbers: number[]): number;
    /**
     * Calculates the difference between the given numbers.
     * @param numbers - The numbers to be subtracted.
     * @returns The difference between the numbers.
     */
    protected sub(...numbers: number[]): number;
    /**
     * Calculates the product of the given numbers.
     * @param numbers - The numbers to be multiplied.
     * @returns The product of the numbers.
     */
    protected mul(...numbers: number[]): number;
    /**
     * Calculates the division of the given numbers.
     * @param numbers - The numbers to be divided.
     * @returns The division of the numbers.
     */
    protected div(...numbers: number[]): number;
    /**
     * Calculates the modulo of the given numbers.
     * @param numbers - The numbers to be modded.
     * @returns The modulo of the numbers.
     */
    protected mod(...numbers: number[]): number;
    /**
     * Calculates the power of the given base and exponent.
     * @param base - The base number.
     * @param exponent - The exponent number.
     * @returns The power of the base and exponent.
     */
    protected power(base: number, exponent: number): number;
}
