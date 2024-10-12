// eslint-disable-next-line react/prop-types
const MissionVision = ({title, content}) => {
  return (
    <div className="relative">
        <div className="p-2 bg-sky-300 rounded-full absolute top-1/2 left-1/2 animate-bounce"></div>
        <div className="p-2 bg-sky-300 rounded-full absolute top-1/3 left-1/3 animate-bounce"></div>
        <div className="p-2 bg-sky-300 rounded-full absolute top-3/4 left-3/4 animate-bounce"></div>
        <div className="p-2 bg-sky-300 rounded-full absolute top-1/4 left-1/4 animate-bounce"></div>
        <div className="bg-transparent backdrop-blur-sm shadow-md sm:hover:scale-105 shadow-sky-800 p-2 sm:p-4 rounded-md md:rounded-lg mt-3 sm:mt-4 min-h-fit md:min-h-40">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-br from-blue-800 via-sky-400 to-blue-800 font-semibold sm:font-bold text-sm md:text-base mb-2">{title}</h3>
            <p className="text-sky-200 text-sm md:text-base">{content}</p>
        </div>
    </div>
  )
}

export default MissionVision;