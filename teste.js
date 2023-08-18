function raizDeTerceiroGrau(a=0, b=0, c=0, d=0, aproxima = false){
    const checkedSim = aproxima;
    const valorA = Number(a)
    const valorB = Number(b)
    const valorC = Number(c)
    const valorD = Number(d)

    if(valorD == 0){  
        const x1 = 0  
        const delta = (valorB**2 - 4 * valorA * valorC)

        if(delta < 0){
            return ('Possui apenas 1 raiz real em X = 0')
        }else{    
            const resposta1 = (-valorB + (delta**(1/2))) / (2*valorA)
            const resposta2 = (-valorB - (delta**(1/2))) / (2*valorA)

            if(delta === 0){
                if(resposta1 == x1){
                    return (`O valor de X1 = 0 | X1 = X2 = X3`)
                }else{
                    if(checkedSim){
                        return (`O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X2 = X3`)
                    }else{
                        return (`O valor de X1 = 0 e X2 é igual a: ${resposta1} | X2 = X3`)
                    }
                }
            }else{
                if(resposta1 == x1){
                    if(checkedSim){
                        return (`O valor de X1 = 0 e X2 = ${resposta2.toFixed(2)} | X1 = X3`)
                    }else{
                        return (`O valor de X1 = 0 e X2 = ${resposta2} | X1 = X3`)
                    }
                }else if(resposta2 == x1){
                    if(checkedSim){
                        return (`O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X1 = X3`)
                    }else{
                        return (`O valor de X1 = 0 e X2 é igual a: ${resposta1} | X1 = X3`)
                    }
                }else{
                    if(checkedSim){
                        return (`O valor de X1 = 0, X2 é igual a: ${resposta1.toFixed(2)} e O valor de X3 é igual a: ${resposta2.toFixed(2)}`)
                    }else{
                        return (`O valor de X1 = 0, X2 é igual a: ${resposta1} e O valor de X3 é igual a: ${resposta2}`)
                    }
                }

            }
        }
    }else{
        const possiveisRaizes = []

        if(valorD>0){                
            for (let index = 1; index < (Number(valorD)+1); index++) {
                const isInteger = valorD % index  
                if(isInteger == 0){
                    possiveisRaizes.push(index)
                    possiveisRaizes.push(-index)
                }
            }
        }else{                
            for (let index = -1; index > (Number(valorD)-1); index--) {
                const isInteger = valorD % index
                if(isInteger == 0){
                    possiveisRaizes.push(index)
                    possiveisRaizes.push(-index)
                }
            }
        }
        const raizes = []
        possiveisRaizes.forEach(test => {
            const primeiraRaiz = Number(valorA)*(test**3) + Number(valorB)*(test**2) + Number(valorC)*(test) + Number(valorD)
            if(primeiraRaiz == 0){
                raizes.push(test)
            }
        });

        function metodoDeNewton(){

            const valorADerivado = valorA*3
            const valorBDerivado = valorB*2
            const valorCDerivado = valorC*1

            const delta = (valorBDerivado**2 - 4 * valorADerivado * valorCDerivado)
    
            const resposta1 = (-valorBDerivado + (delta**(1/2))) / (2*valorADerivado)
            const resposta2 = (-valorBDerivado - (delta**(1/2))) / (2*valorADerivado)
    
            let pontoCritico1 = resposta1*(1000)
            let pontoCritico2 = resposta2*(1000)
    
            if(resposta1 < 0 && resposta2 < 0){
                pontoCritico1 = pontoCritico2*(-1)
            }else if(resposta1 > 0 && resposta2 > 0){
                pontoCritico1 = pontoCritico2*(-1)
            }

            function geraIntervaloPontoCritico(min, max){
                return Math.random() * (max - min + 1) + min
            }

            if(resposta1 > resposta2){
                if((Number(resposta1) - Number(resposta2)) > 1){
                    var pontoCritico3 = geraIntervaloPontoCritico(Math.ceil(Number(resposta2) + 0.2), Number(resposta1))
                }else{
                    var pontoCritico3 = geraIntervaloPontoCritico((Number(resposta2) + 0.2),Number(resposta1))
                }
            }else{
                if((Number(resposta2) - Number(resposta1)) > 1){
                    var pontoCritico3 = geraIntervaloPontoCritico(Math.ceil(Number(resposta1) + 0.2) ,Number(resposta2))
                }else{
                    var pontoCritico3 = geraIntervaloPontoCritico((Number(resposta1) + 0.2),Number(resposta2))
                }
            }

            if(delta < 0){
                pontoCritico1 = -10000
                pontoCritico2 = 9000
            }

    
            const primeiraRaizCritica = []       
    
            const iteracoes = 100000
    
            for (let index = 0; index < iteracoes; index++) {
                pontoCritico1 = pontoCritico1 - (((Number(valorA)*((pontoCritico1)**3)) + (Number(valorB)*((pontoCritico1)**2)) + (Number(valorC)*(pontoCritico1)) + Number(valorD))/((Number(valorADerivado)*((pontoCritico1)**2)) + (Number(valorBDerivado)*(pontoCritico1)) + Number(valorCDerivado)))
    
                const valorDaFuncao1 = ((Number(valorA)*((pontoCritico1)**3)) + (Number(valorB)*((pontoCritico1)**2)) + (Number(valorC)*(pontoCritico1)) + Number(valorD)).toFixed(10)
    
                pontoCritico2 = pontoCritico2 - (((Number(valorA)*((pontoCritico2)**3)) + (Number(valorB)*((pontoCritico2)**2)) + (Number(valorC)*(pontoCritico2)) + Number(valorD))/((Number(valorADerivado)*((pontoCritico2)**2)) + (Number(valorBDerivado)*(pontoCritico2)) + Number(valorCDerivado)))
    
                const valorDaFuncao2 = ((Number(valorA)*((pontoCritico2)**3)) + (Number(valorB)*((pontoCritico2)**2)) + (Number(valorC)*(pontoCritico2)) + Number(valorD)).toFixed(10)
    
                pontoCritico3 = pontoCritico3 - (((Number(valorA)*((pontoCritico3)**3)) + (Number(valorB)*((pontoCritico3)**2)) + (Number(valorC)*(pontoCritico3)) + Number(valorD))/((Number(valorADerivado)*((pontoCritico3)**2)) + (Number(valorBDerivado)*(pontoCritico3)) + Number(valorCDerivado)))
    
                const valorDaFuncao3 = ((Number(valorA)*((pontoCritico3)**3)) + (Number(valorB)*((pontoCritico3)**2)) + (Number(valorC)*(pontoCritico3)) + Number(valorD)).toFixed(10)
    
                if(valorDaFuncao1 == 0.0000000000 && valorDaFuncao2 == 0.0000000000){
                    primeiraRaizCritica.push(pontoCritico1, pontoCritico2, pontoCritico3)
                    break
                }
            }

            if(primeiraRaizCritica[0].toFixed(7) == primeiraRaizCritica[1].toFixed(7)){
                if(checkedSim){
                    return (`Possui apenas 1 raiz real em X = ${primeiraRaizCritica[0].toFixed(4)}`)
                }else{
                    return (`Possui apenas 1 raiz real em X = ${primeiraRaizCritica[0]}`)
                }
            }else if(primeiraRaizCritica[0].toFixed(4) == primeiraRaizCritica[2].toFixed(4)){
                metodoDeNewton()
            }else if(primeiraRaizCritica[1].toFixed(4) == primeiraRaizCritica[2].toFixed(4)){
                metodoDeNewton()
            }else{
                if(checkedSim){
                    return (`X1 ≅ ${primeiraRaizCritica[0].toFixed(4)}, X2 ≅ ${primeiraRaizCritica[1].toFixed(4)}, X3 ≅ ${primeiraRaizCritica[2].toFixed(4)}`)
                }else{
                    return (`X1 ≅ ${primeiraRaizCritica[0]}, X2 ≅ ${primeiraRaizCritica[1]}, X3 ≅ ${primeiraRaizCritica[2]}`)
                }
            }

            return (`X1 = ${primeiraRaizCritica[0]}`)

        }

        if(raizes == ''){
           return metodoDeNewton()
        }

        function dispositivoBrioRufinho(){
            // irei achar os coeficientes de grau 2

            const primeiro =  valorA*raizes[0]

            const segundoCoeficiente = Number(primeiro) + Number(valorB)

            const segundo = segundoCoeficiente*raizes[0]

            const terceiroCoeficiente = Number(segundo) + Number(valorC)

            const terceiro = terceiroCoeficiente*raizes[0]

            const quartoCoeficiente = Number(terceiro) + Number(valorD)

            if(quartoCoeficiente == 0){
                const delta = (segundoCoeficiente**2 - 4 * valorA * terceiroCoeficiente)

                if(delta < 0){
                    return `Possui apenas 1 raiz real em X = ${raizes[0]}`
                }else{                
                    const resposta1 = (-segundoCoeficiente + (delta**(1/2)) ) / (2*valorA)
                    const resposta2 = (-segundoCoeficiente - (delta**(1/2)))/ (2*valorA)

                    if(delta === 0){
                        if(resposta1 == raizes[0]){
                            return (`O valor de X1 = 0 | X1 = X2 = X3`)
                        }else{
                            if(checkedSim){
                                return (`O valor de X1 = 0 e X2 é igual a: ${resposta1.toFixed(2)} | X2 = X3`)
                            }else{
                                return (`O valor de X1 = 0 e X2 é igual a: ${resposta1} | X2 = X3`)
                            }
                        }
            
                    }else{
                        if(resposta1 == raizes[0]){
                            if(checkedSim){
                                return (`O valor de X1 = ${raizes[0]} e X2 = ${resposta2.toFixed(2)} | X1 = X3`)
                            }else{
                                return (`O valor de X1 = ${raizes[0]} e X2 = ${resposta2} | X1 = X3`)
                            }
                        }else if(resposta2 == raizes[0]){
                            if(checkedSim){
                                return (`O valor de X1 = ${raizes[0]} e X2 é igual a: ${resposta1.toFixed(2)} | X1 = X3`)
                            }else{
                                return (`O valor de X1 = ${raizes[0]} e X2 é igual a: ${resposta1} | X1 = X3`)
                            }
                        }else{
                            if(checkedSim){
                                return (`O valor de X1 = ${raizes[0]}, X2 é igual a: ${resposta1.toFixed(2)} e O valor de X3 é igual a: ${resposta2.toFixed(2)}`)
                            }else{
                                return (`O valor de X1 = ${raizes[0]}, X2 é igual a: ${resposta1} e O valor de X3 é igual a: ${resposta2}`)
                            }
                        }
                    }
                }

            }else if(quartoCoeficiente != 0){
                return metodoDeNewton()
            }else{
                return (`Vish, não sei oque rolou HEHEHE`)
            }
        }
        return dispositivoBrioRufinho()
    }
}

console.log(raizDeTerceiroGrau(1, 2, -3, 5))