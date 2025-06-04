import Image from "next/image"
export default function Portfolio(){
    return(
        <div className="flex   flex-col bg-[var(--primary)] items-center text-center ">
            <div className="border-solid border-[2px] pt-[0.2rem] pb-[0.2rem] pl-[2rem] pr-[2rem] bg-blue-300 border-black mt-[3rem] mb-[3rem]">
                PORTFOLIO
            </div>

<div className="bg-black w-full text-white  flex justify-center flex-col items-center ">



            <div className="flex mb-[3rem] mt-[1.5rem] bg-yellow-500 w-full justify-center items-center">
            <div className=" pr-[2rem] pl-[2rem] border-b-solid border-b-[1px] border-b-white ">
                WORK EXPERIENCE
            </div>
             <div className=" pr-[2rem] pl-[2rem] border-b-solid border-b-[1px] border-b-white ">
               PROJECTS
            </div>
            </div>


            <div className="mb-[3rem]">
                <Image src="/Monkey.png" alt="alt" width={450} height={300} />
            </div>




            </div>
        </div>
    )
}