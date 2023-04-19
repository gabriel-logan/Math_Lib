# Math_Lib
Biblioteca pessoal criada em JavaScript e Python para uso comum. Em desenvolvimento... 

###################################################################

** !! JAVASCRIPT !! **

para usar como pacote NPM so usar **npm i loganmatic**

e para importar utilize **import Matematica from "loganmatic.js"**

depois somente utilizar 

console.log(Matematica.NumeroEuler) 
console.log(Matematica.fatorar(100))

Se for baixar o arquivo use: 

**const Matematica = require("loganmatic.js")** se o arquivo estiver no mesmo diretorio

Se acharem erros no codigo, me enviem por favor, será de grande ajuda !!!

exemplo de uso: **console.log(Matematica.fatorial(4))**

console.log(Matematica.NumeroEuler) 
console.log(Matematica.fatorar(100))
console.log(Matematica.Pi)
console.log(Matematica.modulo(-4))
console.log(Matematica.fatorial(4))
console.log(Matematica.raizDePrimeiroGrau(2, 1))
console.log(Matematica.raizDeSegundoGrau(1,2,-3))
console.log(Matematica.raizCubica(8))
console.log(Matematica.raizQuadrada(9))
console.log(Matematica.numeroAleatorioEntre(10, 20)) 
console.log(Matematica.cosseno(0))
console.log(Matematica.seno(Matematica.Pi))

retorna: 

2.7182818284590455
[ 2, 2, 5, 5 ]
3.141592653589793
4
24
-0.5
[ 1, -3 ]
2
3
17
1
0

###################################################################

** !! PYTHON !! **

para usar como pacote PIP so usar **pip install loganmatic**

e para importar utilize **from loganmatic import Calculadora**

depois **Matematica = Calculadora()**

depois somente utilizar 

print(Matematica.NumeroEuler)
print(Matematica.fatorar(100))
print(Matematica.Pi)
print(Matematica.modulo(-4))
print(Matematica.fatorial(4))
print(Matematica.raiz_de_primeiro_grau(2, 1))
print(Matematica.raizDeSegundoGrau(1,2,-3))
print(Matematica.raizCubica(8))
print(Matematica.raizQuadrada(9))
print(Matematica.numero_aleatorio_entre(10, 20))

# Essas duas ultimas estão com problema para valores float... 
print(Matematica.cosseno(0))
print(Matematica.seno(0))

retorna: 

2.7182818284590455
[2, 2, 5, 5]
3.141592653589793
4
24
-0.5
[1.0, -3.0]
2.0
3.0
11
1.0
0

########################################################

A biblioteca calcula (atualmente) o valor de PI e do Numero de Euler ||
Calcula Funções: Seno, Cosseno ||
fatora um numero || 
calcula o fatorial de um numero || 
o modulo || 
gera um numero aleatorio entre 2 numeros || 
calcula raizes cubicas e quadrada e calcula as raizes de equações de primeiro e segundo grau

Feito por **Gabriel Lima**
