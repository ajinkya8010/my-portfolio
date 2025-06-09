import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { url } from "inspector";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://ajinkyawalunj.me"),
  title: "Ajinkya Walunj – Full-Stack Developer & AI/ML Enthusiast",
  description:
    "Portfolio of Ajinkya Walunj – Explore full-stack projects, blogs, and AI/ML experiments.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates:{
	canonical: '/',
  },
  openGraph: {
    title: "Ajinkya Walunj – Full-Stack Developer",
    description: "Projects, blog posts, and contact info by Ajinkya Walunj.",
    url: "/",
    siteName: "Ajinkya Walunj Portfolio",
    type: "website",
	images:[
		{
			url: "/og-image.png",
			width:1200,
			height:630,
			alt: 'Ajinkya Walunj Portfolio Preview',
		}
	]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajinkya Walunj – Full-Stack Developer",
    description: "Tech portfolio, AI/ML projects and blog by Ajinkya Walunj.",
    images: ["/og-image.png"],
  },
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
