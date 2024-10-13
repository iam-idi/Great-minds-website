import Slider from "./Slider";
import worldmap from "../assets/images/worldmap.webp";

const Partners = () => {
  return (
    <section className="mb-10 sm:mb-20">
        <h2 className="text-xl xs:text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-50 via-sky-900 to-sky-50 font-bold xs:font-extrabold text-center">
            Our Partners
        </h2>
        <p className="text-center text-xs sm:text-sm font-bold text-sky-200 my-4">We have formidable partners from across several industries.</p>
        <Slider />
        <div className="mt-12 sm:mt-16">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-sky-50 via-sky-900 to-sky-50 text-xl font-bold sm:text-2xl text-center mb-8 xs:mb-10 sm:mb-12">Our presence has reach every corner of the globe</h3>
            <img src={worldmap} alt="world map" className="w-full max-w[900px] h-44 xs:h-52 sm:h-60 md:h-80 xl:h-[25rem]" />
        </div>
    </section>
  )
}

export default Partners;