import RotatingCircles from "./RotatingCircles";

const Hero = () => {
  return (
    <section className="min-h-[50vh] py-4 sm:py-20 grid sm:grid-cols-2 grid-cols-1 gap-12 md:gap-4 justify-center items-center">
      <div className="text-center sm:text-left">
        <h1 className="font-bold xs:font-extrabold text-2xl xs:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-blue-800 via-sky-400 to-blue-800 leading-8 xs:leading-10 mb-2 xs:mb-4">Building Scalable Technologies For Human Development</h1>
        <h2 className="text-sky-200 text-sm xs:text-base">
            Great minds digital world is a frontier Technological company that has
            strong focus on developing humanity & preserving our planet by building scalable, useful and
            secure solutions
        </h2>
        <button className="p-[6px] xs:p-2 text-[10px] xs:text-xs border-2 border-sky-400 rounded-full text-sky-200 my-4 hover:bg-sky-400 hover:text-blue-900">
            Get Started
        </button>
      </div>
      <RotatingCircles />
    </section>
  );
};

export default Hero;
