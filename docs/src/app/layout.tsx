import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Loganmatic",
	description:
		"Mathematics library created for use in JS, TS, JAVA, PYTHON and C# languages. Under development...",
	authors: { name: "Gabriel Logan", url: "https://github.com/gabriel-logan" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
