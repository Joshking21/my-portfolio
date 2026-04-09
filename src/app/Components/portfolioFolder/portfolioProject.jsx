import Image from "next/image";
import Link from "next/link";

export default function Port({ item }) {
  return (
    <div className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-2 transition-all duration-500">
      <div className="relative group h-[400px] w-full bg-[var(--primary)] overflow-hidden border border-white/10 rounded-xl">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${item.projectImage})` }}
        ></div>
        
        {/* Overlay: 
            Mobile: Always shows a slight gradient at the bottom so text is readable
            Desktop: Fully transparent until hover 
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:bg-black lg:from-transparent lg:opacity-0 lg:group-hover:opacity-90 transition-opacity duration-500 z-10"></div>

        {/* Content:
            Mobile: Visible by default but positioned at the bottom
            Desktop: Hidden until hover
        */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6 text-[var(--primary)] 
                        lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 
                        translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
          
          <h3 className="font-extrabold text-2xl mb-2">{item.projectName}</h3>
          
          {/* Hide details on very small mobile to save space, show on hover or larger screens */}
          <p className="text-xs md:text-sm mb-4 line-clamp-2 lg:line-clamp-3 opacity-90">
            {item.projectDetails}
          </p>
          
          <div className="flex gap-4 items-center">
            <Link href={item.projectGitHubLink} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Image src="/gitHubWhite.png" alt="GitHub" width={20} height={20} />
            </Link>
            <Link href={item.projectLink} className="text-xs font-bold border-l-2 border-r-2 px-4 hover:bg-white hover:text-black transition-all">
              PREVIEW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}