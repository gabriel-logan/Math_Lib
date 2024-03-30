import Image from "next/image";
import Link from "next/link";

export default function Readme() {
	return (
		<div className="flex min-h-screen">
			<div className="m-8 mx-auto flex flex-col items-center space-x-4 rounded-xl bg-white p-6 shadow-md">
				<div className="flex h-9 w-5/6 flex-row items-center justify-evenly">
					<Link href="https://badge.fury.io/py/loganmatic">
						<Image
							src="https://badge.fury.io/py/loganmatic.svg"
							alt="PyPI version"
							width={120}
							height={120}
						/>
					</Link>
					<Link href="https://opensource.org/licenses/MIT">
						<Image
							src="https://img.shields.io/badge/License-MIT-yellow.svg"
							alt="License: MIT"
							width={120}
							height={120}
						/>
					</Link>
					<Link href="https://pypistats.org/packages/loganmatic">
						<Image
							src="https://img.shields.io/pypi/dm/loganmatic.svg?style=flat-square"
							alt="PyPI downloads"
							width={120}
							height={120}
						/>
					</Link>
				</div>
				<div className="mb-4">
					<div className="text-xl font-medium text-black">Loganmatic</div>
					<p className="text-gray-500">
						Example usage of the Calculator class:
					</p>
					<pre className="rounded bg-gray-200 p-2 text-sm text-gray-500">
						{`
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
          `}
					</pre>
				</div>
				<Link href="/">Go Back</Link>
			</div>
		</div>
	);
}
