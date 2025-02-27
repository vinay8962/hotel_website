import Slider from "react-slick";
import Avatar1 from "../assets/team/1.jpg";
import Avatar2 from "../assets/team/2.jpg";
import Avatar3 from "../assets/team/3.jpg";
import Avatar4 from "../assets/team/4.jpg";
import Avatar5 from "../assets/team/5.jpg";
import Avatar6 from "../assets/team/6.jpg";
import backgroundImage from "../assets/slider/1.jpg";
import { MdStar } from "react-icons/md";

const testimonials = [
  {
    name: "John Doe",
    image: Avatar1,
    review:
      "The best vacation spot ever! The beach resort offers a perfect blend of relaxation and luxury. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emma Smith",
    image: Avatar2,
    review:
      "A paradise on earth! The service, ambiance, and food were simply amazing. Definitely coming back!",
    rating: 5,
  },
  {
    name: "David Brown",
    image: Avatar3,
    review:
      "From check-in to check-out, everything was seamless. The beach view from the rooms was breathtaking.",
    rating: 4,
  },
  {
    name: "Sophia Wilson",
    image: Avatar4,
    review:
      "Luxury at its finest! The resort exceeded my expectations. Great hospitality and stunning surroundings.",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    image: Avatar5,
    review:
      "A wonderful escape! The spa, pool, and beachfront experience were top-notch. Can't wait to visit again!",
    rating: 4,
  },
  {
    name: "Olivia Martinez",
    image: Avatar6,
    review:
      "The best resort experience ever! Everything was well-maintained, and the staff was very friendly.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-fixed my-10 "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="w-full h-full  bg-black/30 py-20 flex flex-col items-center">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-16">
          <h5 className="text-lg md:text-xl text-white font-primary uppercase tracking-wide">
            Testimonials
          </h5>
          <h1 className="text-3xl md:text-5xl font-semibold font-primary text-white">
            What Clients Say?
          </h1>
        </div>

        {/* Testimonial Slider */}
        {/* bg-white/20 backdrop-blur-lg  */}
        <div
          className="w-full max-w-2xl lg:max-w-3xl px-4
        
        
        
        rounded-xl"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className=" p-6 md:p-8 flex flex-col items-center text-center text-white "
              >
                {/* Review Text */}
                <p className="text-sm md:text-lg italic">
                  {testimonial.review}
                </p>

                {/* Image & Stars */}
                <div className="flex flex-col items-center justify-center mt-4 md:mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-primary shadow-md"
                  />
                  {/* Stars */}
                  <div className="flex text-yellow-400 text-lg md:text-xl mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <MdStar key={i} />
                    ))}
                  </div>
                </div>

                {/* Name */}
                <h4 className="mt-3 text-sm md:text-lg font-primary">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
