import Image from "next/image"
import { SocialLink } from "@/app/lib/User.SkillsData"
import { ExploreItems } from "@/app/lib/User.data."
export default function HomePersonalDetails(){
return(
    <div className="flex mt-[5rem]">
    <div className="w-1/2  flex flex-col items-center text-left pt-[2rem] text-[2rem] mt-[2rem]">
    <div className="mb-[6rem]">
        <div className="mb-[2rem] font-semibold">Hi, I am</div>
        <div className="font-bold"> Joshua Oduoma</div>
        <div className="font-semibold  font-sans text-[1rem]">Front-end Developer</div>
</div>
<div className="flex mb-[3rem]">
{
    SocialLink.map((item,index) =>(
        <div key={index} className="mr-[1.5rem]">
<Image className=""  src={item.photosource} alt={item.alt} width={30} height={
    index === 0? 30: 10
} />

</div>
)
)}

    


    {/* <Image src="/icons8-facebook.svg" alt="alt" width={30} height={30} />
    <Image src="/Github.png" alt="alt" width={30} height={10} />
    <Image src="/Twitter.png" alt="alt" width={30} height={10} /> */}
</div>

    </div>

    <div>
        <Image src="/" alt="alt" width={20} height={20} />
    </div>





    </div>
)
}