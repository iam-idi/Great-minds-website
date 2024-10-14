import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="break-words bg-inherit border-4 border-sky-900 border-l-0 border-b-0 py-6 sm:py-10 px-2 sm:px-20 md:px-40 rounded-tr-[3rem] sm:rounded-tr-[4rem] md:rounded-tr-[6rem]">
        <div className='flex items-center'>
          <img src={logo} alt="logo" className='inline-block w-12 h-12 sm:w-16 sm:h-16 rounded-full' />
          <Link to='/' className='inline-block text-center font-semibold text-sm sm:text-[18px] lineHeight bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-stone-200'>
            Great Minds <br /> 
            <span className='text-xs sm:text-sm font-medium'>Digital World</span>
          </Link>
        </div>

        <div className="border-2 border-slate-800 w-full mt-2 sm:mt-4"></div>

        <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 text-sky-700 font-bold text-sm sm:text-base py-4 px-4 sm:px-8 lg:px-12">
          <ul>
            <Link to='blogs' className="mb-2 sm:mb-3 block"><li>Blog</li></Link>
            <Link to='about' className="mb-2 sm:mb-3 block"><li>About Us</li></Link>
            <Link to='team' className=""><li>Team</li></Link>
          </ul>

          <div>
            <p className="mb-4 sm:mb-6">No. 29/4 Bauchi Road, Dogon Agogo, Jos North, PLateau State, Nigeria</p>
            <p className="mb-4 sm:mb-6">
              <FaPhone className="font-bold text-base xs:text-lg md:text-xl xl:text-2xl mb-2" />
              <p className="pl-4 mb-2 sm:mb-3 ">+234(0) 816 6699 901</p>
              <p className="pl-4">+234(0) 810 1119 998</p>
            </p>
            <p>
              <FaEnvelope className="font-bold text-base xs:text-lg md:text-xl xl:text-2xl mb-2" />
              <p className="pl-4 mb-2 sm:mb-3 ">greatmindsdigital16@gmail.com</p>
              <p className="pl-4">gmdworld@yahoo.com</p>
            </p>
          </div>

        </div>

        <div className="flex flex-wrap pt-4 pb-4 xs:pt-6 xs:pb-4 gap-6 md:gap-8 xl:gap-12 justify-center items-center text-sky-200 font-bold text-base xs:text-lg md:text-xl xl:text-2xl">
          <Link to='' className="hover:scale-125"><FaTwitter /></Link>
          <Link to='' className="hover:scale-125"><FaLinkedin /></Link>
          <Link to='' className="hover:scale-125"><FaInstagram /></Link>
          <Link to='' className="hover:scale-125"><FaFacebook /></Link>
          <Link to=''><FaEnvelope /></Link>
        </div>

        <div className="border-2 border-slate-800 w-full mt-2 sm:mt-4"></div>

        <h3 className="text-center text-sky-700 font-bold text-xs sm:text-sm lg:text-base p-4">{`Copyright © ${new Date().getFullYear()} Great Minds Digital World`}</h3>  
    </footer>
  )
}

export default Footer;