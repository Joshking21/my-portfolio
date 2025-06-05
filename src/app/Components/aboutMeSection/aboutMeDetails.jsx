import { AboutMeDetails } from "@/app/lib/user.data";

export default function AboutMeDetailsSection() {
  return (
    <div className="flex mt-[2rem] mb-[2rem]">
      {AboutMeDetails.map((items, index) => (
        <div key={index} className="mr-[1rem]">
          <div className="border-b-solid border-b-black border-b-[2px] font-bold">
            {items.title}{" "}
          </div>
          <div>{items.desc}</div>

          {/* {items.desc}=[]?<div className=""> {items.desc.map((item,index) => (
                    <div key={index}> {item}</div>
                 ))}</div>:<div>{items.desc}</div>

                */}
        </div>
      ))}
    </div>
  );
}
