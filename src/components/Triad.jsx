import { useEffect, useState } from "react";

const Triad = () => {
  let textArr = ['Useful', 'Scalable', 'Secure'];
  let [text, setText] = useState(textArr[0]);
  let index = 0;
  
  useEffect(()=>{

      const interval = setInterval(() => {

        index = (index + 1) % textArr.length;

        setText(textArr[index]);

      }, 3000);

      return () => clearInterval(interval);
  }, [])

  return (
    <div className="relative animate-pulse w-full h-full">
        <h1 className="text-center absolute top-36 left-[10rem] bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-900 to-sky-400 font-bold text-sm sm:text-base">{text}</h1>
        <div className="w-1 h-44 bg-sky-800 absolute top-10 left-36 rotate-[30deg] blur-[1px]"></div>
        <div className="w-1 h-44 bg-sky-200 absolute top-14 left-60 -rotate-[30deg] blur-[1px]"></div>
        <div className="w-1 h-44 bg-sky-400 absolute top-32 left-44 rotate-90 blur-[1px]"></div>
    </div>
  )
}

export default Triad;