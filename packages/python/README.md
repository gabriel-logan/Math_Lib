# Loganmatic

[![PyPI version](https://badge.fury.io/py/loganmatic.svg)](https://badge.fury.io/py/loganmatic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PyPI downloads](https://img.shields.io/pypi/dm/loganmatic.svg?style=flat-square)](https://pypistats.org/packages/loganmatic)

## Example usage of the Calculator class

!! PYTHON !!

## Docs
https://gabriel-logan.github.io/Math_Lib/python

To use as a PIP package, simply use
    
```bash
pip install loganmatic
```

Then, you can use it as follows:

```py
from loganmatic import loganmatic
```

## Example usage of the Calculator class

```py
# Import the Calculator class from the loganmatic module
from loganmatic import loganmatic

print("Pi value", loganmatic.Pi)
print("Euler value", loganmatic.EulerNumber)
print("Absolute value", loganmatic.absoluteValue(-5))
print("Factorial", loganmatic.factorial(5))
print("Square root", loganmatic.squareRoot(25))
print("Cubic root", loganmatic.cubicRoot(27))
print("Factors", loganmatic.factor(12))
print("Sine", loganmatic.sine(0.5))
print("Cosine", loganmatic.cosine(0.5))
print("Random number", loganmatic.random_number_between(1, 10))
print("Root of linear equation", loganmatic.root_of_first_degree(2, 4))
print("Roots of quadratic equation", loganmatic.root_of_second_degree(1, -3, 2))

```