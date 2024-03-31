"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArithmeticOp = (function () {
    function ArithmeticOp() {
    }
    ArithmeticOp.prototype.sum = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
    };
    ArithmeticOp.prototype.sub = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        return numbers.reduce(function (acc, curr) { return acc - curr; });
    };
    ArithmeticOp.prototype.mul = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        return numbers.reduce(function (acc, curr) { return acc * curr; }, 1);
    };
    ArithmeticOp.prototype.div = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        return numbers.reduce(function (acc, curr) { return acc / curr; });
    };
    ArithmeticOp.prototype.mod = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        return numbers.reduce(function (acc, curr) { return acc % curr; });
    };
    ArithmeticOp.prototype.power = function (base, exponent) {
        var result = 1;
        for (var i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    };
    return ArithmeticOp;
}());
exports.default = ArithmeticOp;
