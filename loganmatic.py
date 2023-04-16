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

    def fatorial(self, valor_para_calcular: int) -> int:
        # Se o valor é zero, o fatorial é 1
        if valor_para_calcular == 0:
            return 1

        resultado: int = 1
        # Itera sobre os números menores ou iguais ao valor para calcular o fatorial
        for i in range(1, valor_para_calcular + 1):
            resultado *= i

        # Retorna o resultado do fatorial
        return resultado


# Cria uma instância da classe Calculadora
start_calculadora: Calculadora = Calculadora()
