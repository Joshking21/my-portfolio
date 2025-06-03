import Image from "next/image"
export default function HomePersonalDetails(){
return(
    <div className="flex mt-[5rem]">
    <div className="w-1/2 bg-blue-600 flex flex-col items-center text-left pt-[2rem] text-[2rem] mt-[2rem]">
    <div className="mb-[6rem]">
        <div className="mb-[2rem] font-semibold">Hi, I am</div>
        <div className="font-bold"> Joshua Oduoma</div>
        <div className="font-semibold  font-sans text-[1rem]">Front-end Developer</div>
</div>
<div className="flex mb-[3rem]">
    <Image src="/" alt="alt" width={10} height={10} />
    <Image src="/" alt="alt" width={10} height={10} />
    <Image src="/" alt="alt" width={10} height={10} />
</div>

    </div>

    <div>
        <Image src="/" alt="alt" width={20} height={20} />
    </div>





    </div>
)
}