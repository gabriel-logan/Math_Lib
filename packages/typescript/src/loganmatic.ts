// Class that represents a calculator with some basic mathematical functions

import {
	ReturnTypesForEquation,
	ReturnTypesForEquation2upDegree,
} from "./types/loganmatic";

const piValue: string = "3.1415926535897932384626433832795";

/**
 * @author - Gabriel Logan
 * @description - Program created as a math library in English
 * @example - import Mathematics from "loganmatic"
 * console.log(Mathematics.Pi)
 */
class Calculator {
	EulerNumber: number; // Declare EulerNumber property
	Pi: number; // Declare Pi property

	constructor() {
		this.EulerNumber = this.createEulerNumber();
		this.Pi = parseFloat(piValue);
	}

	/**
	 * Method to calculate the absoluteValue value of a number
	 * @param n - Precision of the euler number
	 * @example Mathematics.createEulerNumber(99999); will create an euler number with 99999 sums, be careful
	 * this can freeze your pc, very large numbers result in delay to find the value
	 * @return - Euler Number
	 */
	protected createEulerNumber(n = 9999): number {
		const sumStart = 0;
		let emptyValue = 0;

		for (let k = sumStart; k < n + 1; k++) {
			const series = 1 ** k / this.factorial(k);
			emptyValue += series;
		}
		return emptyValue;
	}

	/**
	 * @param valueA
	 * @param valueB
	 * @param valueC
	 * @param valueD
	 * @param checkedYes
	 */
	protected newtonMethod(
		valueA: number,
		valueB: number,
		valueC: number,
		valueD: number,
		checkedYes: boolean,
	) {
		const derivedValueA = valueA * 3;
		const derivedValueB = valueB * 2;
		const derivedValueC = valueC * 1;

		const delta = derivedValueB ** 2 - 4 * derivedValueA * derivedValueC;

		const answer1 = (-derivedValueB + delta ** (1 / 2)) / (2 * derivedValueA);
		const answer2 = (-derivedValueB - delta ** (1 / 2)) / (2 * derivedValueA);

		let criticalPoint1 = answer1 * 1000;
		let criticalPoint2 = answer2 * 1000;

		if (answer1 < 0 && answer2 < 0) {
			criticalPoint1 = criticalPoint2 * -1;
		} else if (answer1 > 0 && answer2 > 0) {
			criticalPoint1 = criticalPoint2 * -1;
		}

		function generateCriticalPointInterval(min: number, max: number) {
			return Math.random() * (max - min + 1) + min;
		}

		let criticalPoint3: number;

		if (answer1 > answer2) {
			if (Number(answer1) - Number(answer2) > 1) {
				criticalPoint3 = generateCriticalPointInterval(
					Math.ceil(Number(answer2) + 0.2),
					Number(answer1),
				);
			} else {
				criticalPoint3 = generateCriticalPointInterval(
					Number(answer2) + 0.2,
					Number(answer1),
				);
			}
		} else {
			if (Number(answer2) - Number(answer1) > 1) {
				criticalPoint3 = generateCriticalPointInterval(
					Math.ceil(Number(answer1) + 0.2),
					Number(answer2),
				);
			} else {
				criticalPoint3 = generateCriticalPointInterval(
					Number(answer1) + 0.2,
					Number(answer2),
				);
			}
		}

		if (delta < 0) {
			criticalPoint1 = -10000;
			criticalPoint2 = 9000;
		}

		const firstRootCritical = [];

		const iterations = 100000;

		for (let index = 0; index < iterations; index++) {
			criticalPoint1 =
				criticalPoint1 -
				(Number(valueA) * criticalPoint1 ** 3 +
					Number(valueB) * criticalPoint1 ** 2 +
					Number(valueC) * criticalPoint1 +
					Number(valueD)) /
					(Number(derivedValueA) * criticalPoint1 ** 2 +
						Number(derivedValueB) * criticalPoint1 +
						Number(derivedValueC));

			const functionValue1 = (
				Number(valueA) * criticalPoint1 ** 3 +
				Number(valueB) * criticalPoint1 ** 2 +
				Number(valueC) * criticalPoint1 +
				Number(valueD)
			).toFixed(10);

			criticalPoint2 =
				criticalPoint2 -
				(Number(valueA) * criticalPoint2 ** 3 +
					Number(valueB) * criticalPoint2 ** 2 +
					Number(valueC) * criticalPoint2 +
					Number(valueD)) /
					(Number(derivedValueA) * criticalPoint2 ** 2 +
						Number(derivedValueB) * criticalPoint2 +
						Number(derivedValueC));

			const functionValue2 = (
				Number(valueA) * criticalPoint2 ** 3 +
				Number(valueB) * criticalPoint2 ** 2 +
				Number(valueC) * criticalPoint2 +
				Number(valueD)
			).toFixed(10);

			criticalPoint3 =
				criticalPoint3 -
				(Number(valueA) * criticalPoint3 ** 3 +
					Number(valueB) * criticalPoint3 ** 2 +
					Number(valueC) * criticalPoint3 +
					Number(valueD)) /
					(Number(derivedValueA) * criticalPoint3 ** 2 +
						Number(derivedValueB) * criticalPoint3 +
						Number(derivedValueC));

			// const valueOfFuncao3 = ((Number(valueA)*((criticalPoint3)**3)) + (Number(valueB)*((criticalPoint3)**2)) + (Number(valueC)*(criticalPoint3)) + Number (valueD)).toFixed(10);

			if (
				parseFloat(functionValue1) === 0.0 &&
				parseFloat(functionValue2) === 0.0
			) {
				firstRootCritical.push(criticalPoint1, criticalPoint2, criticalPoint3);
				break;
			}
		}

		if (firstRootCritical[0].toFixed(7) == firstRootCritical[1].toFixed(7)) {
			if (checkedYes) {
				return {
					value: [firstRootCritical[0]],
					msg: `It has only 1 real root in X = ${firstRootCritical[0].toFixed(4)}`,
				};
			} else {
				return {
					value: [firstRootCritical[0]],
					msg: `It has only 1 real root in X = ${firstRootCritical[0]}`,
				};
			}
		} else if (
			firstRootCritical[0].toFixed(4) == firstRootCritical[2].toFixed(4)
		) {
			this.newtonMethod(valueA, valueB, valueC, valueD, checkedYes);
		} else if (
			firstRootCritical[1].toFixed(4) == firstRootCritical[2].toFixed(4)
		) {
			this.newtonMethod(valueA, valueB, valueC, valueD, checkedYes);
		} else {
			if (checkedYes) {
				return {
					value: [
						firstRootCritical[0],
						firstRootCritical[1],
						firstRootCritical[2],
					],
					msg: `X1 ≅ ${firstRootCritical[0].toFixed(4)}, X2 ≅ ${firstRootCritical[1].toFixed(4)}, X3 ≅ ${firstRootCritical[2].toFixed(4)}`,
				};
			} else {
				return {
					value: [
						firstRootCritical[0],
						firstRootCritical[1],
						firstRootCritical[2],
					],
					msg: `X1 ≅ ${firstRootCritical[0]}, X2 ≅ ${firstRootCritical[1]}, X3 ≅ ${firstRootCritical[2]}`,
				};
			}
		}

		return {
			value: [firstRootCritical[0]],
			msg: `X1 = ${firstRootCritical[0]}`,
		};
	}

