import Image from "next/image";
import Link from "next/link";

export default function MathLibPage() {
	return (
		<div className="min-h-screen bg-gray-100 p-8">
			<Link className="hover:text-blue-700" href="/">
				Go back
			</Link>
			<h1 className="mb-4 text-center text-4xl font-bold">Math_Lib</h1>
			<p className="mb-4 text-center text-lg">
				Now calculate the third degree root...
			</p>
			<p className="mb-4 flex items-center justify-center">
				<Link href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
					<Image
						src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
						alt="Buy Me A Coffee"
						width={0}
						height={0}
						className="h-12 w-44"
					/>
				</Link>
			</p>
			<h2 className="mb-2 text-2xl font-bold">NPM</h2>
			<p className="mb-4">
				<Link
					href="https://www.npmjs.com/package/loganmatic"
					className="text-blue-500"
				>
					https://www.npmjs.com/package/loganmatic
				</Link>
			</p>
			<h3 className="mb-2 text-xl font-bold">Installation</h3>
			<pre className="mb-4 rounded bg-gray-200 p-2">
				<code>npm install loganmatic // or yarn add install loganmatic</code>
			</pre>
			<p className="mb-4">ENG</p>
			<p className="mb-4 font-bold">!! JAVASCRIPT !!</p>
			<p className="mb-4">
				Personal library created in JavaScript and Python for common use. In
				development...
			</p>
			<p className="mb-4">
				To use as an NPM package, simply use npm i loganmatic.
			</p>
			<p className="mb-4">To import, use:</p>
			<pre className="mb-4 rounded bg-gray-200 p-2">
				<code>import anythingYouWant from &quot;loganmatic.js&quot;</code>
			</pre>
			<p className="mb-4">Then, you can use it as follows:</p>
			<pre className="mb-4 rounded bg-gray-200 p-2">
				<code>
					console.log(anythingYouWant.EulerNumber);
					console.log(anythingYouWant.factor(100));
				</code>
			</pre>
			<h2 className="mb-2 text-2xl font-bold">
				Evaluated modules to calculate
			</h2>
			<ul className="mb-4 list-disc pl-5">
				<li>Pi</li>
				<li>EulerNumber</li>
				<li>absoluteValue</li>
				<li>factorial</li>
				<li>squareRoot</li>
				<li>cubicRoot</li>
				<li>factor</li>
				<li>sine</li>
				<li>cosine</li>
				<li>linearEquation</li>
				<li>quadraticEquation</li>
				<li>cubicEquation</li>
				<li>gcd</li>
				<li>lcm</li>
			</ul>
			<p className="mb-4">
				If you find any errors in the code, please send them to me. It will be
				of great help!
			</p>
			<p className="mb-4 font-bold">Usage example:</p>
			<pre className="mb-4 rounded bg-gray-200 p-2 text-sm">
				<code className="block whitespace-pre">
					<span className="text-blue-600">import</span> Mathematics{" "}
					<span className="text-blue-600">from</span>{" "}
					<span className="text-red-600">{'"loganmatic"'}</span>;
					<br />
					<span className="text-blue-600">console.log</span>
					(Mathematics.EulerNumber);
					<br />
					<span className="text-green-600">const</span> equationRoots =
					Mathematics.cubicEquation(1, -6, 11, -6);
					<br />
					<span className="text-blue-600">console.log</span>
					(equationRoots.value);{" "}
					<span className="text-gray-500">{"// Returns an array"}</span>
					<br />
					<span className="text-blue-600">
						console.log
					</span>(equationRoots.msg);{" "}
					<span className="text-gray-500">
						{"// Returns a descriptive message"}
					</span>
				</code>
			</pre>
			<p>Made by Gabriel Logan.</p>
		</div>
	);
}
