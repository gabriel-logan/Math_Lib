import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.png";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<h1 className="text-3xl font-bold">Hello World Loganmatic</h1>
				<div>
					<h2 className="text-2xl font-semibold">See the documentation</h2>
					<ul>
						<li>
							<Link className="text-xl" href="/typescript">
								Typescript/Javascript
							</Link>
						</li>
						<li>
							<Link className="text-xl" href="/python">
								Python
							</Link>
						</li>
					</ul>
				</div>
				<Image src={logo} alt="logo" priority />
			</div>
		</main>
	);
}
