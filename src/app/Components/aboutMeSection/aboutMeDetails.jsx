import { AboutMeDetails } from "@/app/lib/userData";

export default function AboutMeDetailsSection() {
  return (
    <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center my-10 gap-6 md:gap-16 w-full max-w-4xl px-4">
      {AboutMeDetails.map((item, index) => (
        <div key={index} className="flex flex-col items-center min-w-[80px] md:min-w-[100px]">
          <span className="border-b-2 border-black font-bold mb-2 uppercase text-[10px] md:text-xs tracking-widest px-1">
            {item.title}
          </span>
          <div className="text-xs md:text-sm text-center font-medium">
            {Array.isArray(item.desc) ? (
              <div className="flex flex-col gap-1">
                {item.desc.map((hobby, i) => (
                  <span key={i} className="block">{hobby}</span>
                ))}
              </div>
            ) : (
              <span>{item.desc}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}