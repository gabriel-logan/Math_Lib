package io.loganmatic;
public class CubicEquationResult {
    public double valueX1;
    public double valueX2;

    public double valueX3;
    public String msg;
    public CubicEquationResult(double valueX1, double valueX2, double valueX3, String msg) {
        this.valueX1 = valueX1;
        this.valueX2 = valueX2;
        this.valueX3 = valueX3;
        this.msg = msg;
    }
}
