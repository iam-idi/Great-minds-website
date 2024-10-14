import MissionVision from "./MissionVision";

const Mantra = () => {
  const mission =
    "We are dedicated to creating scalable, secure and innovative solutions that address global challenges, drive sustainable development and empower communities.";
  const vision =
    "We strive to inspire a world where technology and sustainability coexist, ensuring a brighter, more connected and sustainable future for generations to come.";

  return (
    <section className="mb-10 sm:mb-20">
      <h2 className="text-xl xs:text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-50 via-sky-950 to-sky-50 font-bold xs:font-extrabold text-center">
        We Are Professionals With Strong Values
      </h2>
      <p className="text-center text-xs sm:text-sm font-bold text-sky-200 my-4">
        Our core values push us to deliver services efficiently with precision,
        focus & dedication. Thus, we craft skill & time honored products.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-7 sm:mt-14">
        <MissionVision title={"Mission"} content={mission} />
        <MissionVision title={"Vision"} content={vision} />
      </div>
    </section>
  );
};

export default Mantra;