	/**
	 * @param valueA
	 * @param valueB
	 * @param valueC
	 * @param valueD
	 * @param raizes
	 * @param checkedYes
	 */
	protected ruffiniDevice(
		valueA: number,
		valueB: number,
		valueC: number,
		valueD: number,
		raizes: number[],
		checkedYes: boolean,
	) {
		const first = valueA * raizes[0];

		const secondCoefficient = Number(first) + Number(valueB);

		const second = secondCoefficient * raizes[0];

		const thirdCoefficient = Number(second) + Number(valueC);

		const third = thirdCoefficient * raizes[0];

		const fourthCoefficient = Number(third) + Number(valueD);

		if (fourthCoefficient == 0) {
			const delta = secondCoefficient ** 2 - 4 * valueA * thirdCoefficient;

			if (delta < 0) {
				return {
					value: [0],
					msg: `It has only 1 real root in X = ${raizes[0]}`,
				};
			} else {
				const answer1 = (-secondCoefficient + delta ** (1 / 2)) / (2 * valueA);
				const answer2 = (-secondCoefficient - delta ** (1 / 2)) / (2 * valueA);

				if (delta === 0) {
					if (answer1 == raizes[0]) {
						return {
							value: [0],
							msg: "The value of X1 = 0 | X1 = X2 = X3",
						};
					} else {
						if (checkedYes) {
							return {
								value: [0, answer1],
								msg: `The value of X1 = 0 and X2 is equal to: ${answer1.toFixed(2)} | X2 = X3`,
							};
						} else {
							return {
								value: [0, answer1],
								msg: `The value of X1 = 0 and X2 is equal to: ${answer1} | X2 = X3`,
							};
						}
					}
				} else {
					if (answer1 == raizes[0]) {
						if (checkedYes) {
							return {
								value: [raizes[0], answer2],
								msg: `The value of X1 = ${raizes[0]} and X2 = ${answer2.toFixed(2)} | X1 = X3`,
							};
						} else {
							return {
								value: [raizes[0], answer2],
								msg: `The value of X1 = ${raizes[0]} and X2 = ${answer2} | X1 = X3`,
							};
						}
					} else if (answer2 == raizes[0]) {
						if (checkedYes) {
							return {
								value: [raizes[0], answer1],
								msg: `The value of X1 = ${raizes[0]} and X2 it's the same as: ${answer1.toFixed(2)} | X1 = X3`,
							};
						} else {
							return {
								value: [raizes[0], answer1],
								msg: `The value of X1 = ${raizes[0]} and X2 it's the same as: ${answer1} | X1 = X3`,
							};
						}
					} else {
						if (checkedYes) {
							return {
								value: [raizes[0], answer1, answer2],
								msg: `The value of X1 = ${raizes[0]}, X2 it's the same as: ${answer1.toFixed(2)} and The value of X3 it's the same as: ${answer2.toFixed(2)}`,
							};
						} else {
							return {
								value: [raizes[0], answer1, answer2],
								msg: `The value of X1 = ${raizes[0]}, X2 it's the same as: ${answer1} and The value of X3 it's the same as: ${answer2}`,
							};
						}
					}
				}
			}
		} else if (fourthCoefficient != 0) {
			return this.newtonMethod(valueA, valueB, valueC, valueD, checkedYes);
		} else {
			return {
				value: null,
				msg: "Vish, I don't know what happened HEHEHE",
			};
		}
	}

