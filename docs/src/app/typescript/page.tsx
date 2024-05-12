import Image from "next/image";
import Link from "next/link";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MathLibPage() {
	return (
		<div className="min-h-screen bg-gray-100 p-8 dark:bg-black">
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

			<SyntaxHighlighter language="bash" style={a11yDark}>
				npm install loganmatic
			</SyntaxHighlighter>
			<p>Or</p>
			<SyntaxHighlighter language="bash" style={a11yDark}>
				yarn add loganmatic
			</SyntaxHighlighter>

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

			<SyntaxHighlighter language="javascript" style={a11yDark}>
				{`import anythingYouWant from "loganmatic.js"`}
			</SyntaxHighlighter>

			<p className="mb-4">Then, you can use it as follows:</p>

			<SyntaxHighlighter language="javascript" style={a11yDark}>
				{`console.log(anythingYouWant.EulerNumber);
console.log(anythingYouWant.factor(100));`}
			</SyntaxHighlighter>

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

			<SyntaxHighlighter language="javascript" style={a11yDark}>
				{`import Mathematics from "loganmatic";
console.log(Mathematics.EulerNumber);
const equationRoots = Mathematics.cubicEquation(1, -6, 11, -6);
console.log(equationRoots.value); // Returns an array
console.log(equationRoots.msg); // Returns a descriptive message`}
			</SyntaxHighlighter>

			<p>Made by Gabriel Logan.</p>
		</div>
	);
}
