export default function WorkExp({ item }) {
  return (
    <div className="min-w-full lg:min-w-[33.33%] px-4 text-left border-r border-white/20">
      <div className="flex flex-col h-full">
        <span className="font-bold text-sm text-gray-400 mb-2">{item.ExperienceTime}</span>
        <div className="border-l-2 border-white pl-4">
          <h3 className="font-bold text-xl mb-2">{item.ExperienceName}</h3>
          <span className="px-2 py-1 border border-white rounded text-xs inline-block mb-4">
            {item.ExperiencePlace}
          </span>
          <p className="text-sm leading-relaxed opacity-80">
            {item.ExperienceDetails}
          </p>
        </div>
      </div>
    </div>
  );
}