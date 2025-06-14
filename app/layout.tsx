
// import { Poppins as FontSans } from "next/font/google";
// import "@/app/styles/globals.css";
// import { Toaster } from "react-hot-toast";
// import Script from "next/script";


// const fontSans = FontSans({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-sans",
// });

// export const metadata = {
//   metadataBase: new URL("https://ajinkyawalunj.me"),
//   title: "Ajinkya Walunj – Full-Stack Developer & AI/ML Enthusiast",
//   description:
//     "Portfolio of Ajinkya Walunj – Explore full-stack projects, blogs, and AI/ML experiments.",
//   icons: {
//     icon: "/favicon.ico",
//   },
//   alternates:{
// 	canonical: '/',
//   },
//   openGraph: {
//     title: "Ajinkya Walunj – Full-Stack Developer",
//     description: "Projects, blog posts, and contact info by Ajinkya Walunj.",
//     url: "/",
//     siteName: "Ajinkya Walunj Portfolio",
//     type: "website",
// 	images:[
// 		{
// 			url: "/og-image.png",
// 			width:1200,
// 			height:630,
// 			alt: 'Ajinkya Walunj Portfolio Preview',
// 		}
// 	]
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Ajinkya Walunj – Full-Stack Developer",
//     description: "Tech portfolio, AI/ML projects and blog by Ajinkya Walunj.",
//     images: ["/og-image.png"],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={fontSans.variable}>
//         <Toaster position="top-right" reverseOrder={false} />
// 		{/* Google Analytics */}
//         <Script src="https://www.googletagmanager.com/gtag/js?id=G-38Y469610K" strategy="afterInteractive" />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-38Y469610K');
//           `}
//         </Script>
//         {children}
//       </body>
//     </html>
//   );
// }


import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-sans",
  display: "swap", // Add font-display: swap for better performance
  preload: true, // Ensure font is preloaded
});

export const metadata = {
  metadataBase: new URL("https://ajinkyawalunj.me"),
  title: "Ajinkya Walunj – Full-Stack Developer & AI/ML Enthusiast",
  description:
    "Portfolio of Ajinkya Walunj – Explore full-stack projects, blogs, and AI/ML experiments.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ajinkya Walunj – Full-Stack Developer",
    description: "Projects, blog posts, and contact info by Ajinkya Walunj.",
    url: "/",
    siteName: "Ajinkya Walunj Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
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
      <head>
        {/* Preload critical font weights for hero text */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${fontSans.variable} font-sans`}>
        <Toaster position="top-right" reverseOrder={false} />
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-38Y469610K" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-38Y469610K');
          `}
        </Script>
        
        {children}
      </body>
    </html>
  );
}
