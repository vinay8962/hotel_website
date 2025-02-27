import Image1 from "../assets/restaurant/1.jpg";
import Image2 from "../assets/spa/3.jpg";
import Image3 from "../assets/spa/2.jpg";
import Image4 from "../assets/spa/1.jpg";
import styled from "styled-components";
import { motion } from "motion/react";

const ServiceSection = () => {
  const services = [
    {
      title: "The Restaurant",
      subtitle: "Discover",
      description:
        "Experience fine dining at its best with our exquisite menu, curated by world-class chefs. Indulge in flavors that redefine luxury and comfort.",
      image: Image1,
      reverse: false,
    },
    {
      title: "Spa Center",
      subtitle: "Experiences",
      description:
        "Relax and rejuvenate at our luxurious spa, where tranquility meets expert care. Enjoy a range of treatments tailored for your well-being.",
      image: Image2,
      reverse: true,
    },
    {
      title: "Fitness Center",
      subtitle: "Modern",
      description:
        "Stay fit and active in our state-of-the-art fitness center, equipped with modern machines and guided training programs for all levels.",
      image: Image3,
      reverse: false,
    },
    {
      title: "The Health Club & Pool",
      subtitle: "Experiences",
      description:
        "Unwind at our exclusive health club & pool, designed for both relaxation and energizing workouts in a serene atmosphere.",
      image: Image4,
      reverse: true,
    },
  ];

  return (
    <div className="w-full px-2 md:px-10">
      {/* Section Title */}
      <div className="text-center py-16">
        <h5 className="text-xl text-primary uppercase tracking-wide">
          Best Facilities
        </h5>
        <h1 className="text-5xl font-primary text-secondPrimary">
          Our Services
        </h1>
      </div>

      {/* Service Cards */}
      <div className="w-full px-5 lg:px-30 flex flex-col ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row md:h-96 ${
              service.reverse ? "lg:flex-row-reverse" : ""
            } bg-[#f4f5f8] overflow-hidden`}
          >
            {/* Image Section */}
            <motion.div
              initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 w-full overflow-hidden"
            >
              <motion.img
                src={service.image}
                alt={service.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Content Section */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center p-8 lg:p-12">
              <h5 className="text-lg text-primary font-primary font-light uppercase">
                {service.subtitle}
              </h5>
              <h1 className="text-3xl font-primary text-secondPrimary my-2">
                {service.title}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="my-10"
              >
                <StyledWrapper>
                  <button className="button">Learn more</button>
                </StyledWrapper>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .button {
    padding: 1em 1.2em;
    border: none;
    font-family: "'Gilda Display', serif";
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    color: #2094ae;
    transition: all 1000ms;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    outline: 1px solid #2c9caf;
  }

  button:hover {
    color: #ffffff;
    transform: scale(1);
    outline: 1px solid #70bdca;
    box-shadow: 4px 5px 17px -4px #268391;
  }

  button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #2c9caf;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }

  button:hover::before {
    width: 250%;
  }
`;

export default ServiceSection;
