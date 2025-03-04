import { motion } from "motion/react";

const FacilityCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }} // Staggered effect
      className="border border-primary/40 p-6  text-start relative overflow-hidden group font-primary"
    >
      {/* Icon */}
      <div className="text-5xl text-primary mb-4  transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h5 className="text-3xl font-normal text-secondPrimary">{title}</h5>

      {/* Description */}
      <p className="text-gray-500 mt-2">{description}</p>

      {/* Hover Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default FacilityCard;
