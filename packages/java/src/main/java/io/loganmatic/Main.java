package io.loganmatic;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main {
    // "I am using Math.pow because I couldn't develop a method for powers."
    private static final double PI = 3.14159265358979323846;
    private static final double EULER_NUMBER = createEulerNumber();
    private static final Random random = new Random();

    public static void main(String[] args) {
        // Call the method
    }

    /**
     * The mathematical constant π (pi) represents the ratio of a circle's circumference to its diameter.
     */
    public static double getPi() {
        return PI;
    }

    /**
     * The Euler number is a mathematical constant that is the base of the natural logarithm.
     */
    public static double getEulerNumber() {
        return EULER_NUMBER;
    }

    private static double createEulerNumber() {
        double eulerNumber = 0.0;
        final int n = 9999; // number of iterations
        // Iterates over the numbers from 0 to 9 to calculate the Euler number
        for (int i = 0; i < n; i++) {
            // Calculates the Euler number using the formula: 1 / i!
            eulerNumber += 1.0 / factorial(i);
        }

        // Returns the Euler number
        return eulerNumber;
    }

    private static int generateCriticalPointInterval(int min, int max) {
        return randomNumberBetween(min, max);
    }

    private static List<Integer> generatePossibleRoots(double valueD) {
        List<Integer> possibleRoots = new ArrayList<>();
        if (valueD > 0) {
            for (int index = 1; index < valueD + 1; index++) {
                double isInteger = valueD % index;
                if (isInteger == 0) {
                    possibleRoots.add(index);
                    possibleRoots.add(-index);
                }
            }
        } else {
            for (int index = -1; index > valueD - 1; index--) {
                double isInteger = valueD % index;
                if (isInteger == 0) {
                    possibleRoots.add(index);
                    possibleRoots.add(-index);
                }
            }
        }
        return possibleRoots;
    }

    /**
     * @param valueA The value of the A coefficient of the cubic equation.
     * @param valueB The value of the B coefficient of the cubic equation.
     * @param valueC The value of the C coefficient of the cubic equation.
     * @param valueD The value of the D coefficient of the cubic equation.
     * @return The result of the cubic equation with the Newton method.
     */
    private static @NotNull CubicEquationResult newtonMethodForCubicEquation(double valueA, double valueB, double valueC, double valueD) {
        CubicEquationResult result; // The result of the cubic equation with the Newton method

        double derivedValueA = valueA * 3;
        double derivedValueB = valueB * 2;
        double derivedValueC = valueC * 1;

        double delta = quadraticEquationDiscriminant(derivedValueA, derivedValueB, derivedValueC);

        QuadraticEquationResult quadraticResult = quadraticEquation(derivedValueA, derivedValueB, derivedValueC);

        double answer1 = quadraticResult.valueX1;
        double answer2 = quadraticResult.valueX2;

        double criticalPoint1 = answer1 * 1000;
        double criticalPoint2 = answer2 * 2000;
        double criticalPoint3;

        if ((answer1 < 0 && answer2 < 0) || (answer1 > 0 && answer2 > 0)) {
            criticalPoint1 = criticalPoint2 * -1;
        }

        if (answer1 > answer2) {
            if (answer1 - answer2 > 1) {
                criticalPoint3 = generateCriticalPointInterval((int) Math.ceil(answer2 + 0.2), (int) answer1);
            } else {
                criticalPoint3 = generateCriticalPointInterval((int) (answer2 + 0.2), (int) answer1);
            }
        } else {
            if (answer2 - answer1 > 1) {
                criticalPoint3 = generateCriticalPointInterval((int) Math.ceil(answer1 + 0.2), (int) answer2);
            } else {
                criticalPoint3 = generateCriticalPointInterval((int) (answer1 + 0.2), (int) answer2);
            }
        }

        if (delta < 0) {
            criticalPoint1 = -10000;
            criticalPoint2 = 9000;
        }

        List<Double> firstRootCritical = new ArrayList<>();

        final int iterations = 100000; // number of iterations for the Newton method to find the roots of the cubic equation

        for (int index = 0; index < iterations; index++) {
            criticalPoint1 =
                    criticalPoint1 -
                            (valueA * Math.pow(criticalPoint1, 3) +
                                    valueB * Math.pow(criticalPoint1, 2) +
                                    valueC * criticalPoint1 +
                                    valueD) /
                                    (derivedValueA * Math.pow(criticalPoint1, 2) +
                                            derivedValueB * criticalPoint1 +
                                            derivedValueC);

            double functionValue1 =
                    (valueA * Math.pow(criticalPoint1, 3) +
                            valueB * Math.pow(criticalPoint1, 2) +
                            valueC * criticalPoint1 +
                            valueD);

            criticalPoint2 =
                    criticalPoint2 -
                            (valueA * Math.pow(criticalPoint2, 3) +
                                    valueB * Math.pow(criticalPoint2, 2) +
                                    valueC * criticalPoint2 +
                                    valueD) /
                                    (derivedValueA * Math.pow(criticalPoint2, 2) +
                                            derivedValueB * criticalPoint2 +
                                            derivedValueC);

            double functionValue2 =
                    (valueA * Math.pow(criticalPoint2, 3) +
                            valueB * Math.pow(criticalPoint2, 2) +
                            valueC * criticalPoint2 +
                            valueD);

            criticalPoint3 =
                    criticalPoint3 -
                            (valueA * Math.pow(criticalPoint3, 3) +
                                    valueB * Math.pow(criticalPoint3, 2) +
                                    valueC * criticalPoint3 +
                                    valueD) /
                                    (derivedValueA * Math.pow(criticalPoint3, 2) +
                                            derivedValueB * criticalPoint3 +
                                            derivedValueC);

            if (Math.abs(functionValue1) < 1e-10 && Math.abs(functionValue2) < 1e-10) {
                firstRootCritical.add(criticalPoint1);
                firstRootCritical.add(criticalPoint2);
                firstRootCritical.add(criticalPoint3);
                break;
            }
        }

        if (Math.abs(firstRootCritical.getFirst() - firstRootCritical.get(1)) < 1e-7) {
            result = new CubicEquationResult(firstRootCritical.getFirst(), firstRootCritical.getFirst(), firstRootCritical.getFirst(), String.format("It has only 1 real root in X = %f", firstRootCritical.getFirst()));
        } else if (Math.abs(firstRootCritical.getFirst() - firstRootCritical.get(2)) < 1e-4) {
            result = newtonMethodForCubicEquation(valueA, valueB, valueC, valueD);
        } else if (Math.abs(firstRootCritical.get(1) - firstRootCritical.get(2)) < 1e-4) {
            result = newtonMethodForCubicEquation(valueA, valueB, valueC, valueD);
        } else {
            result = new CubicEquationResult(firstRootCritical.getFirst(), firstRootCritical.get(1), firstRootCritical.get(2), String.format("X1 ≅ %f, X2 ≅ %f, X3 ≅ %f", firstRootCritical.getFirst(), firstRootCritical.get(1), firstRootCritical.get(2)));
        }
        return result;
    }

    /**
     * @param valueA The value of the A coefficient of the cubic equation.
     * @param valueB The value of the B coefficient of the cubic equation.
     * @param valueC The value of the C coefficient of the cubic equation.
     * @param valueD The value of the D coefficient of the cubic equation.
     * @param roots The possible roots of the cubic equation.
     * @return The result of the cubic equation with the Brio Ruffini method.
     */
    private static @NotNull CubicEquationResult brioRuffiniForCubicEquation(double valueA, double valueB, double valueC, double valueD, List<Integer> roots) {
        CubicEquationResult result; // The result of the cubic equation with the Brio Ruffini method

        double gotFirstRoot = roots.getFirst();

        double first = valueA * gotFirstRoot;

        double secondCoefficient = first + valueB;

        double second = secondCoefficient * gotFirstRoot;

        double thirdCoefficient = second + valueC;

        double third = thirdCoefficient * gotFirstRoot;

        double fourthCoefficient = third + valueD;

        if (fourthCoefficient == 0.0) {
            double delta = quadraticEquationDiscriminant(valueA, secondCoefficient, thirdCoefficient);

            if (delta < 0) {
                result = new CubicEquationResult(gotFirstRoot, gotFirstRoot, gotFirstRoot, "X = " + gotFirstRoot);
            } else {
                QuadraticEquationResult quadraticResult = quadraticEquation(valueA, secondCoefficient, thirdCoefficient);

                double answer1 = quadraticResult.valueX1;
                double answer2 = quadraticResult.valueX2;

                if (delta == 0) {
                    if (answer1 == gotFirstRoot) {
                        result = new CubicEquationResult(0, 0, 0, "X = 0");
                    } else {
                        result = new CubicEquationResult(0, answer1, answer1, "X1 = 0 and X2 = " + answer1);
                    }
                } else {
                    final String X1Result = "X1 = " + gotFirstRoot + " and ";
                    final String X2Result = "X2 = ";
                    if (answer1 == gotFirstRoot) {
                        result = new CubicEquationResult(gotFirstRoot, answer2, answer2, X1Result + X2Result + answer2);
                    } else if (answer2 == gotFirstRoot) {
                        result = new CubicEquationResult(gotFirstRoot, answer1, answer1, X1Result + X2Result + answer1);
                    } else {
                        result = new CubicEquationResult(gotFirstRoot, answer1, answer2, X1Result + X2Result + answer1 + " and X3 = " + answer2);
                    }
                }
            }
        } else {
            result = newtonMethodForCubicEquation(valueA, valueB, valueC, valueD);
        }
        return result;
    }

    /**
     * Calculates the absolute value of the specified value.
     *
     * @param number The value to calculate the absolute value.
     * @return The absolute value of the specified value.
     */
    public static double absoluteValue(double number) {
        if (number < 0) {
            return -number;
        }
        return number;
    }

    /**
     * Calculates the square root of the specified value.
     *
     * @param valueToCalculate The value to calculate the square root.
     * @return The square root of the specified value.
     */
    public static double cubicRoot(double valueToCalculate) {
        return Math.cbrt(valueToCalculate);
    }

    /**
     * Calculates the square root of the specified value.
     *
     * @param valueToCalculate The value to calculate the square root.
     * @return The square root of the specified value.
     */
    public static double squareRoot(double valueToCalculate) {
        return Math.sqrt(valueToCalculate);
    }

    /**
     * Calculates the factor of the specified value.
     *
     * @param valueToCalculate // The value to calculate the factor. like 100
     * @return An array with the factors of the specified value [2,2,5,5]
     */
    public static List<Integer> factor(int valueToCalculate) {
        final ArrayList<Integer> factors = new ArrayList<>();

        for (int i = 2; i <= valueToCalculate; i++) {
            while (valueToCalculate % i == 0) {
                valueToCalculate /= i;
                factors.add(i);
            }
        }

        if (factors.isEmpty()) {
            factors.add(valueToCalculate);
        }

        return factors;
    }

    /**
     * Generates a random number between the specified minimum and maximum values.
     *
     * @param min The minimum value.
     * @param max The maximum value.
     * @return A random number between the specified minimum and maximum values.
     */
    public static int randomNumberBetween(int min, int max) {
        return random.nextInt(max - min + 1) + min;
    }

    /**
     * Calculates the factorial of the specified value.
     *
     * @param valueToCalculate The value to calculate the factorial.
     * @return The factorial of the specified value.
     */
    public static int factorial(int valueToCalculate) {
        // If the value is negative, the factorial is not defined
        if (valueToCalculate < 0) {
            throw new IllegalArgumentException("The value must be greater than or equal to zero");
        }

        // If the value is zero, the factorial is 1
        if (valueToCalculate == 0) {
            return 1;
        }

        float result = 1f;
        // Iterates over the numbers less than or equal to the value to calculate the factorial
        for (int i = 1; i <= valueToCalculate; i++) {
            result *= i;
        }

        // Returns the result of the factorial
        return (int) result;
    }

    /**
     * Calculate the sine of the specified angle.
     *
     * @param angle The angle to calculate the sine.
     * @return The sine of the specified angle.
     */
    public static double sine(double angle) {
        int n;

        if (absoluteValue(angle) > 5 && absoluteValue(angle) <= 30) {
            n = 100;
        } else if (absoluteValue(angle) > 30) {
            n = 40;
        } else {
            n = 200;
        }

        int startNumberIteration = 0;
        double sine = 0;

        for (int k = startNumberIteration; k < n; k++) {
            final double series = (Math.pow((-1), k) * Math.pow(angle, (2 * k + 1))) / factorial(2 * k + 1);
            sine += series;
        }

        if (absoluteValue(sine) < 1e-10) {
            sine = 0;
        }

        return sine;
    }

    /**
     * Calculate the cosine of the specified angle.
     *
     * @param angle The angle to calculate the cosine.
     * @return The cosine of the specified angle.
     */
    public static double cosine(double angle) {
        int n;

        if (absoluteValue(angle) > 5 && absoluteValue(angle) <= 30) {
            n = 100;
        } else if (absoluteValue(angle) > 30) {
            n = 40;
        } else {
            n = 200;
        }

        int startNumberIteration = 0;
        double cosine = 0.0;

        for (int k = startNumberIteration; k < n; k++) {
            double series = (Math.pow((-1), k) * Math.pow(angle, 2.0 * k)) / factorial(2 * k);
            cosine += series;
        }

        if (absoluteValue(cosine) < 1e-10) {
            cosine = 0.0;
        }

        return cosine;
    }

    /**
     * Calculate the tangent of the specified angle.
     *
     * @param angle The angle to calculate the tangent.
     * @return The tangent of the specified angle.
     */
    public static double tangent(double angle) {
        if(cosine(angle) == 0){
            throw new IllegalArgumentException("The tangent of the angle is not defined (cosine is zero)" + angle);
        }
        return sine(angle) / cosine(angle);
    }

    /**
     * Calculate the cotangent of the specified angle.
     *
     * @param angle The angle to calculate the cotangent.
     * @return The cotangent of the specified angle.
     */
    public static double cotangent(double angle) {
        if (tangent(angle) == 0) {
            throw new IllegalArgumentException("The cotangent of the angle is not defined (tangent is zero)" + angle);
        }
        return 1 / tangent(angle);
    }

    /**
     * Calculate the secant of the specified angle.
     *
     * @param angle The angle to calculate the secant.
     * @return The secant of the specified angle.
     */
    public static double secant(double angle) {
        if (cosine(angle) == 0) {
            throw new IllegalArgumentException("The secant of the angle is not defined (cosine is zero)" + angle);
        }
        return 1 / cosine(angle);
    }

    /**
     * Calculate the cosecant of the specified angle.
     *
     * @param angle The angle to calculate the cosecant.
     * @return The cosecant of the specified angle.
     */
    public static double cosecant(double angle) {
        if (sine(angle) == 0) {
            throw new IllegalArgumentException("The cosecant of the angle is not defined (sine is zero)" + angle);
        }
        return 1 / sine(angle);
    }

    /**
     * Calculate the gcd of the specified values.
     *
     * @param valuesToCalculate The values to calculate the gcd.
     * @return The gcd of the specified values.
     */
    public static int gcd(List<Integer> valuesToCalculate) {
        int mdcValue = valuesToCalculate.getFirst();
        for (int i = 1; i < valuesToCalculate.size(); i++) {
            int a = mdcValue;
            int b = valuesToCalculate.get(i);
            int rest;
            while (b != 0) {
                rest = a % b;
                a = b;
                b = rest;
            }
            mdcValue = a;
        }
        return (int) absoluteValue(mdcValue);
    }

    /**
     * Calculate the lcm of the specified values.
     *
     * @param valuesToCalculate The values to calculate the lcm.
     * @return The lcm of the specified values.
     */
    public static int lcm(List<Integer> valuesToCalculate) {
        int lcmValue = valuesToCalculate.getFirst();
        for (int i = 1; i < valuesToCalculate.size(); i++) {
            int a = lcmValue;
            int b = valuesToCalculate.get(i);
            int rest;
            while (b != 0) {
                rest = a % b;
                a = b;
                b = rest;
            }
            lcmValue = (lcmValue * valuesToCalculate.get(i)) / a;
        }
        return (int) absoluteValue(lcmValue);
    }


    /**
     * Calculate the discriminant of a quadratic equation.
     * The discriminant is the value of the expression b² - 4ac.
     * If the discriminant is greater than zero, the equation has two real roots.
     * If the discriminant is equal to zero, the equation has one real root.
     * If the discriminant is less than zero, the equation has no real roots.
     */
    public static double quadraticEquationDiscriminant(double valueA, double valueB, double valueC) {
        return Math.pow(valueB, 2) - 4 * valueA * valueC;
    }

    /**
     * Calculate the roots of a linear equation.
     * The linear equation is represented by the expression Ax + B = 0.
     * The root of a linear equation is given by the expression x = -B / A.
     */
    public static LinearEquationResult linearEquation(double valueA, double valueB) {
        if (valueA == 0) {
            throw new IllegalArgumentException("The number A must be different from zero");
        }

        final double result = valueB / valueA;

        return new LinearEquationResult(result, "The result of the linear equation is: " + result);
    }

    /**
     * Calculate the roots of a quadratic equation.
     * The quadratic equation is represented by the expression Ax² + Bx + C = 0.
     * The roots of a quadratic equation are given by the expressions x = (-B + √Δ) / 2A and x = (-B - √Δ) / 2A.
     * Where Δ is the discriminant of the quadratic equation.
     */
    public static QuadraticEquationResult quadraticEquation(double valueA, double valueB, double valueC) {
        QuadraticEquationResult result; // The result of the quadratic equation

        if (valueA == 0 && valueB == 0) {
            throw new IllegalArgumentException("The number A and B cannot be zero at the same time");
        }

        final double delta = quadraticEquationDiscriminant(valueA, valueB, valueC);

        if (delta < 0) {
            throw new IllegalArgumentException("The delta is negative, so the equation has no real roots");
        }

        if (valueA == 0) {
            throw new IllegalArgumentException("If A is zero, it is not a quadratic equation. It is a linear equation.");
        }

        final double x1 = (-valueB + Math.sqrt(delta)) / (2 * valueA);
        final double x2 = (-valueB - Math.sqrt(delta)) / (2 * valueA);

        if (delta == 0) {
            result = new QuadraticEquationResult(x1, x2, "The result of the quadratic equation is: " + x1);
        } else {
            result = new QuadraticEquationResult(x1, x2, "The results of the quadratic equation are: " + x1 + " and " + x2);
        }

        return result;
    }

    /**
     * Calculate the roots of a cubic equation.
     * The cubic equation is represented by the expression Ax³ + Bx² + Cx + D = 0.
     * The roots of a cubic equation are given by the expressions x = -B / 3A and x = (-B ± √Δ) / 3A.
     * Where Δ is the discriminant of the cubic equation.
     */
    public static CubicEquationResult cubicEquation(double valueA, double valueB, double valueC, double valueD) {
        CubicEquationResult result; // The result of the cubic equation
        if (valueD == 0) {
            final double x1 = 0;

            final double delta = quadraticEquationDiscriminant(valueA, valueB, valueC);

            final QuadraticEquationResult quadraticResult = quadraticEquation(valueA, valueB, valueC);

            if (delta < 0) {
                result = new CubicEquationResult(x1, x1, x1, "It has only 1 real root in x = 0");
            } else {
                double answer1 = quadraticResult.valueX1;
                double answer2 = quadraticResult.valueX2;

                if (answer1 == answer2) {
                    result = new CubicEquationResult(x1, answer1, answer2, "It has two real roots x1 = 0 and x2 = " + answer1);
                } else {
                    result = new CubicEquationResult(x1, answer1, answer2, String.format("x1 = %f and x2 = %f and x3 = %f", x1, answer1, answer2));
                }
            }
        } else {
            List<Integer> possibleRoots = generatePossibleRoots(valueD);

            List<Integer> roots = new ArrayList<>();

            for (Integer test : possibleRoots) {
                double firstRoot = valueA * Math.pow(test, 3) + valueB * Math.pow(test, 2) + valueC * test + valueD;
                if (firstRoot == 0) {
                    roots.add(test);
                }
            }

            if (roots.isEmpty()) {
                result = newtonMethodForCubicEquation(valueA, valueB, valueC, valueD);
            } else {
                result = brioRuffiniForCubicEquation(valueA, valueB, valueC, valueD, roots);
            }
        }
        return result;
    }

    /**
     * Returns an error when at least one number is needed.
     * @throws IllegalArgumentException At least one number must be provided.
     */
    private static void atLeastOneNumberNeededError() {
        throw new IllegalArgumentException("At least one number must be provided");
    }

    /**
     * Calculate the sum of the specified numbers.
     * @param numbers The numbers to calculate the sum.
     * @return The sum of the specified numbers.
     */
    public static double sum(int... numbers) {
        if (numbers.length == 0) {
            atLeastOneNumberNeededError();
        }

        double result = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            result += numbers[i];
        }
        return result;
    }

    /**
     * Calculate the subtraction of the specified numbers.
     * @param numbers The numbers to calculate the subtraction.
     * @return The subtraction of the specified numbers.
     */
    public static double subtract(int... numbers) {
        if (numbers.length == 0) {
            atLeastOneNumberNeededError();
        }

        double result = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            result -= numbers[i];
        }
        return result;
    }

    /**
     * Calculate the multiplication of the specified numbers.
     * @param numbers The numbers to calculate the multiplication.
     * @return The multiplication of the specified numbers.
     */
    public static double multiply(int... numbers) {
        if (numbers.length == 0) {
            atLeastOneNumberNeededError();
        }

        double result = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            result *= numbers[i];
        }
        return result;
    }

    /**
     * Calculate the division of the specified numbers.
     * @param numbers The numbers to calculate the division.
     * @return The division of the specified numbers.
     */
    public static double divide(int... numbers) {
        if (numbers.length == 0) {
            atLeastOneNumberNeededError();
        }

        double result = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] == 0) {
                throw new ArithmeticException("Cannot divide by zero");
            }
            result /= numbers[i];
        }
        return result;
    }
}

