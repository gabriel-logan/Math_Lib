import time
from decimal import Decimal, getcontext

class Calculator:
    """
    A class that provides various mathematical calculations and constants.
    """
    def __init__(self):
        """
        Initializes an instance of the Calculator class.
        """
        def create_euler_number():
            """
            Helper function to calculate the Euler's number.
            """
            n: int = 99
            start_summation: int = 0
            empty_value = 0

            for k in range(start_summation, n + 1):
                series = ((1 ** k)) / (self.factorial(k))
                empty_value += series
            return empty_value

        self.EulerNumber = create_euler_number()

        self.Pi = 3.1415926535897932384626433832795
    
    @classmethod
    def absoluteValue(cls, number):
        """
        Returns the absolute value of a number.

        Args:
            number (int or float): The number to calculate the absolute value of.

        Returns:
            int or float: The absolute value of the number.
        """
        if number < 0:
            return -number  # Returns the negative value as positive
        else:
            return number  # Returns the positive value as is


    @classmethod
    def factorial(cls, value_to_calculate):
        """
        Calculates the factorial of a given number.

        Args:
            value_to_calculate (int): The number to calculate the factorial of.

        Returns:
            int: The factorial of the given number.
        """
        # If the value is zero, the factorial is 1
        if value_to_calculate == 0:
            return 1

        result: int = 1
        # Iterates over the numbers less than or equal to the value to calculate the factorial
        for i in range(1, value_to_calculate + 1):
            result *= i

        # Returns the result of the factorial
        return result

    @classmethod
    def squareRoot(cls, value_to_calculate):
        """
        Calculates the square root of a given number.

        Args:
            value_to_calculate (int or float): The number to calculate the square root of.

        Returns:
            float: The square root of the given number.
        """
        return value_to_calculate ** (1 / 2)
    
    @classmethod
    def cubicRoot(cls, value_to_calculate):
        """
        Calculates the cubic root of a given number.

        Args:
            value_to_calculate (int or float): The number to calculate the cubic root of.

        Returns:
            float: The cubic root of the given number.
        """
        return value_to_calculate ** (1 / 3)
    
    @classmethod
    def factor(cls, value_to_calculate: int) -> int:
        """
        Finds the factors of a given number.

        Args:
            value_to_calculate (int): The number to find the factors of.

        Returns:
            list: A list of factors of the given number.
        """
        # If the value is not a number, returns an error message
        if not isinstance(value_to_calculate, (int, float)):
            return print('This is not an integer')

        A = []

        # Finds the factors of the number
        for y in range(2, int(value_to_calculate)):
            while value_to_calculate % y == 0:
                A.append(y)
                value_to_calculate = value_to_calculate / y
        if value_to_calculate > 1:
            A.append(value_to_calculate)
        return A

    @classmethod
    def sine(cls, value_to_calculate):
        """
        Calculates the sine of a given angle.

        Args:
            value_to_calculate (int or float): The angle in radians to calculate the sine of.

        Returns:
            float: The sine of the given angle.
        """
        getcontext().prec = 100  # Set the precision of Decimal

        if Calculator.absoluteValue(value_to_calculate) > 5 and Calculator.absoluteValue(value_to_calculate) <= 30:
            n = 100  # Value An for partial sum
        elif Calculator.absoluteValue(value_to_calculate) > 30:
            n = 40  # Value An for partial sum
        else:
            n = 200  # Value An for partial sum
        
        start_summation = 0  # Initial value of the summation
        empty_value = Decimal(0)
        
        for k in range(start_summation, n + 1):
            series = (((-1) ** k) * (Decimal(value_to_calculate) ** (2 * k + 1))) / Calculator.factorial(2 * k + 1)
            empty_value += Decimal(series)  # Adds the series according to the value of n
        
        if Calculator.absoluteValue(empty_value) < Decimal(0.00000001):
            return 0
        else:
            return float(empty_value)  # Returns the partial sum of the series
         
    @classmethod    
    def cosine(cls, value_to_calculate):
        """
        Calculates the cosine of a given angle.

        Args:
            value_to_calculate (int or float): The angle in radians to calculate the cosine of.

        Returns:
            float: The cosine of the given angle.
        """
        getcontext().prec = 100  # Set the precision of Decimal

        if Calculator.absoluteValue(value_to_calculate) > 5.0 and Calculator.absoluteValue(value_to_calculate) <= 30.0:
            n = 100 # Value An for partial sum
        elif Calculator.absoluteValue(value_to_calculate) > 30:
            n = 40 # Value An for partial sum
        else:
            n = 200 # Value An for partial sum

        start_summation = 0 # Initial value of the summation
        empty_value = Decimal(0)
        for k in range(start_summation, n+1):
            series = ((-1)**k)*(Decimal(value_to_calculate)**(2*k))/((Calculator.factorial(2*k)))
            empty_value += Decimal(series) # Adds the series according to the value of n

        if Calculator.absoluteValue(empty_value) < Decimal(0.00000001):
            return 0
        else:
            return float(empty_value) # Returns the partial sum of the series

    @classmethod    
    def random_number_between(cls, minimum, maximum):
        """
        Generates a random number between the given minimum and maximum values.

        Args:
            minimum (int or float): The minimum value of the random number range.
            maximum (int or float): The maximum value of the random number range.

        Returns:
            int or float: A random number between the given minimum and maximum values.
        """
        # Get the current date and time in seconds
        current_time_in_seconds = int(time.time())

        # Use the current time as the seed for the random number generator
        # (the number 2147483647 is the largest integer that can be represented with 32 bits)
        seed = (current_time_in_seconds * 16807) % 2147483647

        # Calculate the random number from the seed
        random_number = minimum + (seed % (maximum - minimum + 1))

        return random_number
    
    
    @classmethod
    def root_of_first_degree(cls, a, b):
        """
        Calculates the root of a linear equation of the form ax + b = 0.

        Args:
            a (int or float): The coefficient of x.
            b (int or float): The constant term.

        Returns:
            tuple: A tuple containing the root of the equation and an error message if applicable.
        """
        number_a = float(a)
        number_b = float(b)

        if number_a == 0:
            return None, "The value of 'a' cannot be zero."
        else:
            root = -number_b / number_a
            return root


    @classmethod
    def root_of_second_degree(cls, a, b, c):
        """
        Calculates the roots of a quadratic equation of the form ax^2 + bx + c = 0.

        Args:
            a (int or float): The coefficient of x^2.
            b (int or float): The coefficient of x.
            c (int or float): The constant term.

        Returns:
            list: A list containing the roots of the equation and an error message if applicable.
        """
        numberA = float(a)
        numberB = float(b)
        numberC = float(c)

        if numberA == 0 and numberB == 0:
            return None, "The values of 'a' and 'b' cannot be zero at the same time." 
        else:
            delta = numberB**2 - 4*numberA*numberC
            if delta < 0:
                return None, "Has no real roots"
            elif delta == 0:
                root1 = -numberB/(2*numberA)
                return [root1]
            else:
                root1 = (-numberB + Calculator.squareRoot(delta))/(2*numberA)
                root2 = (-numberB - Calculator.squareRoot(delta))/(2*numberA)
                return [root1, root2]


# Creates an instance of the Calculator class
loganmatic = Calculator()