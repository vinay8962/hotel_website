import { motion } from "motion/react";
import aboutImg1 from "../assets/about-1.jpg";
import aboutImg2 from "../assets/about-2.jpg";
import aboutImg3 from "../assets/about-3.jpg";
import aboutImg4 from "../assets/about-4.jpg";
import { CiStar } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay each child by 0.2s
      },
    },
  };

  // Variants for each star (fade-in effect)
  const starVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <div className=" px-4 py-12 mx-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Side - About Content */}
      <div>
        {/* Star Ratings */}
        <motion.div
          className="flex text-yellow-500 space-x-1 text-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {[...Array(5)].map((_, index) => (
            <motion.span key={index} variants={starVariants}>
              <CiStar />
            </motion.span>
          ))}
        </motion.div>

        <h4 className="text-lg text-primary mt-2">Since 2000</h4>
        <h1 className="text-4xl font-primary text-[#0f2454] mt-3">
          Beach Resort Hotel
        </h1>

        <p className="text-gray-700 mt-4 leading-relaxed font-primary">
          Welcome to the best five-star deluxe hotel in New York. Hotel
          elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
          volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu
          posuere blane.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed font-primary">
          Hotel ut nisl quam vestibulum ac quam nec odio elementum sceisue the
          aucan ligula. Orci varius natoque penatibus et magnis dis parturient
          monte nascete ridiculus mus pellentesque habitant morbine.
        </p>

        {/* Contact Section */}
        <div className="flex items-center mt-6 space-x-4">
          <div className=" p-3 rounded-full text-primary">
            <FiPhoneCall size={40} />
          </div>
          <div>
            <p className="text-gray-600 font-primary">Reservation</p>
            <span className="text-xl  text-primary">855 100 4444</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* First Row */}
        <div className="flex justify-end">
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            src={aboutImg1}
            alt="About 1"
            className="w-3/4 rounded-lg object-cover mt-16"
          />
        </div>
        <div className="flex justify-start">
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.2 }}
            src={aboutImg2}
            alt="About 2"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Second Row */}
        <div className="flex justify-end">
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.4 }}
            src={aboutImg3}
            alt="About 3"
            className="w-6/12 h-2/3 rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-start">
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.6 }}
            src={aboutImg4}
            alt="About 4"
            className="w-3/4 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
