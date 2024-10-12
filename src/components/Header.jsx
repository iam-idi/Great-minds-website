import {Link, NavLink} from 'react-router-dom';
import logo from "../assets/images/logo.png"
const Header = () => {
  return (
    <header className='flex justify-between items-center flex-row px-2 sm:px-20 md:px-40 pt-2 sm:pt-6 bg-transparent backdrop-blur-md fixed top-0 w-full'>
      <div className='flex justify-center items-center'>
        <img src={logo} alt="logo" className='inline-block w-12 h-12 sm:w-16 sm:h-16 rounded-full' />
        <Link to='/' className='inline-block text-center font-semibold text-sm sm:text-[18px] lineHeight bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-stone-200'>
          Great Minds <br /> 
          <span className='text-xs sm:text-sm font-medium'>Digital World</span>
        </Link>
      </div>
      <ul className='text-[13px] md:text-sm lg:text-sm text-sky-200 sm:font-semibold flex md:gap-6 sm:gap-4 gap-2'>
        {/* <NavLink to='#productsServices' className='hover:text-gray-800 transform sm:hover:scale-105'>Products & Services</NavLink> */}
        <NavLink to='blogs' className='hover:text-slate-200 transform sm:hover:scale-105'>Blog</NavLink>
        <NavLink to='about' className='hover:text-slate-200 transform sm:hover:scale-105'>About Us</NavLink>
        {/* <NavLink to='#contactUs' className='hover:text-gray-800 transform sm:hover:scale-105'>Contact Us</NavLink> */}
        <NavLink to='team' className='hover:text-slate-200 transform sm:hover:scale-105'>Team</NavLink>
      </ul>
    </header>
  )
}

export default Header;