	// ABOVE PRIVATE FUNCTIONS

	/**
	 * Method for calculating the absoluteValue value of a number
	 * @param number - The number to calculate the module
	 * @example Matematics.absoluteValue(-4)
	 * @return - The result = 4
	 */
	absoluteValue(number: number): number {
		if (number < 0) {
			return -number; // Returns the negative value as positive
		} else {
			return number; // Returns the positive value as it is
		}
	}

	/**
	 * Method to calculate the factorial of a number
	 * @param valueToCalculate - The number to calculate the factorial
	 * @example Matematics.factorial(4)
	 * @return - The result of the factorial which is 24
	 */
	factorial(valueToCalculate: number): number {
		// If the value is zero, the factorial is 1
		if (valueToCalculate === 0) {
			return 1;
		}

		let result = 1;
		// Iterates over the numbers less than or equal to the value to calculate the factorial
		for (let i = 1; i <= valueToCalculate; i++) {
			result *= i;
		}

		// Returns the result of the factorial
		return result;
	}

	/**
	 * Method to calculate the square root of a number
	 * @param valueToCalculate - The number to calculate the square root
	 * @example Matematics.squareRoot(9)
	 * @return - The result of the square root = 3
	 */
	squareRoot(valueToCalculate: number): number {
		return valueToCalculate ** (1 / 2);
	}

	/**
	 * Method to calculate the cubic root of a number
	 * @param valueToCalculate - The number to calculate the cubic root
	 * @example Matematics.cubicRoot(8)
	 * @return - The result of the cubic root = 2
	 */
	cubicRoot(valueToCalculate: number): number {
		const convertToPositive = this.absoluteValue(valueToCalculate);
		const result = convertToPositive ** (1 / 3);
		if (valueToCalculate < 0) {
			return result * -1;
		} else {
			return result;
		}
	}

	/**
	 * Method to factor a number
	 * @param valueToCalculate - The number to be factored
	 * @example Matematics.factor(100)
	 * @return - An array with the factors of the number [2, 2, 5, 5]
	 */
	factor(valueToCalculate: number): void | number[] {
		// If the value is not a number, returns an error message
		if (typeof valueToCalculate !== "number") {
			return console.log("This is not an integer");
		}

		const factoredNumbers = [];

		// Finds the factors of the number
		for (let y = 2; y < valueToCalculate; y++) {
			while (valueToCalculate % y === 0) {
				valueToCalculate /= y;
				factoredNumbers.push(y);
			}
		}

		// If the array is empty, it means that the number is prime and it is added to the array
		if (factoredNumbers.length === 0) {
			factoredNumbers.push(valueToCalculate);
		}

		return factoredNumbers;
	}

