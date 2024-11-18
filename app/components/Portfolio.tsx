import Image from "next/image";

export default function Portfolio() {
	const projects = [
		{
			title: "To Do List",
			description: "NextJS App",
			image: "/ToDoList.png",
			link: "https://to-do-list-app-ruddy-three.vercel.app/",
		},
		// {
		// 	title: "The Sort of Appeal",
		// 	description: "Sorting Visualizer App",
		// 	image: "/SortingVisualizer.png",
		// 	link: "samplelink.com",
		// },
		{
			title: "Bling App",
			description: "Android Mobile App",
			image: "/BlingApp.png",
			link: "https://www.youtube.com/watch?v=pglK1dDKm3g",
		},
	];

	return (
		<div>
			<p
				className="pt-8 sm:pt-16 lg:pt-32 alegreya-font text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-8"
				id="portfolio"
			>
				Portfolio
			</p>
			<div className="pt-18 px-8 pb-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<div
							key={index}
							className="group relative h-56 md:h-72 lg:h-96 overflow-hidden bg-gray-800 text-white rounded-lg shadow-lg"
						>
							{/* Project Thumbnail */}
							<Image
								src={project.image}
								alt={`${project.title} thumbnail`}
								fill={true}
								className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>

							{/* Project Overlay */}
							<div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center p-2">
								<div className="text-center">
									<h3 className="text-xl font-bold mb-2">{project.title}</h3>
									<p className="text-sm">{project.description}</p>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
									>
										View Project
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
