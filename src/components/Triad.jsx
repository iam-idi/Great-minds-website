import { useEffect, useState } from "react";

const Triad = () => {
  let textArr = ['Useful', 'Scalable', 'Secure'];
  let [text, setText] = useState(textArr[0]);
  let [index, setIndex] = useState(0)

  // (() => {
  //   let index = 0;
  //   setInterval(() => {
  //     index = index + 1;
  //   }, 2000);
  //   text = textArr[index];
  //   return text;
  // })()

  
  useEffect(()=>{

      if(index == 2){
        setIndex(0);
      } else if(index == 1){
        setIndex(2);
      } else if(index == 0){
        setIndex(1);
      }
      console.log(text + " " + index)

  }, [text])

  return (
    <div className="relative animate-pulse border-2 border-red-400 w-full h-full" onClick={()=>setText(textArr[index])}>
        <h1 className="text-center absolute bottom-[1%] left-[41%] bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-900 to-sky-400 font-bold text-sm sm:text-base">{text}</h1>
        <div className="w-1 h-44 bg-sky-800 absolute top-10 left-36 rotate-[30deg] blur-[1px]"></div>
        <div className="w-1 h-44 bg-sky-200 absolute top-16 left-60 -rotate-[30deg] blur-[1px]"></div>
        <div className="w-1 h-44 bg-sky-400 absolute bottom-14 left- rotate-90 blur-[1px]"></div>
    </div>
  )
}

export default Triad;

{/* <div className="relative animate-pulse">
        <div className="w-1 h-44 bg-sky-800 absolute -top-32 left-[40%] rotate-[30deg] blur-[2px]"></div>
        <div className="w-1 h-44 bg-sky-200 absolute -top-24 left-[58%] -rotate-[30deg] blur-[2px]"></div>
        <div className="w-1 h-44 bg-sky-400 absolute -top-10 left-[43%] rotate-90 blur-[2px]"></div>
   </div> */}