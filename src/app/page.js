import Image from "next/image";
import HomePageDetails from "./Components/HomePage/page";
import './globals.css'
import AboutMe from "./Components/AbooutMeSection/AboutMe";

export default function Home() {
  return (
     <>
<HomePageDetails/>
<AboutMe/>

 
     </>
  );
}
