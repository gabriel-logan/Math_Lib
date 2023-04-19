from loganmatic import Calculadora

minha_calculadora = Calculadora()
print(minha_calculadora.NumeroEuler)
print(minha_calculadora.fatorar(100))
print(minha_calculadora.Pi)
print(minha_calculadora.modulo(-4))
print(minha_calculadora.fatorial(4))
print(minha_calculadora.raiz_de_primeiro_grau(2, 1))
print(minha_calculadora.raizDeSegundoGrau(1,2,-3))
print(minha_calculadora.raizCubica(8))
print(minha_calculadora.raizQuadrada(9))
print(minha_calculadora.numero_aleatorio_entre(10, 20))

# Essas duas ultimas estão com problema para valores float... 
print(minha_calculadora.cosseno(0))
print(minha_calculadora.seno(0))
