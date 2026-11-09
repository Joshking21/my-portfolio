import { Space_Mono, Caveat, Syne } from "next/font/google";

// Main site font (also applied to portaled overlays like the project modal)
export const syne = Syne({ weight: "400", subsets: ["latin"], display: "swap" });

// Typewriter text for the "office" pieces (case files, receipt, employment record)
export const typewriter = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

// Handwriting (signature on the employment record)
export const handwriting = Caveat({ weight: "600", subsets: ["latin"], display: "swap" });
