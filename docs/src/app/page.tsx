import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<h1>Hello World Loganmatic</h1>
				<div>
					<h2>See the documentation</h2>
					<ul>
						<li>
							<Link href="/typescript">Typescript/Javascript</Link>
						</li>
						<li>
							<Link href="/python">Python</Link>
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
