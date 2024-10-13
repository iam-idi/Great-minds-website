import {Link, NavLink} from 'react-router-dom';
import logo from "../assets/images/logo.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "./ui/dropdown-menu";
import { FaBars } from 'react-icons/fa';
const Header = () => {
  return (
    <header className='flex justify-between items-center flex-row px-4 xs:px-10 sm:px-20 md:px-32 lg:px-40 pt-2 sm:pt-6 bg-transparent backdrop-blur-md fixed top-0 z-10 w-full'>
      <div className='flex justify-center items-center'>
        <img src={logo} alt="logo" className='inline-block w-12 h-12 sm:w-16 sm:h-16 rounded-full' />
        <Link to='/' className='inline-block text-center font-semibold text-sm sm:text-[18px] lineHeight bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-stone-200'>
          Great Minds <br /> 
          <span className='text-xs sm:text-sm font-medium'>Digital World</span>
        </Link>
      </div>
      <ul className='text-[13px] md:text-sm lg:text-sm text-sky-200 sm:font-semibold hidden md:gap-6 sm:gap-4 gap-2 sm:flex'>
        {/* <NavLink to='#productsServices' className='hover:text-gray-800 transform sm:hover:scale-105'>Products & Services</NavLink> */}
        <NavLink to='blogs' className='hover:text-slate-200 transform sm:hover:scale-105'>Blog</NavLink>
        <NavLink to='about' className='hover:text-slate-200 transform sm:hover:scale-105'>About Us</NavLink>
        {/* <NavLink to='#contactUs' className='hover:text-gray-800 transform sm:hover:scale-105'>Contact Us</NavLink> */}
        <NavLink to='team' className='hover:text-slate-200 transform sm:hover:scale-105'>Team</NavLink>
      </ul>
      <div className="block sm:hidden border-none">
        <DropdownMenu>
          <DropdownMenuTrigger><FaBars className='text-sky-500 text-xl xs:text-2xl'/></DropdownMenuTrigger>
            <DropdownMenuContent className="text-sky-200 bg-transparent backdrop-blur-lg shadow-lg shadow-sky-800 border border-slate-400">
              <DropdownMenuItem>
                <NavLink to='blogs' className=''>Blog</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to='about' className=''>About Us</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to='team' className=''>Team</NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header;