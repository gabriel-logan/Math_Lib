import ArithmeticOp from "./arithmeticOp";
import { ReturnTypesForEquation, ReturnTypesForEquation2upDegree } from "./types/loganmatic";
/**
 * @author - Gabriel Logan
 * @description - Program created as a math library in English
 * @example - import Mathematics from "loganmatic"
 * console.log(Mathematics.Pi)
 */
declare class Calculator extends ArithmeticOp {
    EulerNumber: number;
    Pi: number;
    constructor();
    /**
     * Method to calculate the absoluteValue value of a number
     * @param n - Precision of the euler number
     * @example Mathematics.createEulerNumber(99999); will create an euler number with 99999 sums, be careful
     * this can freeze your pc, very large numbers result in delay to find the value
     * @return - Euler Number
     */
    protected createEulerNumber(n?: number): number;
    /**
     * @param valueA
     * @param valueB
     * @param valueC
     * @param valueD
     * @param checkedYes
     */
    protected newtonMethod(valueA: number, valueB: number, valueC: number, valueD: number, checkedYes: boolean): {
        value: number[];
        msg: string;
    };
    /**
     * @param valueA
     * @param valueB
     * @param valueC
     * @param valueD
     * @param raizes
     * @param checkedYes
     */
    protected ruffiniDevice(valueA: number, valueB: number, valueC: number, valueD: number, raizes: number[], checkedYes: boolean): {
        value: number[];
        msg: string;
    } | {
        value: null;
        msg: string;
    };
    /**
     * Method for calculating the absoluteValue value of a number
     * @param number - The number to calculate the module
     * @example Matematics.absoluteValue(-4)
     * @return - The result = 4
     */
    absoluteValue(number: number): number;
    /**
     * Method to calculate the factorial of a number
     * @param valueToCalculate - The number to calculate the factorial
     * @example Matematics.factorial(4)
     * @return - The result of the factorial which is 24
     */
    factorial(valueToCalculate: number): number;
    /**
     * Method to calculate the square root of a number
     * @param valueToCalculate - The number to calculate the square root
     * @example Matematics.squareRoot(9)
     * @return - The result of the square root = 3
     */
    squareRoot(valueToCalculate: number): number;
    /**
     * Method to calculate the cubic root of a number
     * @param valueToCalculate - The number to calculate the cubic root
     * @example Matematics.cubicRoot(8)
     * @return - The result of the cubic root = 2
     */
    cubicRoot(valueToCalculate: number): number;
    /**
     * Method to factor a number
     * @param valueToCalculate - The number to be factored
     * @example Matematics.factor(100)
     * @return - An array with the factors of the number [2, 2, 5, 5]
     */
    factor(valueToCalculate: number): void | number[];
    /**
     * Method to calculate the sine of a number
     * @param valueToCalculate - The number to calculate the sine
     * @example Matematics.sine(Matematics.Pi)
     * @return - The result = 0 because the sine of pi(180 degrees) = 0
     */
    sine(valueToCalculate: number): number;
    /**
     * Method to calculate the cosine of a number
     * @param valueToCalculate - The number to calculate the cosine
     * @example Matematics.cosine(Matematics.Pi)
     * @return - The result = 0 because the cosine of pi(180 degrees) = 0
     */
    cosine(valueToCalculate: number): number;
    /**
     * Method to calculate the gcd
     * @param valuesToCalculate - The numbers to calculate the gcd
     * @example Matematics.gcd([4,8])
     * @return - The result = 4 because the gcd of 4 and 8 = 4
     */
    gcd(valuesToCalculate: number[]): number;
    /**
     * Method to calculate the lcm
     * @param valuesToCalculate - The numbers to calculate the lcm
     * @example Matematics.lcm([4,8])
     * @return - The result = 8 because the lcm of 4 and 8 = 8
     */
    lcm(valuesToCalculate: number[]): number;
    /**
     * Method to generate a random number between two values
     * @param min - The minimum value
     * @param max - The maximum value
     * @example Matematics.randomNumberBetween(1, 10)
     * @return - A random number between 1 and 10
     */
    randomNumberBetween(min: number, max: number): number;
    /**
     * Method to calculate the root of a first degree polynomial
     * @param a
     * @param b
     * @example Mathematics.linearEquation(a, b)
     *
     * a = term that accompanies the (x)
     * and b = independent term
     *
     * EX: ax + b = 0 or 2x + 3 = 0 | a=2 and b=3
     *
     * Mathematics.linearEquation(2, 3)
     * @return - The result = x = -3/2 = -1.5
     */
    linearEquation(a: number, b: number): ReturnTypesForEquation;
    /**
     * Method to calculate the root of a first-degree polynomial
     * @param a
     * @param b
     * @param c
     * @example Mathematics.quadraticEquation(a, b, c)
     *
     * a = coefficient of (x^2)
     * b = coefficient of (x)
     * c = constant term
     *
     * EX: a(x^2) + b(x) + c = 0
     *
     *     1(x^2) + 2(x) - 3 = 0 | a = 1, b = 2, c = -3
     *
     * Mathematics.quadraticEquation(1, 2, -3)
     * @return - The result = [1, -3]
     */
    quadraticEquation(a: number, b: number, c: number): ReturnTypesForEquation2upDegree;
    /**
     * Method to calculate the root of a third-degree polynomial
     * @param a
     * @param b
     * @param c
     * @param d
     * @param [approximate=false]
     * @example Mathematics.cubicEquation(a, b, c, d)
     *
     * a = coefficient of (x^3)
     * b = coefficient of (x^2)
     * c = coefficient of (x)
     * d = constant term
     *
     * Mathematics.cubicEquation(1, 2, -3, 5)
     * @return - It has only 1 real root in X = -3.344171229347796
     */
    cubicEquation(a?: number, b?: number, c?: number, d?: number, approximate?: boolean): ReturnTypesForEquation2upDegree;
    getRufinhoDevice(): (valueA: number, valueB: number, valueC: number, valueD: number, raizes: number[], checkedYes: boolean) => {
        value: number[];
        msg: string;
    } | {
        value: null;
        msg: string;
    };
}
declare const _default: Calculator;
export = _default;