	/**
	 * Method to calculate the sine of a number
	 * @param valueToCalculate - The number to calculate the sine
	 * @example Matematics.sine(Matematics.Pi)
	 * @return - The result = 0 because the sine of pi(180 degrees) = 0
	 */
	sine(valueToCalculate: number): number {
		// Value of the variable X if it exists
		let n: number;
		if (
			this.absoluteValue(valueToCalculate) > 5 &&
			this.absoluteValue(valueToCalculate) <= 30
		) {
			n = 100; // Value An for partial sum
		} else if (this.absoluteValue(valueToCalculate) > 30) {
			n = 40; // Value An for partial sum
		} else {
			n = 200; // Value An for partial sum
		}
		const startSum = 0; // Initial value of the sum
		let emptyValue = 0;
		for (let k = startSum; k < n + 1; k++) {
			const series =
				((-1) ** k * valueToCalculate ** (2 * k + 1)) /
				this.factorial(2 * k + 1);
			emptyValue += series; // Adds the series according to the value of n
		}

		if (this.absoluteValue(emptyValue) < 0.00000001) {
			return 0;
		} else {
			return emptyValue; // Returns the partial sum of the series
		}
	}

	/**
	 * Method to calculate the cosine of a number
	 * @param valueToCalculate - The number to calculate the cosine
	 * @example Matematics.cosine(Matematics.Pi)
	 * @return - The result = 0 because the cosine of pi(180 degrees) = 0
	 */
	cosine(valueToCalculate: number): number {
		// Value of the variable X if it exists
		let n: number;
		if (
			this.absoluteValue(valueToCalculate) > 5 &&
			this.absoluteValue(valueToCalculate) <= 30
		) {
			n = 100; // Value An for partial sum
		} else if (this.absoluteValue(valueToCalculate) > 30) {
			n = 40; // Value An for partial sum
		} else {
			n = 200; // Value An for partial sum
		}
		const startSum = 0; // Initial value of the sum
		let emptyValue = 0;
		for (let k = startSum; k < n + 1; k++) {
			const series =
				((-1) ** k * valueToCalculate ** (2 * k)) / this.factorial(2 * k);
			emptyValue += series; // Adds the series according to the value of n
		}

		if (this.absoluteValue(emptyValue) < 0.00000001) {
			return 0;
		} else {
			return emptyValue; // Returns the partial sum of the series
		}
	}

	/**
	 * Method to calculate the gcd
	 * @param valuesToCalculate - The numbers to calculate the gcd
	 * @example Matematics.gcd([4,8])
	 * @return - The result = 4 because the gcd of 4 and 8 = 4
	 */
	gcd(valuesToCalculate: number[]): number {
		let mdcValue = valuesToCalculate[0];
		for (let i = 1; i < valuesToCalculate.length; i++) {
			let a = mdcValue;
			let b = valuesToCalculate[i];
			let rest: number;
			while (b !== 0) {
				rest = a % b;
				a = b;
				b = rest;
			}
			mdcValue = a;
		}
		return this.absoluteValue(mdcValue);
	}

	/**
	 * Method to calculate the lcm
	 * @param valuesToCalculate - The numbers to calculate the lcm
	 * @example Matematics.lcm([4,8])
	 * @return - The result = 8 because the lcm of 4 and 8 = 8
	 */
	lcm(valuesToCalculate: number[]): number {
		let mmcValue = valuesToCalculate[0];
		for (let i = 1; i < valuesToCalculate.length; i++) {
			let a = mmcValue;
			let b = valuesToCalculate[i];
			let rest: number;
			const mdcValue = a;
			while (b !== 0) {
				rest = a % b;
				a = b;
				b = rest;
			}
			mmcValue = (mdcValue * valuesToCalculate[i]) / a;
		}
		return this.absoluteValue(mmcValue);
	}

