import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";
import { Toaster } from "react-hot-toast";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Ajinkya | Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontSans.variable}>
				<Toaster position="top-right" reverseOrder={false} />
				{children}
			</body>
		</html>
	);
}
