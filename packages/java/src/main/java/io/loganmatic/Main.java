package io.loganmatic;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Sum: " + Main.add(3, 2));
    }

    public static int add(int a, int b) {
        int sum = a + b;
        return sum;
    }
}