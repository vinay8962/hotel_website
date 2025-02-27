import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "../assets/slider/1.jpg";
import SliderImg2 from "../assets/slider/2.jpg";
import SliderImg3 from "../assets/slider/3.jpg";
import SliderImg4 from "../assets/slider/4.jpg";
// import { motion } from "motion/react";

const HeroSection = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Remove if you want previous/next arrows
  };

  return (
    <div className="relative uppercase">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={SliderImg1}
            alt="Beach Resort"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 bg-opacity-50">
            <h4 className="text-lg uppercase tracking-widest font-primary leading-[1rem]">
              Relaxation & Comfort
            </h4>
            <h1 className="text-4xl md:text-7xl font-normal tracking-widest  font-primary">
              Beach Resort Hotel
            </h1>
            <div className="mt-4">
              <StyledWrapper>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow " />
                  </span>
                  <span className="button-text">view rooms</span>
                </button>
              </StyledWrapper>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={SliderImg2}
            alt="Maldives Luxury"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 bg-opacity-50">
            <h4 className="text-lg uppercase tracking-widest font-primary">
              Relaxation & Comfort
            </h4>
            <h1 className="text-6xl md:text-7xl font-normal font-primary">
              Maldives Luxury
            </h1>
            <div className="mt-4">
              <StyledWrapper>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow " />
                  </span>
                  <span className="button-text">view rooms</span>
                </button>
              </StyledWrapper>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src={SliderImg3}
            alt="Paradise"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 bg-opacity-50">
            <h4 className="text-lg uppercase font-primary tracking-widest">
              Relaxation & Comfort
            </h4>
            <h1 className="text-6xl md:text-7xl font-normal font-primary">
              This is Paradise
            </h1>

            <div className="mt-4">
              <StyledWrapper>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow " />
                  </span>
                  <span className="button-text">view rooms</span>
                </button>
              </StyledWrapper>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative">
          <img
            src={SliderImg4}
            alt="Unique Beach Hotel"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 bg-opacity-50">
            <h4 className="text-lg uppercase tracking-widest font-primary">
              Relaxation & Comfort
            </h4>
            <h1 className="text-6xl md:text-7xl font-normal font-primary">
              Unique Beach Hotel
            </h1>
            <div className="mt-4">
              <StyledWrapper>
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow " />
                  </span>
                  <span className="button-text">view rooms</span>
                </button>
              </StyledWrapper>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
const StyledWrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button.learn-more {
    width: 12rem;
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #2095ae;
    border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: red;
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: white;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
  }

  button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  button:hover .button-text {
    color: #fff;
  }
`;

export default HeroSection;
