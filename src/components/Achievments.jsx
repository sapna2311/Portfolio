import { ACHIEVEMENTS } from "../constants";
import { FaAward, FaCertificate, FaMedal } from "react-icons/fa";
import { motion } from "framer-motion";

const getIcon = (type) => {
  switch (type) {
    case "award":
      return <FaAward className="text-2xl text-yellow-500" />;
    case "certificate":
      return <FaCertificate className="text-2xl text-blue-500" />;
    case "medal":
      return <FaMedal className="text-2xl text-red-500" />;
    default:
      return null;
  }
};

const Achievements = () => {
  return (
    <div className="border-b text-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-bold"
      >
        Achievements
      </motion.h1>
      <div className="flex flex-col items-center">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl mb-5 flex items-center"
          >
            <div className="w-1/6 flex justify-center">
              {getIcon(achievement.type)}
            </div>
            <div className="w-5/6 p-3 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
              {achievement.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
