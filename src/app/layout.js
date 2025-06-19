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

export const metadata = {
  title: "My Portfolio",
  description: "Showcase of my work",
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
