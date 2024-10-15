

const ContactSection = () => {
  return (
    <swction className="mb-10 sm:mb-20 px-10 sm:px-0">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-sky-50 via-sky-900 to-sky-50 text-xl font-bold sm:text-2xl text-center mb-6 xs:mb-8 sm:mb-10">Talk To Us</h3>
        
        <form className="mt-0 mb-8 xs:mb-10 sm:mb-12 mx-auto w-85% sm:w-[80%] md:w-[65%] xl:w-[50%] flex flex-col gap-4">
            <input name="name" placeholder="Name" className="w-full bg-inherit border-b-2 sm:border-b-[3px] lg:border-b-4 border-slate-600 p-2 text-slate-400 text-sm sm:text-base outline-none transform focus:border-sky-500 focus:text-sky-500 focus:placeholder:text-sky-500 focus:caret-sky-500 transition-all"/>
            <input name="email" placeholder="Email" className="w-full bg-inherit border-b-2 sm:border-b-[3px] lg:border-b-4 border-slate-600 p-2 text-slate-400 text-sm sm:text-base outline-none transform focus:border-sky-500 focus:text-sky-500 focus:placeholder:text-sky-500 focus:caret-sky-500 transition-all"/>
            <input name="phone" placeholder="Phone" className="w-full bg-inherit border-b-2 sm:border-b-[3px] lg:border-b-4 border-slate-600 p-2 text-slate-400 text-sm sm:text-base outline-none transform focus:border-sky-500 focus:text-sky-500 focus:placeholder:text-sky-500 focus:caret-sky-500 transition-all"/>

            <textarea name="message" rows='3' placeholder="Write Your Message..."className="w-full bg-inherit border-b-2 sm:border-b-[3px] lg:border-b-4 border-slate-600 p-2 text-slate-400 text-sm sm:text-base outline-none transform focus:border-sky-500 focus:text-sky-500 focus:placeholder:text-sky-500 focus:caret-sky-500 transition-all">
            </textarea>
        </form>
    </swction>
  )
}

export default ContactSection;