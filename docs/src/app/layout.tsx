import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Scripts from "@/components/Scripts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Loganmatic",
	description:
		"Mathematics library created for use in JS, TS, JAVA, PYTHON and C# languages. Under development...",
	authors: { name: "Gabriel Logan", url: "https://github.com/gabriel-logan" },
	keywords: [
		"math",
		"calculation",
		"functions",
		"library",
		"mathematics",
		"algebra",
		"geometry",
		"trigonometry",
		"matematica",
		"calculo",
		"funcoes",
		"biblioteca",
		"equations",
		"equacoes",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="ltr">
			<body className={inter.className}>
				{children} <Scripts />
			</body>
		</html>
	);
}
