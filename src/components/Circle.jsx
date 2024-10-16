const Circle = ({ label }) => {
  return (
    <div className="relative w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 flex items-center justify-center">
      {/* Two-piece border */}
      <div className="absolute w-full h-full rounded-full border-t-4 border-l-4 border-slate-600 animate-spin-slow shadow-none xs:shadow-sm md:shadow-md shadow-slate-400"></div>
      <div className="absolute w-full h-full rounded-full border-b-4 border-r-4 border-sky-600 animate-spin-slow-reverse"></div>
      {/* Text inside the circle */}
      <div className="absolute text-sm sm:text-base md:text-xl font-semibold text-center text-slate-400">{label}</div>
    </div>
  );
};

export default Circle;
