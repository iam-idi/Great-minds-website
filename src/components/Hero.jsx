import Triad from "./Triad";

const Hero = () => {
  return (
    <section className="min-h-[50vh] px-2 sm:px-20 md:px-40 py-4 sm:py-20 grid sm:grid-cols-2 grid-cols-1 sm:gap-2 md:gap-4 justify-center items-center">
      <div className="text-center sm:text-left">
        <h1 className="font-bold sm:font-extrabold text-2xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-blue-800 via-sky-400 to-blue-800 leading-8 sm:leading-10 mb-2 sm:mb-4">Building Scalable Technologies For Human Development</h1>
        <h2 className="text-sky-200 text-sm sm:text-base">
            Great minds digital world is a frontier Technological company that has
            strong focus on developing humanity & preserving our planet by building scalable, useful and
            secure solutions
        </h2>
        <button className="p-[6px] sm:p-2 text-[10px] sm:text-xs border-2 border-sky-400 rounded-full text-sky-200 my-2 sm:my-4 hover:bg-sky-400 hover:text-blue-900">
            Get Started
        </button>
      </div>
      <Triad />
    </section>
  );
};

export default Hero;
