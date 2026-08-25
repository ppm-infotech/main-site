import "../../styles/home.css";
import SEO from "../../components/SEO.js";
import Hero1 from './Hero1.js';
import BusinessSolution from './BusinessSolution.js';
import HomeCounter from './HomeCounter.js';
import OurServices from './OurServices.js';
import WhyChooseUs from './WhyChooseUs.js';
// import {Testimonial} from '../about/Testimonial.js';

// import ProjectSection from './ProjectSection.js';
import ContactSection from './ContactSection.js';
import BlogSection from './BlogSection.js';
import SkilsSection from './SkilsSection.js';
import LetsWorkTogather from './LetsWorkTogather.js';
import PriceSection from './PriceSection.js';
import Faq from "../../components/Faq.js";

export default function HomePage() {
  return (
    <>
      {/* Meta Start */}
      <SEO
        title={'Best Website Development Company in Bhubaneswar | PPM Infotech'}
        description={'PPM Infotech is the Best Web Development Company in Bhubaneswar offering website design, development and digital marketing services for businesses online.'}
        keywords={'Website Design company in Bhubaneswar, Digital Marketing Company in Bhubaneswar, SEO Services in Bhubaneswar, Custom Website Development in  Bhubaneswar, Software Development Company in Bhubaneswar, e-commerce Website Development in Bhubaneswar, Business Intelligence Services in Bhubaneswar, Best ITtraing institute in Odisha, Ai Skill development training near me, Best AI training institute near me'}
        canonical={'https://ppminfotech.com/'}
      />
      {/* Meta End  */}

      <Hero1 />
      <BusinessSolution />
      <LetsWorkTogather />
      <OurServices />
      <SkilsSection />
      <WhyChooseUs />
      <HomeCounter />
      {/* <ProjectSection/> */}
      <PriceSection />
      <ContactSection />
      <BlogSection />
      {/* <Testimonial/> */}
      <Faq />
    </>
  )
}
