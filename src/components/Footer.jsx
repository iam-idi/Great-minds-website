import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <div className="bg-inherit border-2 border-sky-400 border-l-0 border-b-0 py-6 sm:py-10 px-2 sm:px-20 md:px-40 rounded-tr-[3rem] sm:rounded-tr-[4rem] md:rounded-tr-[6rem] min-h-[40vh]">
      <div className='flex items-center'>
        <img src={logo} alt="logo" className='inline-block w-12 h-12 sm:w-16 sm:h-16 rounded-full' />
        <Link to='/' className='inline-block text-center font-semibold text-sm sm:text-[18px] lineHeight bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-stone-200'>
          Great Minds <br /> 
          <span className='text-xs sm:text-sm font-medium'>Digital World</span>
        </Link>
      </div>

    </div>
  )
}

export default Footer;