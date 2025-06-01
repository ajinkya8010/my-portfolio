export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
	// {
	// 	id: "blogs",
	// 	title: "Blogs",
	// },
];

const services = [
	{
		title: "AI Developer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Researcher",
		icon: "/mobile.webp",
	},
	{
		title: "Problem Solver",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "Node JS",
		icon: "/tech/nodejs.webp",
	},
		{
		name: "Drupal",
		icon: "/tech/drupal.webp",
	},
		{
		name: "AIML",
		icon: "/tech/ai.webp",
	},
	{
		name: "MongoDB",
		icon: "/tech/mongodb.webp",
	},
	{
		name: "MYSQL",
		icon: "/tech/mysql.webp",
	},
	{
		name: "JWT",
		icon: "/tech/jwt.webp",
	},
	{
		name: "Java",
		icon: "/tech/java.webp",
	},
	{
		name: "C language",
		icon: "/tech/c.webp",
	},
];

const experiences = [
	{
		title: "Intern Web Developer",
		company_name: "QED42",
		icon: "/company/qed42.webp",
		iconBg: "#ffffff",
		date: "2025 -  present",
		points: [
			"Gained hands-on experience using Drupal as a headless CMS and integrated it with modern frontend technologies like Next.js to build dynamic and scalable web applications.",
			"Developed intelligent solutions by integrating Retrieval-Augmented Generation (RAG) systems and AI agents, contributing to smarter content delivery and automation in web platforms.",
			"Participated in team stand-ups, code reviews, and sprint planning, improving code quality through collaboration while gaining exposure to real-world development workflows and Git version control.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"GeeksforGeeks is a platform that contains well-explained Computer Science concepts, coding practice, and quizzes.",
		name: "ajinkyawalunj45",
		image: "/tech/gfg.svg",
		link: "https://www.geeksforgeeks.org/user/ajinkyawalunj45",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Ajinkya Walunj",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/ajinkya-walunj",
	},
	{
		id: 3,
		testimonial:
			"LeetCode: Platform for coding practice, DSA, and interviews. Also provides a community for discussions and solutions.",
		name: "ajinkya45",
		image: "/tech/lc.svg",
		link: "https://leetcode.com/u/ajinkya45",
	},
	{
		id: 4,
		testimonial:
			"Kaggle is a platform for Data Science and ML that enables users to explore datasets, run code, and take part in competitions.",
		name: "ajinkyawalunj",
		image: "/tech/kaggle.svg",
		link: "https://www.kaggle.com/ajinkyawalunj",
	},
	{
		id: 5,
		testimonial:
			"Feel free to explore my GitHub profile, where I showcase a wide range of projects that solve various problems using different technologies.",
		name: "ajinkya8010",
		image: "/tech/github.webp",
		link: "https://github.com/ajinkya8010",
	},
	{
		id: 6,
		testimonial:
			"Twitter (now X) is a social media platform for real-time updates, news, and short content, allowing users to post and interact.",
		name: "jinks4518",
		image: "/socialmedia/x.svg",
		link: "https://x.com/jinks4518",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Renderer" | "Vercel" | "Android" | "Web"
}[] = [
	{
		name: "Data-Driven Traffic Analysis System for Pune Municipal Corporation (PMC)",
		description:
			"A comprehensive web portal for urban traffic analysis integrating real-time insights, citizen reporting, and ML verification to mitigate traffic issues.",
		tags: [
			{
				name: "react.js",
				color: "blue-text-gradient",
			},
			{
				name: "mongoDB",
				color: "green-text-gradient",
			},
			{
				name: "express.js",
				color: "red-text-gradient",
			},
			{
				name: "node.js",
				color: "yellow-text-gradient",
			},
			{
				name: "google-maps-api",
				color: "orange-text-gradient",
			},
			{
				name: "tensorflow",
				color: "violet-text-gradient",
			},
			{
				name: "flask",
				color: "brown-text-gradient",
			},
			{
				name: "cloudinary",
				color: "white-text-gradient",
			},
		],
		image: "/projectimg/avm.webp",
		source_code_link: "https://github.com/ajinkya8010/road-traffic-frontend",
		platform: "Web",
		deploy_link: "https://avmauto.in/"
	},
	{
		name: "Fish Species Identification (Fishify)",
		description:
			"Android app achieving 94.55% accuracy in fish species identification with real-time location-based pricing and edibility information.",
		tags: [
			{
				name: "python",
				color: "red-text-gradient",
			},
			{
				name: "deep-learning",
				color: "orange-text-gradient",
			},
			{
				name: "web-scrapping",
				color: "blue-text-gradient",
			},
			{
				name: "flutter",
				color: "red-text-gradient",
			},
			{
				name: "flask",
				color: "orange-text-gradient",
			},
			{
				name: "openai-api",
				color: "blue-text-gradient",
			},
			{
				name: "mobilenet-v1",
				color: "blue-text-gradient",
			}
		],
		image: "/projectimg/sparkbright.png",
		source_code_link: "https://github.com/ajinkya8010/Fish-Species-Iden-ML",
		platform: "Android",
		deploy_link: "https://sparkbright.in/",
	},
	{
		name: "HomeSeek: Real Estate Marketplace",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/omunite215/hoobank",
		platform: "Vercel",
		deploy_link: "https://hoobankbyom.netlify.app/",
	},
	{
		name: "RAG App for PDFs",
		description:
			" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
		platform: "Web",
		deploy_link: "https://admin-frontend-r705.onrender.com/",
	},
	{
		name: "Auto tab grouper",
		description:
			"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/metaverse.png",
		source_code_link: "https://github.com/omunite215/Project_Metaverse",
		platform: "Vercel",
		deploy_link: "https://project-metaverse-beta.vercel.app/",
	},
	{
		name: "Video Translation System (Atlas Copco)",
		description:
			"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
		tags: [
			{
				name: "next",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "shadCN",
				color: "orange-text-gradient",
			},
			{
				name: "mySQL",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/issuetracker.png",
		source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
		platform: "Vercel",
		deploy_link: "https://project-issue-tracker.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
