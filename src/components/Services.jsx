import ServiceCard from "./ServiceCard";
import { FaCode } from "react-icons/fa"

const Services = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 mb-8 sm:mb-10 md:mb-16">
        <ServiceCard icon={<FaCode className="text-slate-100 font-bold text-lg xs:text-xl md:text-3xl border-2 border-slate-700 size-fit p-1 rounded-full inline-block mb-2 shadow-sm shadow-sky-100"/>} title={'Software Development'} detail={'qwertyu iopsdfghjkl xcvbnmmnbv cxzlkjhgfdspo iuytrewq hfd shysdaiw ytfd ysesoiwa gtseiehf tysfdf'}/>
    </div>
  )
}

export default Services;