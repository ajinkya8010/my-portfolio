// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Tilt } from "react-tilt";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "./HigherOrderComponents";

// type ProjectCardProps = {
// 	index: number;
// 	name: string;
// 	description: string;
// 	tags: {
// 		name: string;
// 		color: string;
// 	}[];
// 	image: string;
// 	source_code_link: string;
// 	deploy_link?: string;
// 	platform?: "Vercel"| "Web" | "Render" | "Github" | "Android"
// };

// const ProjectCard = ({
// 	index,
// 	name,
// 	description,
// 	tags,
// 	image,
// 	source_code_link,
// 	deploy_link,
// 	platform
// }: ProjectCardProps) => {
// 	return (
// 		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
// 			<Tilt
// 				options={{
// 					max: 45,
// 					scale: 1,
// 					speed: 450,
// 				}}
// 				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
// 			>
// 				<div className="relative w-full h-[230px]">
// 					<Image
// 						src={image}
// 						width={1000}
// 						height={1000}
// 						alt="project_image"
// 						className="w-full h-full object-cover rounded-2xl"
// 					/>

// 					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
// 						{source_code_link && <Link
// 							href={source_code_link}
// 							target="_blank"
// 							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
// 						>
// 							<Image
// 								src="/tech/github.webp"
// 								width={24}
// 								height={24}
// 								alt="source-code"
// 								className="object-contain"
// 							/>
// 						</Link>}
// 						{deploy_link && platform &&(
// 						<Link
// 							href={deploy_link}
// 							target="_blank"
// 							className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
// 						>
// 							<Image
// 								src={platform === "Vercel" ? "/tech/vercel.svg" : platform === "Web" ? "/web.webp" : platform ==="Github" ? "/tech/github.webp": "/tech/renderer.webp"}
// 								width={24}
// 								height={24}
// 								alt="source code"
// 								className="object-contain"
// 							/>
// 						</Link>
// 						)}
// 					</div>
// 				</div>

// 				<div className="mt-5">
// 					<h3 className="text-white font-bold text-[24px]">{name}</h3>
// 					<p className="mt-2 text-secondary text-[14px]">{description}</p>
// 				</div>

// 				<div className="mt-4 flex flex-wrap gap-2">
// 					{tags.map((tag) => (
// 						<p
// 							key={`${name}-${tag.name}`}
// 							className={`text-[14px] ${tag.color}`}
// 						>
// 							#{tag.name}
// 						</p>
// 					))}
// 				</div>
// 			</Tilt>
// 		</motion.div>
// 	);
// };

// const Works = () => {
// 	return (
// 		<>
// 			<motion.div variants={textVariant()}>
// 				<h2 className="sectionHeadText">Projects.</h2>
// 			</motion.div>

// 			<div className="w-full flex">
// 				<motion.p
// 					variants={fadeIn("", "", 0.1, 1)}
// 					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
// 				>
// 					Following projects showcase my skills and experience through
// 					real-world examples. Each project is briefly described with
// 					links to code repositories and live demos (if available) in it. It reflects my
// 					ability to solve complex problems, work with different technologies,
// 					and manage projects effectively.
// 				</motion.p>
// 			</div>

// 			<div className="mt-20 flex flex-wrap gap-7">
// 				{projects.map((project, index) => (
// 					<ProjectCard key={`project-${index}`} index={index} {...project} />
// 				))}
// 			</div>
// 		</>
// 	);
// };

// export default SectionWrapper(Works, "projects");

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link: string;
	deploy_link?: string;
	platform?: "Vercel"| "Web" | "Render" | "Github" | "Android"
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
	platform
}: ProjectCardProps) => {
	return (
		<motion.div 
			variants={fadeIn("up", "spring", index * 0.5, 0.75)}
			className="w-full sm:w-[360px]" // Ensure full width on mobile
		>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full min-h-[400px]" // Added min-height and adjusted padding
			>
				<div className="relative w-full h-[200px] sm:h-[230px]"> {/* Responsive height */}
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover"> {/* Responsive margin */}
						{source_code_link && <Link
							href={source_code_link}
							target="_blank"
							className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer" // Responsive button size
						>
							<Image
								src="/tech/github.webp"
								width={20}
								height={20}
								alt="source-code"
								className="object-contain sm:w-6 sm:h-6" // Responsive icon size
							/>
						</Link>}
						{deploy_link && platform &&(
						<Link
							href={deploy_link}
							target="_blank"
							className="black-gradient w-8 h-8 sm:w-10 sm:h-10 ml-1 sm:ml-2 rounded-full flex justify-center items-center cursor-pointer" // Responsive button size and margin
						>
							<Image
								src={platform === "Vercel" ? "/tech/vercel.svg" : platform === "Web" ? "/web.webp" : platform ==="Github" ? "/tech/github.webp": "/tech/renderer.webp"}
								width={20}
								height={20}
								alt="source code"
								className="object-contain sm:w-6 sm:h-6" // Responsive icon size
							/>
						</Link>
						)}
					</div>
				</div>

				<div className="mt-4 sm:mt-5"> {/* Responsive margin */}
					<h3 className="text-white font-bold text-[20px] sm:text-[24px] leading-tight">{name}</h3> {/* Responsive font size and line height */}
					<p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">{description}</p> {/* Responsive font size */}
				</div>

				<div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2"> {/* Responsive margin and gap */}
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[12px] sm:text-[14px] ${tag.color}`} // Responsive font size
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<div className="w-full"> {/* Ensure full width container */}
			<motion.div variants={textVariant()}>
				<h2 className="sectionHeadText text-center sm:text-left">Projects.</h2> {/* Center on mobile */}
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px] text-center sm:text-left" // Responsive text size and alignment
				>
					Following projects showcase my skills and experience through
					real-world examples. Each project is briefly described with
					links to code repositories and live demos (if available) in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className="mt-12 sm:mt-20 flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-7 items-center sm:items-start"> {/* Stack vertically on mobile, horizontally on desktop */}
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Works, "projects");