import time

class Calculadora:
    def __init__(self):
        def crie_euler_number() -> float:
            n: int = 99
            inicio_somatorio: int = 0
            valor_vasio: float = 0

            for k in range(inicio_somatorio, n + 1):
                serie: float = ((1 ** k)) / (self.fatorial(k))
                valor_vasio += serie
            return valor_vasio

        self.NumeroEuler: float = crie_euler_number()

        self.Pi: float = 3.1415926535897932384626433832795
    
    @classmethod
    def modulo(cls, numero: float) -> float:
        if numero < 0:
            return -numero  # Retorna o valor negativo como positivo
        else:
            return numero  # Retorna o valor positivo como é


    @classmethod
    def fatorial(cls, valor_para_calcular: float) -> float:
        # Se o valor é zero, o fatorial é 1
        if valor_para_calcular == 0:
            return 1

        resultado: int = 1
        # Itera sobre os números menores ou iguais ao valor para calcular o fatorial
        for i in range(1, valor_para_calcular + 1):
            resultado *= i

        # Retorna o resultado do fatorial
        return resultado

    @classmethod
    def raizQuadrada(cls, valor_para_calcular: float) -> float:
        return valor_para_calcular ** (1 / 2)
    
    @classmethod
    def raizCubica(cls, valor_para_calcular: float) -> float:
        return valor_para_calcular ** (1 / 3)
    
    @classmethod
    def fatorar(cls, valor_para_calcular: int) -> int:
    # Se o valor não é um número, retorna uma mensagem de erro
        if not isinstance(valor_para_calcular, (int, float)):
            return print('Isso não é um número inteiro')

        A = []

        # Encontra os fatores do número
        for y in range(2, int(valor_para_calcular)):
            while valor_para_calcular % y == 0:
                valor_para_calcular /= y
                A.append(y)

        # Se o array está vazio, significa que o número é primo e ele é adicionado ao array
        if len(A) == 0:
            A.append(int(valor_para_calcular))

        # Retorna o array com os fatores
        return A

    @classmethod
    def seno(cls, valor_para_calcular: float) -> float:
        # Valor da variável X se tiver
        if Calculadora.modulo(valor_para_calcular) > 5 and Calculadora.modulo(valor_para_calcular) <= 30:
            n = 100  # Valor An para soma parcial
        elif Calculadora.modulo(valor_para_calcular) > 30:
            n = 40  # Valor An para soma parcial
        else:
            n = 200  # Valor An para soma parcial
        
        inicio_somatorio = 0  # Valor inicial do somatório
        valor_vazio = 0
        
        for k in range(inicio_somatorio, n + 1):
            serie = (((-1) ** k) * (valor_para_calcular ** (2 * k + 1))) / Calculadora.fatorial(2 * k + 1)
            valor_vazio += serie  # Soma a série de acordo com o valor de n
        
        if Calculadora.modulo(valor_vazio) < 0.00000001:
            return 0
        else:
            return valor_vazio  # Retorna a soma parcial da série
         
    @classmethod    
    def cosseno(cls, valor_para_calcular: float) -> float:
        if Calculadora.modulo(valor_para_calcular) > 5.0 and Calculadora.modulo(valor_para_calcular) <= 30.0:
            n = 100 # Valor An para soma parcial
        elif Calculadora.modulo(valor_para_calcular) > 30:
            n = 40 # Valor An para soma parcial
        else:
            n = 200 # Valor An para soma parcial

        inicioSomatorio = 0 # Valor inicial do somatorio
        valorVasio = 0
        for k in range(inicioSomatorio, n+1):
            serie = ((-1)**k)*(valor_para_calcular**(2*k))/((Calculadora.fatorial(2*k)))
            valorVasio += serie # Soma a serie de acordo com o valor de n

        if Calculadora.modulo(valorVasio) < 0.00000001:
            return 0
        else:
            return valorVasio # Retorna a soma parcial da serie

    @classmethod    
    def numero_aleatorio_entre(cls, minimo: float, maximo: float) -> float:
        #Obter a data e hora atual em segundos
        tempo_em_segundos = int(time.time())

        # Usar o tempo atual como semente do gerador de números aleatórios
        # (o número 2147483647 é o maior número inteiro que pode ser representado com 32 bits)
        semente = (tempo_em_segundos * 16807) % 2147483647

        # Calcular o número aleatório a partir da semente
        numero_aleatorio = minimo + (semente % (maximo - minimo + 1))

        return numero_aleatorio
    
    
    @classmethod
    def raiz_de_primeiro_grau(cls, a, b):
        numero_a = float(a)
        numero_b = float(b)

        if numero_a == 0:
            return f"Esta equação é uma constante de valor = {numero_b}"
        else:
            raiz = -numero_b / numero_a
            return raiz


    @classmethod
    def raizDeSegundoGrau(cls, a, b, c):
        numeroA = float(a)
        numeroB = float(b)
        numeroC = float(c)

        if numeroA == 0 and numeroB == 0:
            return f"Esta equação é uma constante de valor = {numeroC}"
        else:
            delta = numeroB**2 - 4*numeroA*numeroC
            if delta < 0:
                return "Não possui raízes reais"
            elif delta == 0:
                raiz1 = -numeroB/(2*numeroA)
                return [raiz1, "Possui apenas 1 raiz real"]
            else:
                raiz1 = (-numeroB + Calculadora.raizQuadrada(delta))/(2*numeroA)
                raiz2 = (-numeroB - Calculadora.raizQuadrada(delta))/(2*numeroA)
                return [raiz1, raiz2]





# Cria uma instância da classe Calculadora
start_calculadora: Calculadora = Calculadora()
