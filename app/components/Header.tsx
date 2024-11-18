"use client";

import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
	const linksStyle =
		"text-gray-600 dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-800 select-none";

	return (
		<div className="flex justify-between items-center jost-font">
			<div className="block md:hidden">
				<Image
					src="/logo.png"
					alt="Description of image"
					width={25}
					height={45}
					priority
				/>
			</div>
			<div className="hidden md:block">
				<Image
					src="/logo.png"
					alt="Description of image"
					width={35}
					height={55}
					priority
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
