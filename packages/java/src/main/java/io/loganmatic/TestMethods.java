package io.loganmatic;

import java.util.Arrays;
import java.util.List;

import static java.lang.System.*;

public class TestMethods {
    public static void main(String[] args) {
        out.println("Hello, World! This is a test of the methods in the Main class. \n");

        // Call the method
        out.println("EulerNumber: " + Main.getEulerNumber());
        out.println("Pi: " + Main.getPi());

        // Testing the methods
        out.println("Factorial of 5: " + Main.factorial(5));
        out.println("Square root of 16: " + Main.squareRoot(16));
        out.println("Cubic root of 27: " + Main.cubicRoot(27));
        out.println("Sine of 30: " + Main.sine(30)); // Some problems with the trigonometric functions
        out.println("Cosine of 60: " + Main.cosine(60));
        out.println("Tangent of 45: " + Main.tangent(45));
        out.println("Cotangent of 45: " + Main.cotangent(45));
        out.println("Secant of 60: " + Main.secant(60));
        out.println("Cosecant of 30: " + Main.cosecant(30));
        out.println("Absolute value of -10: " + Main.absoluteValue(-10));

        List<Integer> values = Arrays.asList(12, 18);
        out.println("GCD of 12 and 18: " + Main.gcd(values));
        out.println("LCM of 12 and 18: " + Main.lcm(values));

        out.println("Random number between 1 and 10: " + Main.randomNumberBetween(1, 10));

        // Testing the equations
        out.println("Linear equation result: " + Main.linearEquation(2, 3).msg);
        out.println("Quadratic equation result: " + Main.quadraticEquation(1, -3, 2).msg);
        out.println("Cubic equation result: " + Main.cubicEquation(1, -6, 11, -6).msg);
    }
}
