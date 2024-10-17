import { useEffect } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {

  useEffect(() => {

    window.scrollTo(0, 0)

  }, []);

  return (
    <div className="flex justify-center items-center flex-col bg-slate-900 min-h-screen">
        <h1 className="animate-pulse text-4xl sm:text-6xl font-extrabold text-sky-700 text-center mb-2 sm:mb-4">404</h1>
        <ClimbingBoxLoader color="#0c4a6e" cssOverride={{margin:'15px auto'}} />
        <h2 className="text-sm sm:text-base font-semibold sm:font-bold text-sky-700 text-center mb-4">Page not found</h2>
        <Link to='/' className='flex justify-center items-center gap-4 border-b-2 border-sky-300 pb-2'>
            <p className='text-sm sm:text-base font-semibold sm:font-bold text-sky-200'>Click To Go Home</p>
            <FaHome className='text-xl text-sky-200' />
        </Link>
    </div>
  )
}

export default NotFound;