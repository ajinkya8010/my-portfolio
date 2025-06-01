// "use client";
// import { technologies } from "@/app/constants";
// import { SectionWrapper } from "./HigherOrderComponents";
// import { BallCanvas } from "./canvas";

// const Tech = () => {
// 	return (
// 		<div className="flex flex-row flex-wrap justify-center gap-10">
// 			{technologies.map((technology) => (
// 				<div className="w-28 h-28" key={technology.name}>
// 					<BallCanvas icon={technology.icon} />
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default SectionWrapper(Tech, "tech");


// Replace your existing Tech.tsx with this code
"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";

const Tech = () => {
	return (
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
						ease: "easeOut"
					}}
					whileHover={{ 
						scale: 1.1,
						transition: { duration: 0.2 }
					}}
				>
					{/* Background circle with gradient */}
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
					
					{/* Technology name tooltip */}
					<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
						<div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
							{technology.name}
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");