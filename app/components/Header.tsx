"use client";

import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
	const linksStyle =
		"text-gray-600 dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-800 select-none";

	return (
		<div className="flex justify-between items-center jost-font">
			<div>
				<Image
					src="/logo.png" // Local image path or URL
					alt="Description of image"
					width={35} // Set desired width
					height={55} // Set desired height
					priority // Optional: loads the image with high priority (recommended for above-the-fold images)
				/>
			</div>
			<div className="w-60 flex justify-around sm:justify-between items-center text-md sm:text-xl font-medium">
				<a href="#about" className={linksStyle}>
					About
				</a>
				<a href="#portfolio" className={linksStyle}>
					Portfolio
				</a>
				<a href="#experience" className={linksStyle}>
					Experience
				</a>
			</div>
			<ThemeSwitch />
		</div>
	);
}
