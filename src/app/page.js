import Image from "next/image";
import HomePageDetails from "./Components/homePage/homePage";
import './globals.css'
import AboutMe from "./Components/aboutMeSection/aboutMe";
import Skills from "./Components/skillsPage/skillsPage";
import Portfolio from "./Components/portfolioFolder/portfolio";
import Contacts from "./contacts/contacts";
import Footer from "./footer/footer";

export default function Home() {
  return (
     <div className="bg-[var(--primary)]">
<HomePageDetails/>
<AboutMe/>
<Skills/>
<Portfolio/>
<Contacts/>
<Footer/>

 
     </div>
  );
}
