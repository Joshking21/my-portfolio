import Image from "next/image";
import Link from "next/link";
import TiltCard from "../ui/TiltCard";

export default function Port({ item, onSelect }) {
  return (
    <TiltCard maxTilt={5} scaleOnHover={1.02} className="h-[320px] sm:h-[340px] md:h-[350px] w-full">
      <div 
        onClick={() => onSelect && onSelect(item)}
        className="relative group/card h-full w-full bg-[var(--primary)] overflow-hidden border border-white/10 rounded-xl cursor-pointer"
      >
      {/* Card Visual Presentation */}
      {item.screenshots && item.screenshots.length > 0 ? (
        <>
          {/* Ambient blurred backdrop matching the app's colors */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={item.projectImage}
              alt=""
              fill
              sizes="100px"
              className="object-cover blur-2xl opacity-40 scale-125"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Unstretched, perfectly-sized mobile screen display */}
          <div className="relative w-full h-full p-3 sm:p-4 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[200px] max-h-[310px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={item.projectImage}
                alt={item.projectName}
                fill
                sizes="(max-width: 768px) 200px, 220px"
                className="object-contain object-center transition-transform duration-500 group-hover/card:scale-105"
                priority
              />
            </div>
          </div>
        </>
      ) : (
        /* Standard landscape cover for desktop web projects */
        <Image
          src={item.projectImage}
          alt={item.projectName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover/card:scale-110"
        />
      )}

      {/* Multiple Screens Indicator Badge */}
      {item.screenshots && item.screenshots.length > 0 && (
        <div className="absolute top-3 left-3 z-20">
          <span className="text-[9px] font-extrabold uppercase tracking-wider bg-black/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md border border-white/20 shadow-md flex items-center gap-1.5">
            <span>📱</span>
            <span>{item.screenshots.length} App Screens</span>
          </span>
        </div>
      )}
      
      {/* Overlay: 
          Mobile: Always shows a slight gradient at the bottom so text is readable
          Desktop: Fully transparent until hovering THIS specific card 
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:bg-black lg:from-transparent lg:opacity-0 lg:group-hover/card:opacity-90 transition-opacity duration-500 z-10" />

      {/* Content:
          Mobile: Visible by default but positioned at the bottom
          Desktop: Hidden until hovering THIS specific card
      */}
      <div className="relative z-20 h-full flex flex-col justify-end p-4 sm:p-5 text-[var(--primary)] 
                      lg:opacity-0 lg:group-hover/card:opacity-100 transition-all duration-500 
                      translate-y-0 lg:translate-y-4 lg:group-hover/card:translate-y-0">
        
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <h3 className="font-extrabold text-xl sm:text-2xl">{item.projectName}</h3>
          <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-2 py-0.5 rounded border border-white/30 text-white shrink-0">
            DETAILS ↗
          </span>
        </div>
        
        {/* Hide details on very small mobile to save space, show on hover or larger screens */}
        <p className="text-xs md:text-sm mb-4 line-clamp-2 lg:line-clamp-3 opacity-90">
          {item.projectDetails}
        </p>
        
        <div className="flex items-center justify-between gap-2 mt-1">
          <div className="flex items-center gap-3">
            {item.projectGitHubLink && (
              <Link
                href={item.projectGitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors shrink-0"
                aria-label="GitHub Repository"
              >
                <Image src="/gitHubWhite.png" alt="GitHub" width={18} height={18} />
              </Link>
            )}
            {item.projectLink ? (
              <Link
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-bold border-l-2 border-r-2 border-white px-3 py-1 hover:bg-white hover:text-black transition-all"
              >
                PREVIEW
              </Link>
            ) : (
              <span className="text-xs font-bold border-l-2 border-r-2 border-white/40 px-3 py-1 opacity-50 cursor-not-allowed">
                PREVIEW
              </span>
            )}
          </div>

          {/* Stacks by the side of preview */}
          {item.projectLanguagesSource && item.projectLanguagesSource.length > 0 && (
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-white/20">
              {item.projectLanguagesSource.map((iconSrc, idx) => (
                <div key={idx} className="relative w-4 h-4 sm:w-5 sm:h-5">
                  <Image
                    src={iconSrc}
                    alt="tech stack"
                    fill
                    sizes="20px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          )}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}