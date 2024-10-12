import Slider from "./Slider";

const Partners = () => {
  return (
    <section className="mb-10 sm:mb-20">
        <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-50 via-sky-900 to-sky-50 font-extrabold text-center">
            Our Partners
        </h2>
        <p className="text-center text-xs sm:text-sm font-bold text-sky-200 my-4">We have formidable partners from across several industries.</p>
        <Slider />
    </section>
  )
}

export default Partners;