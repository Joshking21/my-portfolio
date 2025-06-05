import Image from "next/image";
import HomePageDetails from "./Components/homePage/page";
import './globals.css'
import AboutMe from "./Components/aboutMeSection/aboutMe";
import Skills from "./Components/skillsPage/skills";
import Portfolio from "./Components/portfolioFolder/portfolio";

export default function Home() {
  return (
     <div className="bg-[var(--primary)]">
<HomePageDetails/>
<AboutMe/>
<Skills/>
<Portfolio/>

 
     </div>
  );
}
