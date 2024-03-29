"use strict";
var valorPi = "3.1415926535897932384626433832795";
var Calculadora = (function () {
    function Calculadora() {
        this.NumeroEuler = this.crieEulerNumber();
        this.Pi = parseFloat(valorPi);
    }
    Calculadora.prototype.crieEulerNumber = function (n) {
        if (n === void 0) { n = 9999; }
        var inicioSomatorio = 0;
        var valorVasio = 0;
        for (var k = inicioSomatorio; k < n + 1; k++) {
            var serie = Math.pow(1, k) / this.fatorial(k);
            valorVasio += serie;
        }
        return valorVasio;
    };
    Calculadora.prototype.metodoDeNewton = function (valorA, valorB, valorC, valorD, checkedSim) {
        var valorADerivado = valorA * 3;
        var valorBDerivado = valorB * 2;
        var valorCDerivado = valorC * 1;
        var delta = Math.pow(valorBDerivado, 2) - 4 * valorADerivado * valorCDerivado;
        var resposta1 = (-valorBDerivado + Math.pow(delta, (1 / 2))) / (2 * valorADerivado);
        var resposta2 = (-valorBDerivado - Math.pow(delta, (1 / 2))) / (2 * valorADerivado);
        var pontoCritico1 = resposta1 * 1000;
        var pontoCritico2 = resposta2 * 1000;
        if (resposta1 < 0 && resposta2 < 0) {
            pontoCritico1 = pontoCritico2 * -1;
        }
        else if (resposta1 > 0 && resposta2 > 0) {
            pontoCritico1 = pontoCritico2 * -1;
        }
        function geraIntervaloPontoCritico(min, max) {
            return Math.random() * (max - min + 1) + min;
        }
        var pontoCritico3;
        if (resposta1 > resposta2) {
            if (Number(resposta1) - Number(resposta2) > 1) {
                pontoCritico3 = geraIntervaloPontoCritico(Math.ceil(Number(resposta2) + 0.2), Number(resposta1));
            }
            else {
                pontoCritico3 = geraIntervaloPontoCritico(Number(resposta2) + 0.2, Number(resposta1));
            }
        }
        else {
            if (Number(resposta2) - Number(resposta1) > 1) {
                pontoCritico3 = geraIntervaloPontoCritico(Math.ceil(Number(resposta1) + 0.2), Number(resposta2));
            }
            else {
                pontoCritico3 = geraIntervaloPontoCritico(Number(resposta1) + 0.2, Number(resposta2));
            }
        }
        if (delta < 0) {
            pontoCritico1 = -10000;
            pontoCritico2 = 9000;
        }
        var primeiraRaizCritica = [];
        var iteracoes = 100000;
        for (var index = 0; index < iteracoes; index++) {
            pontoCritico1 =
                pontoCritico1 -
                    (Number(valorA) * Math.pow(pontoCritico1, 3) +
                        Number(valorB) * Math.pow(pontoCritico1, 2) +
                        Number(valorC) * pontoCritico1 +
                        Number(valorD)) /
                        (Number(valorADerivado) * Math.pow(pontoCritico1, 2) +
                            Number(valorBDerivado) * pontoCritico1 +
                            Number(valorCDerivado));
            var valorDaFuncao1 = (Number(valorA) * Math.pow(pontoCritico1, 3) +
                Number(valorB) * Math.pow(pontoCritico1, 2) +
                Number(valorC) * pontoCritico1 +
                Number(valorD)).toFixed(10);
            pontoCritico2 =
                pontoCritico2 -
                    (Number(valorA) * Math.pow(pontoCritico2, 3) +
                        Number(valorB) * Math.pow(pontoCritico2, 2) +
                        Number(valorC) * pontoCritico2 +
                        Number(valorD)) /
                        (Number(valorADerivado) * Math.pow(pontoCritico2, 2) +
                            Number(valorBDerivado) * pontoCritico2 +
                            Number(valorCDerivado));
            var valorDaFuncao2 = (Number(valorA) * Math.pow(pontoCritico2, 3) +
                Number(valorB) * Math.pow(pontoCritico2, 2) +
                Number(valorC) * pontoCritico2 +
                Number(valorD)).toFixed(10);
            pontoCritico3 =
                pontoCritico3 -
                    (Number(valorA) * Math.pow(pontoCritico3, 3) +
                        Number(valorB) * Math.pow(pontoCritico3, 2) +
                        Number(valorC) * pontoCritico3 +
                        Number(valorD)) /
                        (Number(valorADerivado) * Math.pow(pontoCritico3, 2) +
                            Number(valorBDerivado) * pontoCritico3 +
                            Number(valorCDerivado));
            if (parseFloat(valorDaFuncao1) === 0.0 &&
                parseFloat(valorDaFuncao2) === 0.0) {
                primeiraRaizCritica.push(pontoCritico1, pontoCritico2, pontoCritico3);
                break;
            }
        }
        if (primeiraRaizCritica[0].toFixed(7) == primeiraRaizCritica[1].toFixed(7)) {
            if (checkedSim) {
                return "Possui apenas 1 raiz real em X = ".concat(primeiraRaizCritica[0].toFixed(4));
            }
            else {
                return "Possui apenas 1 raiz real em X = ".concat(primeiraRaizCritica[0]);
            }
        }
        else if (primeiraRaizCritica[0].toFixed(4) == primeiraRaizCritica[2].toFixed(4)) {
            this.metodoDeNewton(valorA, valorB, valorC, valorD, checkedSim);
        }
        else if (primeiraRaizCritica[1].toFixed(4) == primeiraRaizCritica[2].toFixed(4)) {
            this.metodoDeNewton(valorA, valorB, valorC, valorD, checkedSim);
        }
        else {
            if (checkedSim) {
                return "X1 \u2245 ".concat(primeiraRaizCritica[0].toFixed(4), ", X2 \u2245 ").concat(primeiraRaizCritica[1].toFixed(4), ", X3 \u2245 ").concat(primeiraRaizCritica[2].toFixed(4));
            }
            else {
                return "X1 \u2245 ".concat(primeiraRaizCritica[0], ", X2 \u2245 ").concat(primeiraRaizCritica[1], ", X3 \u2245 ").concat(primeiraRaizCritica[2]);
            }
        }
        return "X1 = ".concat(primeiraRaizCritica[0]);
    };
    Calculadora.prototype.dispositivoBrioRufinho = function (valorA, valorB, valorC, valorD, raizes, checkedSim) {
        var primeiro = valorA * raizes[0];
        var segundoCoeficiente = Number(primeiro) + Number(valorB);
        var segundo = segundoCoeficiente * raizes[0];
        var terceiroCoeficiente = Number(segundo) + Number(valorC);
        var terceiro = terceiroCoeficiente * raizes[0];
        var quartoCoeficiente = Number(terceiro) + Number(valorD);
        if (quartoCoeficiente == 0) {
            var delta = Math.pow(segundoCoeficiente, 2) - 4 * valorA * terceiroCoeficiente;
            if (delta < 0) {
                return "Possui apenas 1 raiz real em X = ".concat(raizes[0]);
            }
            else {
                var resposta1 = (-segundoCoeficiente + Math.pow(delta, (1 / 2))) / (2 * valorA);
                var resposta2 = (-segundoCoeficiente - Math.pow(delta, (1 / 2))) / (2 * valorA);
                if (delta === 0) {
                    if (resposta1 == raizes[0]) {
                        return "O valor de X1 = 0 | X1 = X2 = X3";
                    }
                    else {
                        if (checkedSim) {
                            return "O valor de X1 = 0 e X2 \u00E9 igual a: ".concat(resposta1.toFixed(2), " | X2 = X3");
                        }
                        else {
                            return "O valor de X1 = 0 e X2 \u00E9 igual a: ".concat(resposta1, " | X2 = X3");
                        }
                    }
                }
                else {
                    if (resposta1 == raizes[0]) {
                        if (checkedSim) {
                            return "O valor de X1 = ".concat(raizes[0], " e X2 = ").concat(resposta2.toFixed(2), " | X1 = X3");
                        }
                        else {
                            return "O valor de X1 = ".concat(raizes[0], " e X2 = ").concat(resposta2, " | X1 = X3");
                        }
                    }
                    else if (resposta2 == raizes[0]) {
                        if (checkedSim) {
                            return "O valor de X1 = ".concat(raizes[0], " e X2 \u00E9 igual a: ").concat(resposta1.toFixed(2), " | X1 = X3");
                        }
                        else {
                            return "O valor de X1 = ".concat(raizes[0], " e X2 \u00E9 igual a: ").concat(resposta1, " | X1 = X3");
                        }
                    }
                    else {
                        if (checkedSim) {
                            return "O valor de X1 = ".concat(raizes[0], ", X2 \u00E9 igual a: ").concat(resposta1.toFixed(2), " e O valor de X3 \u00E9 igual a: ").concat(resposta2.toFixed(2));
                        }
                        else {
                            return "O valor de X1 = ".concat(raizes[0], ", X2 \u00E9 igual a: ").concat(resposta1, " e O valor de X3 \u00E9 igual a: ").concat(resposta2);
                        }
                    }
                }
            }
        }
        else if (quartoCoeficiente != 0) {
            return this.metodoDeNewton(valorA, valorB, valorC, valorD, checkedSim);
        }
        else {
            return "Vish, não sei oque rolou HEHEHE";
        }
    };
    Calculadora.prototype.modulo = function (numero) {
        if (numero < 0) {
            return -numero;
        }
        else {
            return numero;
        }
    };
    Calculadora.prototype.fatorial = function (valorParaCalcular) {
        if (valorParaCalcular === 0) {
            return 1;
        }
        var resultado = 1;
        for (var i = 1; i <= valorParaCalcular; i++) {
            resultado *= i;
        }
        return resultado;
    };
    Calculadora.prototype.raizQuadrada = function (valorParaCalcular) {
        return Math.pow(valorParaCalcular, (1 / 2));
    };
    Calculadora.prototype.raizCubica = function (valorParaCalcular) {
        return Math.pow(valorParaCalcular, (1 / 3));
    };
    Calculadora.prototype.fatorar = function (valorParaCalcular) {
        if (typeof valorParaCalcular !== "number") {
            return console.log("Isso não é um numero inteiro");
        }
        var numerosFatorados = [];
        for (var y = 2; y < valorParaCalcular; y++) {
            while (valorParaCalcular % y === 0) {
                valorParaCalcular /= y;
                numerosFatorados.push(y);
            }
        }
        if (numerosFatorados.length === 0) {
            numerosFatorados.push(valorParaCalcular);
        }
        return numerosFatorados;
    };
    Calculadora.prototype.seno = function (valorParaCalcular) {
        var n;
        if (this.modulo(valorParaCalcular) > 5 &&
            this.modulo(valorParaCalcular) <= 30) {
            n = 100;
        }
        else if (this.modulo(valorParaCalcular) > 30) {
            n = 40;
        }
        else {
            n = 200;
        }
        var inicioSomatorio = 0;
        var valorVasio = 0;
        for (var k = inicioSomatorio; k < n + 1; k++) {
            var serie = (Math.pow((-1), k) * Math.pow(valorParaCalcular, (2 * k + 1))) /
                this.fatorial(2 * k + 1);
            valorVasio += serie;
        }
        if (this.modulo(valorVasio) < 0.00000001) {
            return 0;
        }
        else {
            return valorVasio;
        }
    };
    Calculadora.prototype.cosseno = function (valorParaCalcular) {
        var n;
        if (this.modulo(valorParaCalcular) > 5 &&
            this.modulo(valorParaCalcular) <= 30) {
            n = 100;
        }
        else if (this.modulo(valorParaCalcular) > 30) {
            n = 40;
        }
        else {
            n = 200;
        }
        var inicioSomatorio = 0;
        var valorVasio = 0;
        for (var k = inicioSomatorio; k < n + 1; k++) {
            var serie = (Math.pow((-1), k) * Math.pow(valorParaCalcular, (2 * k))) / this.fatorial(2 * k);
            valorVasio += serie;
        }
        if (this.modulo(valorVasio) < 0.00000001) {
            return 0;
        }
        else {
            return valorVasio;
        }
    };
    Calculadora.prototype.numeroAleatorioEntre = function (min, max) {
        var timestamp = Date.now();
        return min + (timestamp % (max - min + 1));
    };
    Calculadora.prototype.raizDePrimeiroGrau = function (a, b) {
        var numeroA = Number(a);
        var numeroB = Number(b);
        if (numeroA === 0) {
            return "Esta equa\u00E7\u00E3o \u00E9 uma constante de valor = ".concat(numeroB);
        }
        else {
            var raiz = -numeroB / numeroA;
            return raiz;
        }
    };
    Calculadora.prototype.raizDeSegundoGrau = function (a, b, c) {
        var numeroA = Number(a);
        var numeroB = Number(b);
        var numeroC = Number(c);
        if (Math.pow(numeroB, 2) - 4 * numeroA * numeroC < 0)
            return "Não possui raizes reais";
        if (numeroA === 0 && numeroB === 0) {
            return "Esta equa\u00E7\u00E3o \u00E9 uma constante de valor = ".concat(numeroC);
        }
        else {
            var raiz1 = (-numeroB + this.raizQuadrada(Math.pow(b, 2) - 4 * numeroA * numeroC)) /
                (2 * numeroA);
            var raiz2 = (-numeroB - this.raizQuadrada(Math.pow(b, 2) - 4 * numeroA * numeroC)) /
                (2 * numeroA);
            if (raiz1 === raiz2) {
                return [raiz1, "Possui apenas 1 raiz real"];
            }
            else {
                return [raiz1, raiz2];
            }
        }
    };
    Calculadora.prototype.raizDeTerceiroGrau = function (a, b, c, d, aproxima) {
        if (a === void 0) { a = 0; }
        if (b === void 0) { b = 0; }
        if (c === void 0) { c = 0; }
        if (d === void 0) { d = 0; }
        if (aproxima === void 0) { aproxima = false; }
        var checkedSim = aproxima;
        var valorA = Number(a);
        var valorB = Number(b);
        var valorC = Number(c);
        var valorD = Number(d);
        if (valorD == 0) {
            var x1 = 0;
            var delta = Math.pow(valorB, 2) - 4 * valorA * valorC;
            if (delta < 0) {
                return "Possui apenas 1 raiz real em X = 0";
            }
            else {
                var resposta1 = (-valorB + Math.pow(delta, (1 / 2))) / (2 * valorA);
                var resposta2 = (-valorB - Math.pow(delta, (1 / 2))) / (2 * valorA);
                if (delta === 0) {
                    if (resposta1 == x1) {
                        return "O valor de X1 = 0 | X1 = X2 = X3";
                    }
                    else {
                        if (checkedSim) {
                            return "O valor de X1 = 0 e X2 \u00E9 igual a: ".concat(resposta1.toFixed(2), " | X2 = X3");
                        }
                        else {
                            return "O valor de X1 = 0 e X2 \u00E9 igual a: ".concat(resposta1, " | X2 = X3");
                        }
                    }
                }
                else {
                    if (resposta1 == x1) {
                        if (checkedSim) {
                            return "O valor de X1 = 0 e X2 = ".concat(resposta2.toFixed(2), " | X1 = X3");
                        }
                        else {
                            return "O valor de X1 = 0 e X2 = ".concat(resposta2, " | X1 = X3");
                        }
                    }
                    else if (resposta2 == x1) {
                        if (checkedSim) {
                            return "O valor de X1 = 0 e X2 \u00E9 igual a: ".concat(resposta1.toFixed(2), " | X1 = X3");
                        }
                        else {
                            return "O valor de X1 = 0 e X2 \u00E9 igual a: ".concat(resposta1, " | X1 = X3");
                        }
                    }
                    else {
                        if (checkedSim) {
                            return "O valor de X1 = 0, X2 \u00E9 igual a: ".concat(resposta1.toFixed(2), " e O valor de X3 \u00E9 igual a: ").concat(resposta2.toFixed(2));
                        }
                        else {
                            return "O valor de X1 = 0, X2 \u00E9 igual a: ".concat(resposta1, " e O valor de X3 \u00E9 igual a: ").concat(resposta2);
                        }
                    }
                }
            }
        }
        else {
            var possiveisRaizes = [];
            if (valorD > 0) {
                for (var index = 1; index < Number(valorD) + 1; index++) {
                    var isInteger = valorD % index;
                    if (isInteger == 0) {
                        possiveisRaizes.push(index);
                        possiveisRaizes.push(-index);
                    }
                }
            }
            else {
                for (var index = -1; index > Number(valorD) - 1; index--) {
                    var isInteger = valorD % index;
                    if (isInteger == 0) {
                        possiveisRaizes.push(index);
                        possiveisRaizes.push(-index);
                    }
                }
            }
            var raizes_1 = [];
            possiveisRaizes.forEach(function (test) {
                var primeiraRaiz = Number(valorA) * Math.pow(test, 3) +
                    Number(valorB) * Math.pow(test, 2) +
                    Number(valorC) * test +
                    Number(valorD);
                if (primeiraRaiz == 0) {
                    raizes_1.push(test);
                }
            });
            if (raizes_1.length === 0) {
                return this.metodoDeNewton(valorA, valorB, valorC, valorD, checkedSim);
            }
            return this.dispositivoBrioRufinho(valorA, valorB, valorC, valorD, raizes_1, checkedSim);
        }
    };
    return Calculadora;
}());
module.exports = new Calculadora();
