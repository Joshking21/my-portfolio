// 'use client'

// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import { useEffect } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/navigation/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// What shows in the browser tab, Google results and link previews
// (WhatsApp, LinkedIn, X). Update the URL once the site has its domain.
export const metadata = {
  // Netlify sets URL automatically at build time; NEXT_PUBLIC_SITE_URL overrides it
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || "http://localhost:3000"),
  title: {
    default: "JayBobo · Full-Stack Developer",
    template: "%s · JayBobo",
  },
  description:
    "JayBobo (Oduoma Joshua Ogorchukwu) is a full-stack developer from Nigeria building websites, web apps and mobile apps for businesses and founders. Open to new projects, working remotely.",
  authors: [{ name: "Oduoma Joshua Ogorchukwu" }],
  openGraph: {
    title: "JayBobo · Full-Stack Developer",
    description: "Websites, web apps and mobile apps for businesses and founders. Open to new projects.",
    images: ["/mine.PNG"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JayBobo · Full-Stack Developer",
    description: "Websites, web apps and mobile apps for businesses and founders.",
    images: ["/mine.PNG"],
  },
};

export default function RootLayout({ children }) {
// useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration in ms
//       once: true,     // whether animation should happen only once
//     });
//   }, []);}


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
