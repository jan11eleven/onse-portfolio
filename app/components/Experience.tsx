"use client";

export default function Experience() {
	const experiences = [
		{
			year: "2022 – Present",
			title: "Software Engineer",
			company: "UBx",
			details:
				"As an Appian Developer at UnionBank, I contributed to the CCMD and COCREE projects, enhancing user experience by demonstrating application features to business operators. I collaborated with cross-functional teams to integrate APIs and manage data, significantly reducing errors and streamlining operations. Additionally, I developed a Task Logging App to improve daily task tracking for the team and played a key role in UnionBank’s data migration from Citi.",
		},
		{
			year: "2021 – 2022",
			title: "Junior Software Engineer",
			company: "Pearl Pay Inc.",
			details:
				"As a Full-Stack Developer, I worked on developing features for a Core Banking Solution using Java and Spring Boot for the backend, AngularJS for the frontend, MySQL for the database, and AWS for deployment. I implemented features such as loan interest calculations, term deposit computations, user authorization management, and journal entry creation. I deployed these features across Development, Test, UAT, and Production environments, ensuring seamless integration. Additionally, I supported User Acceptance Testing (UAT) to enhance the client experience.",
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
									<p className="mt-2 text-lg lg:text-xl">{exp.details}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
