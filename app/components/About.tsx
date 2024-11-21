"use client";

import Image from "next/image";

export default function About() {
	const skillItemStyle =
		"bg-skillBackground dark:bg-skillForeground rounded-xl flex-col items-center place-content-center min-w-[250px] min-h-[250px] ";

	return (
		<div className="scroll-smooth">
			<p
				className="pt-12 md:pt-16 lg:pt-40 alegreya-font text-4xl md:text-5xl lg:text-7xl text-bold mb-4 md:mb-10"
				id="about"
			>
				About
			</p>
			<div className="flex justify-center">
				<div className="horizontal-line mt-3 lg:mt-4 mr-6 animate-pulse-glow"></div>
				<p className="figtree-font text-lg md:text-2xl">
					I am a highly motivated and adaptable software engineer with
					experience in full-stack development, specializing in{" "}
					<span className="text-primary">
						Java, Spring Boot, Appian, and modern web technologies.
					</span>{" "}
					I have a strong background in the FinTech and software consulting
					industries, where I developed and maintained core banking solutions,
					APIs, and user interfaces. In addition to my professional experience,
					I am self-taught in modern programming frameworks, including{" "}
					<span className="text-primary">
						Next.js, React, NodeJS, and PostgreSQL.
					</span>{" "}
					With over two years of hands-on experience, I have honed my skills in
					building scalable applications, debugging, optimizing performance, and
					collaborating effectively with cross-functional teams.
				</p>
			</div>

			<div>
				<p className="pt-8 sm:pt-16 lg:pt-32 alegreya-font text-4xl md:text-5xl lg:text-7xl font-bold mt-8 text-center">
					My Skills
				</p>
				<div className="mt-10 sm:mt-16 lg:mt-20 figtree-font text-lg sm:text-xl font-semibold flex flex-col items-center">
					<div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-10">
						<div className={`${skillItemStyle}`}>
							<div className="flex gap-2 m-auto w-3/6">
								<Image
									src="/HTML5.png"
									alt="HTML5 Logo"
									width={60}
									height={60}
								/>
								<Image src="/CSS3.png" alt="CSS3 Logo" width={60} height={60} />
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">
								HTML & CSS
							</p>
						</div>
						<div className={`${skillItemStyle}`}>
							<div className="m-auto w-3/6">
								<Image
									src="/JavaScript.png"
									alt="JavaScript Logo"
									width={80}
									height={80}
									className="m-auto"
								/>
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">
								JavaScript
							</p>
						</div>
						<div className={`${skillItemStyle}`}>
							<div className="m-auto w-3/6">
								<Image
									src="/Next.js.png"
									alt="Next.js Logo"
									width={80}
									height={80}
									className="m-auto"
								/>
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">NextJS</p>
						</div>
						<div className={`${skillItemStyle}`}>
							<div className="m-auto w-3/6">
								<Image
									src="/Node.js.png"
									alt="Node.js Logo"
									width={80}
									height={80}
									className="m-auto"
								/>
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">NodeJS</p>
						</div>
					</div>
					<div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-10">
						<div className={`${skillItemStyle}`}>
							<div className="m-auto w-3/6">
								<Image
									src="/Java.png"
									alt="Java Logo"
									width={80}
									height={80}
									className="m-auto"
								/>
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">Java</p>
						</div>
						<div className={`${skillItemStyle}`}>
							<div className="m-auto w-3/6">
								<Image
									src="/Spring.png"
									alt="Spring Logo"
									width={80}
									height={80}
									className="m-auto"
								/>
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">Spring</p>
						</div>
						<div className={`${skillItemStyle}`}>
							<div className="m-auto w-3/6">
								<Image
									src="/MySQL.png"
									alt="MySQL Logo"
									width={80}
									height={80}
									className="m-auto"
								/>
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">MySQL</p>
						</div>
						<div className={`${skillItemStyle}`}>
							<div className="m-auto w-3/6">
								<Image
									src="/PostgresSQL.png"
									alt="PostgresSQL Logo"
									width={80}
									height={80}
									className="m-auto"
								/>
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">
								PostgresSQL
							</p>
						</div>
					</div>
					<div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-10">
						<div className={`${skillItemStyle}`}>
							<div className="m-auto w-3/6">
								<Image
									src="/Figma.png"
									alt="Figma Logo"
									width={80}
									height={80}
									className="m-auto"
								/>
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">Figma</p>
						</div>
						<div className={`${skillItemStyle}`}>
							<div className="m-auto w-3/6">
								<Image
									src="/Appian.png"
									alt="Appian Logo"
									width={80}
									height={80}
									className="m-auto"
								/>
							</div>
							<p className="mt-4 sm:mt-6 m-auto w-3/6 text-center">Appian</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
