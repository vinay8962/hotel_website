import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import TestimonialSection from "../components/TestimonialSection";
import PromotionalVideo from "../components/PromotionalVideo";
import FacilitiesSection from "../components/FacilitiesSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PromotionalVideo />
      <ServiceSection />
      <TestimonialSection />
      <FacilitiesSection />
    </div>
  );
};

export default Home;
