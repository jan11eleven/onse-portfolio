import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primarycolor)",
				aboutBackground: "var(--about-background)",
				aboutForeground: "var(--about-foreground)",
				skillBackground: "var(--skill-background)",
				skillForeground: "var(--skill-foreground)",
				expBackground: "var(--exp-background)",
				expForeground: "var(--exp-foreground)",
			},
			animation: {
				"pulse-glow": "pulse-glow 2s infinite",
			},
			keyframes: {
				"pulse-glow": {
					"0%, 100%": {
						boxShadow: "0 0 8px 2px rgba(59, 130, 246, 0.7)", // Initial and final glow
					},
					"50%": {
						boxShadow: "0 0 16px 4px rgba(59, 130, 246, 1)", // Brighter glow in the middle
					},
				},
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
