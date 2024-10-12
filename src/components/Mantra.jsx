import MissionVision from "./MissionVision";

const Mantra = () => {
  const mission =
    "lkefjds hdhsjdjs hfhjdks sjskss fjhiygfsdys hg udfhs ussu jssbf jdhsbd dh hfh hdis";
  const vision =
    "hgdfutfg sdgdsyjs sgs ssh oshubcs su ssb fduos aiasb ndifsb sddss shsh shhhshs hfsh";

  return (
    <section className="mb-10 sm:mb-20">
      <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-50 via-sky-950 to-sky-50 font-extrabold text-center">
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
