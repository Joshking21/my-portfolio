import Image from "next/image"
import { SocialLink } from "../lib/userSkillsData"
import { SocialImage } from "../Components/personalDetails/personalDetails"
export default function Footer(){
    return(
        <div className="bg-black flex flex-col justify-center items-center text-[var(--primary)] text-[0.7rem] ">
            <div className="">
                <button className="flex items-center justify-center flex-col">
                    <Image src="/" alt="alt" width={10} height={10} />
                    <p>BACK TO THE TOP</p>
                </button>
            </div>
            <div className="flex">
<SocialImage SocialPhotos={SocialLink}/>
            </div>
            <div>
                 &copy; 2025 <span className="font-extrabold">J.BOBO</span> All rights reserved.
            </div>

        </div>
    )
}