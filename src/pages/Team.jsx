import { useEffect } from "react";

import { Link } from "react-router-dom";
import teamData from "../../data/team";
import { FaLink, FaLinkedin, FaTwitter } from "react-icons/fa";
const Team = () => {

  useEffect(() => {

    window.scrollTo(0, 0)

  }, []);

  return (
    <>
      <h1 className="text-xl xs:text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800 font-bold xs:font-extrabold text-center mt-4 sm:mt-6 md:mt-10 mb-4 sm:mb-6">Meet Our Team</h1>
      <div className="w-4/5 sm:w-full border-2 border-slate-800 mx-auto mt-0 mb-2 sm:mb-4"></div>

      <h2 className="text-center text-slate-400 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base font-semibold sm:font-bold">Meet the talented individuals that have dedicated their time, knowledge & effort for the betterment of life</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 auto-rows-fr gap-2 sm:gap-3 mb-8 xs:mb-10 md:mb-14">
        {teamData.map((team, index) => (

          <div key={index} className="mb-1 sm:mb-2 text-center">
            
            <img src={team.photo} alt='' className="w-24 xs:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 my-0 mx-auto rounded-full" />
            <h2 className="break-words text-sm xs:font-semibold xl:text-base text-sky-100">{team.name}</h2>
            <h3 className="break-words text-sm xl:text-base text-slate-300">{team.position}</h3>

            <div className="flex gap-4 md:gap-6 xl:gap-8 justify-center items-center text-slate-400 font-semibold md:font-bold text-base xl:text-lg mt-2">
              <Link to={team.links.twitter} className="hover:scale-125"><FaTwitter /></Link>
              <Link to={team.links.linkedin} className="hover:scale-125"><FaLinkedin /></Link>
              <Link to={team.links.website} className="hover:scale-125"><FaLink /></Link>
            </div>

          </div>

        ))}
      </div>

    </>
  )
}

export default Team;