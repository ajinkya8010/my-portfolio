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
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "AI Developer",
		icon: "/backend.webp",
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
			"Feel free to explore my GitHub profile, where I showcase a wide range of projects that solve various problems using different technologies.",
		name: "ajinkya8010",
		image: "/tech/github.webp",
		link: "https://github.com/ajinkya8010",
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
			"GeeksforGeeks is a platform that contains well-explained Computer Science concepts, coding practice, and quizzes.",
		name: "ajinkyawalunj45",
		image: "/tech/gfg.svg",
		link: "https://www.geeksforgeeks.org/user/ajinkyawalunj45",
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
	source_code_link: string;
	deploy_link?: string;
	platform?: "Vercel"| "Web" | "Render" | "Github" | "Android"
}[] = [
	{
		name: "Data-Driven Traffic Analysis System for PMC",
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
				color: "gold-text-gradient",
			},
			{
				name: "google-maps-api",
				color: "orange-text-gradient",
			},
			{
				name: "tensorflow",
				color: "purple-text-gradient",
			},
			{
				name: "flask",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/road.webp",
		source_code_link: "https://github.com/ajinkya8010/road-traffic-frontend",
		// platform: "Web",
		// deploy_link: "https://avmauto.in/"
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
				color: "pink-text-gradient",
			},
			{
				name: "flask",
				color: "green-text-gradient",
			},
			{
				name: "openai-api",
				color: "gold-text-gradient",
			},
			{
				name: "mobilenet-v1",
				color: "sunset-text-gradient",
			}
		],
		image: "/projectimg/fish.webp",
		source_code_link: "https://github.com/ajinkya8010/Fish-Species-Iden-ML",
		// platform: "Android",
		// deploy_link: "https://sparkbright.in/",
	},
	{
		name: "HomeSeek: Real Estate Marketplace",
		description:
			"A full-stack real estate platform built with React.js, Node.js, and MongoDB, featuring interactive map-based property listings, advanced filtering, etc. ",
		tags: [
			{
				name: "react.js",
				color: "pink-text-gradient",
			},
			{
				name: "node.js",
				color: "orange-text-gradient",
			},
			{
				name: "mongodb",
				color: "blue-text-gradient",
			},
			{
				name: "prisma",
				color: "green-text-gradient",
			},
			{
				name: "jwt",
				color: "purple-text-gradient",
			},
		],
		image: "/projectimg/realestate.webp",
		source_code_link: "https://github.com/ajinkya8010/real-estate-full-stack-app",
		platform: "Render",
		deploy_link: "https://real-estate-frontend-59om.onrender.com",
	},
	{
		name: "Ecommerce Frontend",
		description:
			"A responsive e-commerce frontend built with React and plain CSS, featuring product listings, cart functionality, and a clean user interface. First project in my journey of web development.",
		tags: [
			{
				name: "react.js",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "orange-text-gradient",
			},
			{
				name: "context-api",
				color: "gold-text-gradient",
			},
			{
				name: "state-management",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/ec.png",
		source_code_link: "https://github.com/ajinkya8010/ECommerce-Frontend-React",
		platform: "Github",
		deploy_link: "https://ajinkya8010.github.io/ECommerce-Frontend-React/",
	},
	{
		name: "RAG App for PDFs",
		description:
			"This is a simple Retrieval-Augmented Generation (RAG) application that allows you to upload a PDF, retrieve the most relevant content using semantic similarity, and generate answers using a lightweight LLM.",
		tags: [
			{
				name: "python",
				color: "blue-text-gradient",
			},
			{
				name: "rag",
				color: "orange-text-gradient",
			},
			{
				name: "streamlit",
				color: "green-text-gradient",
			},
			{
				name: "qdrant-vector-database",
				color: "pink-text-gradient",
			}
		],
		image: "/projectimg/rag.png",
		source_code_link: "https://github.com/ajinkya8010/SIMPLE-RAG-APP",
		platform: "Web",
		deploy_link: "https://huggingface.co/spaces/ajinkya45/SIMPLE-RAG-PDF",
	},
	{
		name: "Auto tab grouper",
		description:
			"Chrome extension that intelligently organizes your open tabs into semantic groups using an LLM. With a single click, it classifies tabs into meaningful categories like “AI Tools”, “News”, “Docs”, “Entertainment”, and more.",
		tags: [
			{
				name: "javascript",
				color: "blue-text-gradient",
			},
			{
				name: "chrome-extension",
				color: "green-text-gradient",
			},
			{
				name: "LLM",
				color: "orange-text-gradient",
			},
			{
				name: "prompt-engineering",
				color: "pink-text-gradient",
			},
			{
				name: "ai-agent",
				color: "purple-text-gradient",
			},
		],
		image: "/projectimg/tabg.png",
		source_code_link: "https://github.com/ajinkya8010/auto-tab-grouper",
		// platform: "Web",
		// deploy_link: "https://project-metaverse-beta.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
