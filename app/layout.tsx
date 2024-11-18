import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Jost, Figtree, Alegreya } from "next/font/google";

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-jost",
});

const figtree = Figtree({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-figtree",
});

const alegreya = Alegreya({
	subsets: ["latin"],
	weight: ["600"],
	variable: "--font-alegreya",
});

export const metadata: Metadata = {
	title: "Jan Eleven",
	description: "Jan Eleven's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body
				className={`${jost.variable} ${figtree.variable} ${alegreya.variable}  antialiased bg-foreground text-background dark:bg-background dark:text-foreground scroll-smooth`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
