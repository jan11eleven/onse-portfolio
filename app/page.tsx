"use client";

import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";

export default function Home() {
	return (
		<div className="bg-aboutBackground dark:bg-aboutForeground">
			<div className="px-4 md:px-12 lg:px-20 mt-10 bg-foreground dark:bg-background">
				<Header />
			</div>
			<div className="px-4 md:px-12 lg:px-20 bg-foreground dark:bg-background">
				<Landing />
			</div>
			<div className="px-4 md:px-12 lg:px-20 lg:pb-20 bg-aboutBackground dark:bg-aboutForeground">
				<About />
				<Portfolio />
			</div>
			<div className="px-4 md:px-12 lg:px-20 bg-expBackground dark:bg-expForeground">
				<Experience />
			</div>
			<Contacts />
		</div>
	);
}
