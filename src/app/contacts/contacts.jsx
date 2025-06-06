import ContactForm from "./contactForm";
import MotionFadeInSection from "../framerMotion/motion";

export default function Contacts(){
    return(
        <MotionFadeInSection>
<div className=" flex flex-col items-center justify-center p-[2rem]">
    <div className="p-[0.5rem] pl-[2rem] pr-[2rem] rounded-[2px] border-[3px] border-solid border-black mb-[2rem]">
        CONTACT
    </div>
    <ContactForm/>
    
</div>
</MotionFadeInSection>
    )
}