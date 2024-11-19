"use client";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaViber } from "react-icons/fa";

export default function Landing() {
	return (
		<div className="text-xl sm:text-2xl lg:text-4xl min-h-[calc(100vh-84px)] lg:flex lg:flex-row lg:justify-between lg:justify-items-center flex-col lg:pt-40">
			<div className=" lg:pl-40 pt-20 text-center md:text-left flex-col justify-end justify-items-center lg:justify-items-start flex-1">
				<p className="figtree-font mb-2 lg:mb-6 select-none">
					I AM{" "}
					<span className="alegreya-font text-3xl sm:text-4xl lg:text-6xl text-bold text-primary">
						Jan Eleven
					</span>
				</p>
				<p className="figtree-font mb-8 lg:mb-14 select-none">
					a Java & Appian Developer
				</p>
				<div className="image-1 w-2/4 lg:w-4/4 mb-14 lg:ml-20 lg:hidden">
					<Image
						src="/profile.png"
						alt="Description of image"
						width={450}
						height={450}
						priority
					/>
				</div>
				<a
					className="text-md lg:text-3xl border-4 rounded-md lg:rounded-xl p-4 lg:p-6 border-primary text-primary hover:bg-primary hover:text-background dark:hover:text-background animate-pulse-glow"
					href="#contacts"
				>
					Contact Me
				</a>
			</div>
			<div className="pl-6 hidden lg:block flex-1">
				<Image
					src="/profile.png"
					alt="Description of image"
					width={450}
					height={450}
					priority
				/>
			</div>
			<div className="flex-col justify-items-center justify-self-end md:self-end pb-6 md:pb-0">
				<div className="vertical-line mb-8 animate-pulse-glow"></div>
				<a
					href="https://www.facebook.com/janeleven.salvador/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
				>
					<FaFacebook className="mb-4 sm:mb-8 hover:text-blue-500" />
				</a>
				<a
					href="https://www.linkedin.com/in/jan-eleven-salvador/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<FaLinkedin className="mb-4 sm:mb-8 hover:text-blue-700" />
				</a>
				<a
					href="viber://chat?number=09499443203"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Viber"
				>
					<FaViber className="mb-8 hover:text-purple-500" />
				</a>
			</div>
		</div>
	);
}
