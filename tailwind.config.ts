import type { Config } from "tailwindcss";
import  { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			colors: {
				primary: "#050816",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/herobg.webp')",
			},
			animation: {
        		wiggle: 'wiggle 0.3s ease-in-out',
      		},
      		keyframes: {
        		wiggle: {
          			'0%, 100%': { transform: 'rotate(-3deg)' },
          			'50%': { transform: 'rotate(3deg)' },
        		},
      		},
		},
	},
	plugins: [
  		require('@tailwindcss/typography'),
	],

};
export default config;
