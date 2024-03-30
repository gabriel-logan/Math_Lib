package io.loganmatic;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Euler number: " + Main.createEulerNumber(9999));
        System.out.println("By lib: " + Math.E);
        System.out.println("Value is: " + (Math.E == Main.createEulerNumber(9999)));
        System.out.println("Mine has 1 decimal place more than the library one. (: ");
        System.out.println("Absolute value of -5 is: " + Main.absoluteValue(-5));
        System.out.println("Square root of 9 is: " + Main.squareRoot(9));
        System.out.println("Cubic root of -27 is: " + Main.cubicRoot(-27));
    }

    public static double power(double base, double exponent) {
        double result = 1.0;
        for (int i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }

    public static double createEulerNumber(int n) {
        double sum = 0.0;

        for (int k = 0; k < n + 1; k++) {
            double series = Main.power(1, k) / Main.factorial(k);
            sum += series;
        }
        return sum;
    }

    public static double factorial(int valueToCalculate) {
        // If the value is zero, the factorial is 1
        if (valueToCalculate == 0) {
            return 1.0;
        }

        double result = 1.0;
        // Iterates over the numbers less than or equal to the value to calculate the factorial
        for (int i = 1; i <= valueToCalculate; i++) {
            result *= i;
        }

        // Returns the result of the factorial
        return result;
    }

    public static double absoluteValue(double value) {
        if (value < 0.0) {
            return -value;
        }
        return value;
    }

    public static double squareRoot(double valueToCalculate) {
        double epsilon = 0.00001;  // precision
        double guess = valueToCalculate;

        while (absoluteValue(guess - valueToCalculate/guess) > epsilon*guess) {
            guess = (valueToCalculate/guess + guess) / 2.0;
        }

        return guess;
    }

    public static double cubicRoot(double valueToCalculate) {
        double epsilon = 0.00001;  // precision
        double guess = valueToCalculate;

        while (absoluteValue(guess*guess*guess - valueToCalculate) > epsilon) {
            guess = guess - (guess*guess*guess - valueToCalculate) / (3.0 * guess * guess);
        }

        return guess;
    }
}