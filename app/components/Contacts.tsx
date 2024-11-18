"use client";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaViber } from "react-icons/fa";

export default function Contacts() {
	const contactsCards =
		"flex justify-center items-center text-lg md:text-xl lg:text-2xl py-4 px-2 md:py-8 md:px-6 rounded-md bg-expBackground dark:bg-expForeground text-primary text-center";
	const contactsIcons =
		"h-4 w-4 md:h-8 md:w-8 font-bold mr-2 md:mr-4 text-background dark:text-foreground";
	return (
		<div className="pb-8 md:pb-16">
			<div className="flex w-100 items-center -mt-12 sm:-mt-13 md:-mt-15 lg:-mt-16">
				<div className="h-1 flex-grow bg-primary"></div>
				<p
					className="alegreya-font text-4xl md:text-5xl lg:text-7xl font-bold pb-8 pt-6 px-4"
					id="contacts"
				>
					Contacts
				</p>
				<div className="h-1 flex-grow bg-primary"></div>
			</div>
			<div className="figtree-font md:p-4 md:flex md:flex-row flex-col justify-center">
				<div
					className={`${contactsCards} md:mr-4 overflow-hidden max-w-full mx-6 md:mx-0`}
				>
					<MdEmail className={`${contactsIcons}`} />
					<p>2.janelevensalvador@gmail.com</p>
				</div>
				<div className={`${contactsCards} mx-6 md:mx-0 mt-4 md:mt-0`}>
					<BsFillTelephoneFill className={`${contactsIcons}`} />
					<p>(+63)-9499-44-3203</p>
				</div>
			</div>
			<div className="flex figtree-font justify-center md:px-16 md:mt-8">
				<div
					className={`${contactsCards} w-screen md:w-auto mx-6 md:mx-0 mt-4 md:mt-0`}
				>
					<FaLocationDot className={`${contactsIcons}`} />
					<p>Manila, Philippines</p>
				</div>
			</div>
			<div className="flex w-100 items-center mt-8 md:mt-16">
				<div className="h-1 flex-grow bg-primary mr-8"></div>
				<div className="flex">
					<a
						href="https://www.facebook.com/janeleven.salvador/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Facebook"
					>
						<FaFacebook className="h-8 w-8 font-bold mr-4 hover:text-blue-500" />
					</a>
					<a
						href="https://www.linkedin.com/in/jan-eleven-salvador/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<FaLinkedin className="h-8 w-8 font-bold mr-4 hover:text-blue-700" />
					</a>
					<a
						href="viber://chat?number=09499443203"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Viber"
					>
						<FaViber className="h-8 w-8 font-bold hover:text-purple-500" />
					</a>
				</div>

				<div className="h-1 flex-grow bg-primary ml-8"></div>
			</div>
		</div>
	);
}
