import { useEffect } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
const About = () => {

  useEffect(() => {

    window.scrollTo(0, 0)

  }, []);

  return (
    <>
      <h1 className="text-xl xs:text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800 font-bold xs:font-extrabold text-center mt-4 sm:mt-6 md:mt-10 mb-4 sm:mb-6">
        Get To Know Us
      </h1>
      <div className="w-4/5 sm:w-full border-2 border-slate-800 mx-auto mt-0 mb-6 sm:mb-8 md:mb-10"></div>
      <p className="text-slate-400 px-2 xs:px-3 md:px-6 xl:px-8 text-left mt-4 xs:mt-6 sm:mt-8 mb-10 text-base xl:text-xl">
        {/* <span className="block text-center ext-sm xs:text-base md:text-lg text-sky-600 font-bold">About Us – Great Minds Digital World</span> */}
        Welcome to Great Minds
        Digital World, a frontier technology company committed to making a
        lasting impact on humanity and our planet. Located at No. 29/4 Bauchi
        Road, Dogon Agogo, Jos North, Plateau State, Nigeria, we pride
        ourselves on being at the forefront of technological innovation. Our
        work is driven by a deep-rooted passion for developing scalable, secure,
        and human-centric solutions that push the boundaries of what technology
        can do for society.
        <span className="block text-sm xs:text-base md:text-lg text-sky-600 font-bold my-2 sm:my-4">Our Story</span>
        Founded with a vision to bridge the
        gap between technology and sustainability, Great Minds Digital World was
        born out of the belief that tech has the power to reshape our world for
        the better. While many technological advancements focus on solving
        everyday problems, we look beyond the immediate and aim to build
        long-term, transformative solutions that contribute to a brighter, more
        sustainable future. Our journey began with a small team of visionary
        innovators in Jos, Plateau State, and has since grown into a
        multidisciplinary company that is making strides in several key areas of
        technology.
        <span className="block text-sm xs:text-base md:text-lg text-sky-600 font-bold my-2 sm:my-4">Our Mission</span>
        At the heart of Great Minds Digital World is
        a simple yet profound mission: to leverage cutting-edge technology in
        ways that enhance human progress while safeguarding our planet. We
        understand the role technology plays in modern life, from improving
        communication to optimizing processes, and from empowering individuals
        to driving global change. That’s why we are focused on developing
        products and services that are not only innovative but also ethically
        responsible, ensuring that our impact is both positive and sustainable.
        <br/><br/>
        We believe that technology should serve as a tool for development,
        empowerment, and preservation. Our mission is to provide secure,
        scalable, and user-friendly solutions that meet the needs of a diverse
        and evolving global landscape. From developing software that improves
        access to education and healthcare to building secure systems that
        protect user data and privacy, we are committed to creating technologies
        that matter. 
        <span className="block text-sm xs:text-base md:text-lg text-sky-600 font-bold my-2 sm:my-4">Our Vision</span>
        Our vision is to become a global leader in
        technology, known for pushing the envelope of innovation while promoting
        sustainable practices. We envision a world where technology and the
        environment exist in harmony, where the benefits of technological
        progress are felt by all, and where businesses, individuals, and
        ecosystems thrive together. At Great Minds Digital World, we see
        ourselves as more than just a tech company; we are a catalyst for
        meaningful change. 
        <br/><br/>
        We aim to lead in the development of green
        technologies, ethical AI, and secure solutions that not only advance
        industries but also help preserve the world we live in. By aligning
        technology with global goals for sustainability and human development,
        we strive to inspire a new era of responsible innovation that benefits
        future generations.
        <span className="block text-sm xs:text-base md:text-lg text-sky-600 font-bold my-2 sm:my-4">Our Core Values</span>
        At Great Minds Digital World,
        our core values guide every decision we make and every solution we
        build. These values are the foundation upon which our company operates
        and reflects our commitment to excellence, sustainability, and social
        impact

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Innovation: </span>
          We are constantly pushing the boundaries of
          what is possible, exploring new ideas and approaches to solving complex
          problems. Innovation is at the core of our operations, and we invest in
          cutting-edge research and development to ensure our solutions are always
          at the forefront of technological advancement.
        </span>

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Sustainability: </span>
          We believe that technological progress should not come at the expense of
          our environment. That’s why we are committed to creating solutions that
          not only meet the needs of today but also protect the resources of
          tomorrow. Sustainability is woven into the fabric of our business, from
          the products we build to the partnerships we form.
        </span>
        
        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Security: </span>
          In a digital age where data breaches and cyber threats are ever-present,
          security is non-negotiable. We prioritize the protection of personal
          information and organizational data, ensuring that our solutions are
          built on robust, state-of-the-art security protocols.
        </span>

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Human-Centric Design: </span>
          At Great Minds Digital World, we put people first. Our
          products and services are designed with the end-user in mind, ensuring
          that our technology enhances lives and empowers communities. We are
          committed to creating tech that is accessible, user-friendly, and responsive to the needs of diverse populations.
        </span>

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Collaboration: </span>
          We understand that the best solutions are born from collaboration. That’s
          why we work closely with our clients, partners, and stakeholders to
          co-create technologies that are not only functional but also meaningful.
          We believe in the power of partnerships to drive greater impact.
        </span>

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Integrity: </span>
          We hold ourselves to the highest ethical standards,
          ensuring that our work reflects honesty, transparency, and
          accountability. We believe in building trust through our actions, and we
          are dedicated to delivering on our promises.
        </span>
        
        <span className="block text-sm xs:text-base md:text-lg text-sky-600 font-bold my-2 sm:my-4">What We Do</span>
        At Great Minds Digital World, we offer a wide range of technological solutions
        aimed at addressing global challenges and improving the quality of life
        for people around the world. Our portfolio includes:

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Software Development: </span>
          We specialize in developing bespoke software solutions
          for various industries, from education and healthcare to finance and
          retail. Our software is designed to be scalable, secure, and tailored to
          meet the unique needs of our clients.
        </span>

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Green Technology Solutions: </span>
          As part of our commitment to sustainability, we are actively involved in
          the development of green technologies that reduce environmental impact.
          This includes innovations in energy efficiency, renewable energy
          systems, and eco-friendly product designs.
        </span>

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Cybersecurity: </span>
          With the increasing threat of cyber-attacks, we provide top-tier cybersecurity
          services that help organizations protect their data, systems, and
          networks from unauthorized access and breaches.
        </span>

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Artificial Intelligence and Machine Learning: </span>
          We are harnessing the power of AI and machine learning to create intelligent systems that can make
          predictions, automate processes, and improve decision-making in real-time.
        </span>

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">IoT and Smart Solutions: </span>
          Our work in the Internet of Things (IoT) is aimed at connecting devices and systems to streamline
          operations and provide real-time insights, helping businesses and individuals optimize efficiency.
        </span>

        <span className="block my-2 px-2 sm:px-4">
          <span className="text-sky-600">Data Analytics: </span>
          We offer advanced data analytics services that help organizations make sense of their
          data, uncover trends, and gain actionable insights that drive business growth and innovation.
        </span>
        
        <span className="block text-sm xs:text-base md:text-lg text-sky-600 font-bold my-2 sm:my-4">Our Location and Community</span> 
        Based in the heart
        of Jos North, Plateau State, Nigeria, Great Minds Digital World is proud
        to call this vibrant community our home. Jos is not only a place of
        natural beauty but also a hub of talent and creativity. We are committed
        to giving back to our community by fostering local talent and providing
        opportunities for young innovators to grow. We actively collaborate with
        local institutions, educational centers, and non-profit organizations to
        contribute to the social and economic development of the region.
        
        <span className="block text-sm xs:text-base md:text-lg text-sky-600 font-bold my-2 sm:my-4">Our Future</span> 
        The future of Great Minds Digital World is one of continued
        growth and impact. As we expand our services and solutions, we are
        excited to explore new frontiers in technology, from artificial
        intelligence to renewable energy. Our goal is to scale our operations
        globally while remaining rooted in our mission to serve humanity and
        preserve our planet.
        <br /><br />
        By investing in cutting-edge research, fostering
        innovation, and building strategic partnerships, we are well-positioned
        to tackle the challenges of tomorrow. We look forward to shaping a
        future where technology enhances lives, drives economic growth, and
        ensures the sustainability of our planet.
      </p>

      <div className='mb-8 sm:mb-16'>

        <h2 className="text-lg xs:text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-sky-400 to-blue-800 font-bold xs:font-extrabold text-center mt-4 sm:mt-6 md:mt-10 mb-2 sm:mb-4">
          FAQ
        </h2>

        <Accordion type='single' collapsible>
      
          <AccordionItem value='1' className='border-sky-200'>
            <AccordionTrigger className='text-slate-400'>
              What services does Great Minds Digital World offer?
            </AccordionTrigger>
            <AccordionContent className='text-slate-400'>
              At Great Minds Digital World, we provide a wide range of technology services designed to address global challenges and meet the needs of various industries. 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='2' className='border-sky-200'>
            <AccordionTrigger className='text-slate-400'>
            How does Great Minds Digital World ensure the security of its technology solutions?
            </AccordionTrigger>
            <AccordionContent className='text-slate-400'>
              Security is a top priority for us at Great Minds Digital World. We use state-of-the-art security protocols and follow best practices to ensure that our software and systems are secure. We implement multi-layered security measures, including:
              <ul className='pl-2'>
                <li className='my-2'>1. Data encryption to protect sensitive information.</li>
                <li className='mb-2'>2. Robust authentication and access controls to prevent unauthorized access.</li>
                <li className='mb-2'>3. Regular security audits and vulnerability assessments to identify and mitigate potential risks.</li>
                <li className='mb-2'>4. Compliance with global cybersecurity standards to ensure that our solutions meet the highest security benchmarks.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='3' className='border-sky-200'>
            <AccordionTrigger className='text-slate-400'>How is Great Minds Digital World contributing to sustainability?</AccordionTrigger>
            <AccordionContent className='text-slate-400'>
            Sustainability is at the core of our business. We are dedicated to developing green technology solutions that reduce environmental impact and promote eco-friendly practices. This includes:
            Innovating in renewable energy systems such as solar and wind power. Designing energy-efficient products that minimize resource consumption. Partnering with organizations focused on environmental protection to create sustainable solutions. Ensuring that our technology solutions are built with a long-term, environmentally responsible approach, aligning with global sustainability goals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='4' className='border-sky-200'>
            <AccordionTrigger className='text-slate-400'>What industries does Great Minds Digital World serve?</AccordionTrigger>
            <AccordionContent className='text-slate-400'>
            We serve a diverse range of industries, including but not limited to; We create e-learning platforms, AI-driven tutoring systems, and tools to enhance educational experiences. Our solutions in healthcare include AI for diagnosis, data management systems, and telemedicine platforms. We provide blockchain-based financial solutions, secure payment gateways, and data analytics for financial institutions. Our services for the retail sector include IoT for inventory management, customer analytics, and digital transformation strategies. We work on developing smart energy solutions and advancing renewable technologies for businesses in the energy sector.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='5' className='border-sky-200'>
            <AccordionTrigger className='text-slate-400'>Where is Great Minds Digital World located, and do you serve clients internationally?</AccordionTrigger>
            <AccordionContent className='text-slate-400'>
            Our headquarters is located at No. 29/4 Bauchi Road, Dogon Agogo, Jos North, Plateau State, Nigeria. While we are proudly rooted in Nigeria, we serve clients globally and are committed to expanding our reach across international markets. Our solutions are designed to be scalable and adaptable to meet the needs of businesses and individuals worldwide.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

      </div>
    </>
  );
};

export default About;