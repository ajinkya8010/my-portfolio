"use client";

import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";

const Tech = () => {
	return (
		<div className="w-full">
			{/* Heading */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="text-center mb-6"
			>
				<h3 className="text-white font-bold text-[24px] sm:text-[28px] mb-2">
					Skills
				</h3>
				<div className="w-16 h-[2px] bg-gradient-to-r from-secondary to-primary mx-auto mb-2"></div>
				<p className="text-secondary text-[14px] opacity-80">
					My Cup of coffee
				</p>
			</motion.div>

			{/* Grid of tech icons */}
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 gap-y-12 place-items-center">
				{technologies.map((technology, index) => (
					<motion.div
						key={technology.name}
						className="group relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: index * 0.1,
							ease: "easeOut",
						}}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.2 },
						}}
					>
						{/* Background circle */}
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-sm group-hover:blur-none transition-all duration-300" />

						{/* Main container */}
						<div className="relative w-full h-full bg-tertiary rounded-full flex items-center justify-center border border-gray-700 group-hover:border-purple-500 transition-all duration-300 overflow-hidden">
							{/* Animated background */}
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							{/* Tech icon */}
							<img
								src={technology.icon}
								alt={technology.name}
								className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain z-10 filter group-hover:drop-shadow-lg transition-all duration-300"
								loading="lazy"
							/>

							{/* Hover overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
						</div>

						{/* Tooltip */}
						<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
							<div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
								{technology.name}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