	/**
	 * Method to generate a random number between two values
	 * @param min - The minimum value
	 * @param max - The maximum value
	 * @example Matematics.randomNumberBetween(1, 10)
	 * @return - A random number between 1 and 10
	 */
	randomNumberBetween(min: number, max: number): number {
		const timestamp = Date.now();
		return min + (timestamp % (max - min + 1));
	}

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
	linearEquation(a: number, b: number): ReturnTypesForEquation {
		const numberA = Number(a);
		const numberB = Number(b);

		if (numberA === 0) {
			return {
				value: null,
				msg: "The value of 'a' cannot be 0",
			};
		}

		const root = -numberB / numberA;
		return {
			value: root,
			msg: `The value of x is the same as: ${root}`,
		};
	}

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
	quadraticEquation(
		a: number,
		b: number,
		c: number,
	): ReturnTypesForEquation2upDegree {
		const numberA = Number(a);
		const numberB = Number(b);
		const numberC = Number(c);

		if (numberB ** 2 - 4 * numberA * numberC < 0)
			return {
				value: null,
				msg: "The equation does not have real roots",
			};

		if (numberA === 0 && numberB === 0) {
			return {
				value: null,
				msg: "The values of 'a' and 'b' cannot be 0 at the same time",
			};
		} else {
			const root1 =
				(-numberB + this.squareRoot(b ** 2 - 4 * numberA * numberC)) /
				(2 * numberA);
			const root2 =
				(-numberB - this.squareRoot(b ** 2 - 4 * numberA * numberC)) /
				(2 * numberA);

			if (root1 === root2) {
				return {
					value: [root1],
					msg: `It has only 1 real root in X = ${root1}`,
				};
			} else {
				return {
					value: [root1, root2],
					msg: `The value of X1 = ${root1} and X2 = ${root2}`,
				};
			}
		}
	}

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
	cubicEquation(
		a = 0,
		b = 0,
		c = 0,
		d = 0,
		approximate = false,
	): ReturnTypesForEquation2upDegree {
		const checkedYes = approximate;
		const valueA = Number(a);
		const valueB = Number(b);
		const valueC = Number(c);
		const valueD = Number(d);

		if (valueD == 0) {
			const x1 = 0;
			const delta = valueB ** 2 - 4 * valueA * valueC;

			if (delta < 0) {
				return {
					value: [0],
					msg: "It has only 1 real root in X = 0",
				};
			} else {
				const answer1 = (-valueB + delta ** (1 / 2)) / (2 * valueA);
				const answer2 = (-valueB - delta ** (1 / 2)) / (2 * valueA);

				if (delta === 0) {
					if (answer1 == x1) {
						return {
							value: [0],
							msg: "The value of X1 = 0 | X1 = X2 = X3",
						};
					} else {
						if (checkedYes) {
							return {
								value: [0, answer1],
								msg: `The value of X1 = 0 and X2 is equal to: ${answer1.toFixed(2)} | X2 = X3`,
							};
						} else {
							return {
								value: [0, answer1],
								msg: `The value of X1 = 0 and X2 is equal to: ${answer1} | X2 = X3`,
							};
						}
					}
				} else {
					if (answer1 == x1) {
						if (checkedYes) {
							return {
								value: [0, answer2],
								msg: `The value of X1 = 0 and X2 = ${answer2.toFixed(2)} | X1 = X3`,
							};
						} else {
							return {
								value: [0, answer2],
								msg: `The value of X1 = 0 and X2 = ${answer2} | X1 = X3`,
							};
						}
					} else if (answer2 == x1) {
						if (checkedYes) {
							return {
								value: [0, answer1],
								msg: `The value of X1 = 0 and X2 = ${answer1.toFixed(2)} | X1 = X3`,
							};
						} else {
							return {
								value: [0, answer1],
								msg: `The value of X1 = 0 and X2 is equal to: ${answer1} | X1 = X3`,
							};
						}
					} else {
						if (checkedYes) {
							return {
								value: [0, answer1, answer2],
								msg: `The value of X1 = 0, X2 it's the same as: ${answer1.toFixed(2)} and The value of X3 it's the same as: ${answer2.toFixed(2)}`,
							};
						} else {
							return {
								value: [0, answer1, answer2],
								msg: `The value of X1 = 0, X2 it's the same as: ${answer1} and The value of X3 it's the same as: ${answer2}`,
							};
						}
					}
				}
			}
		} else {
			const possibleRoots = [];

			if (valueD > 0) {
				for (let index = 1; index < Number(valueD) + 1; index++) {
					const isInteger = valueD % index;
					if (isInteger == 0) {
						possibleRoots.push(index);
						possibleRoots.push(-index);
					}
				}
			} else {
				for (let index = -1; index > Number(valueD) - 1; index--) {
					const isInteger = valueD % index;
					if (isInteger == 0) {
						possibleRoots.push(index);
						possibleRoots.push(-index);
					}
				}
			}
			const raizes: number[] = [];

			possibleRoots.forEach((test) => {
				const primeiraRaiz =
					Number(valueA) * test ** 3 +
					Number(valueB) * test ** 2 +
					Number(valueC) * test +
					Number(valueD);
				if (primeiraRaiz == 0) {
					raizes.push(test);
				}
			});

			if (raizes.length === 0) {
				return this.newtonMethod(valueA, valueB, valueC, valueD, checkedYes);
			}

			return this.ruffiniDevice(
				valueA,
				valueB,
				valueC,
				valueD,
				raizes,
				checkedYes,
			);
		}
	}
}

// Create an instance of the Calculator class
// Exports the instance of the Calculator class
export default new Calculator();
