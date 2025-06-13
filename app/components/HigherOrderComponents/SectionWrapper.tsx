"use client";
import { staggerContainer } from "@/app/utils/motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const SectionWrapper = (Component: FC, idName: string) => {
	return function HOC() {
		return (
			<motion.div
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				exit="hidden"
				viewport={{ once: true, amount: 0.25 }}
				// className="padding max-w-7xl mx-auto relative z-0"
				className="px-4 py-8 sm:px-6 sm:py-16 lg:px-8 max-w-7xl mx-auto relative z-0" 
			>
				<span className="hash-span" id={idName}>
					{" "}
					&nbsp;{" "}
				</span>
				<Component />
			</motion.div>
		);
	};
};

export default SectionWrapper;
