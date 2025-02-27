import { motion } from "motion/react";
import backgroundImage from "../assets/slider/4.jpg";
import { MdStar } from "react-icons/md";
import styled from "styled-components";
import { CiPlay1 } from "react-icons/ci";
const PromotionalVideo = () => {
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
    <div
      className="w-full bg-cover bg-center bg-fixed my-10 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="w-full h-[500px]  bg-black/30 py-20 flex flex-col items-center justify-center">
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
                <MdStar />
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-white font-primary text-2xl">
            Beach Resort Hotel
          </h4>
          <h1 className="text-5xl font-primary text-white">
            {" "}
            Promotional Video
          </h1>{" "}
        </div>
        <div className="my-10">
          <StyledWrapper>
            <button className="button flex justify-center items-center">
              <CiPlay1 className="svgIcon text-primary font-bold" size={30} />
            </button>
          </StyledWrapper>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px #2094ae;
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 50px;
    transition-duration: 0.3s;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: #2094ae;
    align-items: center;
  }

  .button:hover .svgIcon {
    /* width: 20px; */
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Play Video";
    color: white;
    /* transition-duration: .3s; */
    font-size: 10px;
  }

  .button:hover::before {
    font-size: 17px;
    opacity: 1;
    bottom: unset;
    /* transform: translateY(-30px); */
    transition-duration: 0.3s;
  }
`;
export default PromotionalVideo;
