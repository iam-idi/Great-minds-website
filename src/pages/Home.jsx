
import Partners from "../components/Partners";
import Hero from "../components/Hero";
import Mantra from "../components/Mantra";
import Services from "../components/Services";
import BlogPreview from "@/components/BlogPreview";
import ContactSection from "@/components/ContactSection";
const Home = () => {
  return (
    <>
        <Hero />
        <Services />
        <Mantra />
        <Partners />
        <BlogPreview />
        <ContactSection />
    </>
  )
}

export default Home