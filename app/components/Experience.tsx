"use client";

export default function Experience() {
	const experiences = [
		{
			year: "2022 – Present",
			title: "Software Engineer",
			company: "UBx",
			details:
				"As a Software Engineer, I develop and maintain enterprise banking applications, focusing on backend functionality, database operations, and system integrations. I collaborate with cross-functional teams and Product Owners to deliver new features, resolve production issues, and improve existing applications. I also support UAT, production deployments, and data migration projects, ensuring reliable and scalable solutions for banking systems.",
		},
		{
			year: "2021 – 2022",
			title: "Junior Software Engineer",
			company: "Pearl Pay Inc.",
			details:
				"As a Junior Software Engineer, I contributed to the development of a core banking system using Java, Spring Boot, AngularJS, and MySQL. I implemented backend services and business logic for financial features such as loans, term deposits, and journal entries while also building frontend interfaces. I deployed applications across multiple environments, utilized AWS services, and worked with CI/CD pipelines to support efficient software delivery",
		},
	];

	return (
		<div>
			<p
				className="pt-8 sm:pt-16 lg:pt-32 alegreya-font text-4xl md:text-5xl lg:text-7xl font-bold pb-8"
				id="experience"
			>
				Experience
			</p>
			<section className="experience-section px-8 pb-8 md:pb-20">
				<div className="flex-col">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="figtree-font flex flex-col md:flex-row px-2 lg:px-12 mb-12"
						>
							{/* Column 1: Year */}
							<div className="year -ml-3 mb-4 md:text-right pr-4 text-xl flex-shrink-0 whitespace-nowrap mr-8 min-w-44">
								<p>{exp.year}</p>
							</div>

							<div className="flex">
								{/* Column 2: Timeline */}
								<div className="timeline relative flex flex-col justify-center items-center mr-8">
									<div className="line h-[calc(100%-48px)] w-[2px] bg-background dark:bg-skillBackground mt-12"></div>
									<div className="marker w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full absolute top-1 animate-pulse-glow"></div>
								</div>

								{/* Column 3: Details */}
								<div className="details pl-4 flex-3">
									<h3 className="text-2xl lg:text-4xl font-bold">
										{exp.title}
									</h3>
									<p className="text-xl lg:text-2xl">{exp.company}</p>
									<p className="mt-2 text-md lg:text-xl">{exp.details}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
