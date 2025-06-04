import Image from "next/image";
import HomePageDetails from "./Components/HomePage/page";
import './globals.css'
import AboutMe from "./Components/AbooutMeSection/AboutMe";
import Skills from "./Components/SkillsPage/Skills";
import Portfolio from "./Components/PortfolioForlder/Portfolio";

export default function Home() {
  return (
     <>
<HomePageDetails/>
<AboutMe/>
<Skills/>
<Portfolio/>

 
     </>
  );
}
