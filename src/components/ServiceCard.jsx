

// eslint-disable-next-line react/prop-types
const ServiceCard = ({icon, title, detail}) => {
  return (
    <div className="bg-inherit p-2 sm:p-4 border-2 border-slate-700">
       { icon }
       <h2 className="bg-clip-text text-transparent bg-gradient-to-br from-blue-800 via-sky-400 to-blue-800 font-semibold sm:font-bold text-xs md:text-sm my-2">{title}</h2>
       <p className="text-sky-200 text-xs md:text-sm">{detail}</p>
    </div>
  )
}

export default ServiceCard;