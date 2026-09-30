"use client";

export default function SpotlightCard({
  children,
  className = "",
  innerClassName = "",
  bgClassName = "bg-[#262424]",
  rounded = "rounded-2xl",
  spotlight,
  size,
  ...props
}) {
  return (
    <div
      className={`group relative w-full ${rounded} p-[1px] transition-all duration-300 overflow-hidden ${className}`}
      {...props}
    >
      {/* Base Border */}
      <div className={`absolute inset-0 ${rounded} border border-white/10 pointer-events-none`} />

      {/* Inner Card Surface */}
      <div
        className={`relative h-full w-full ${rounded} ${bgClassName} overflow-hidden`}
      >
        {/* Actual Content */}
        <div className={`relative z-10 h-full w-full ${innerClassName}`}>{children}</div>
      </div>
    </div>
  );
}
