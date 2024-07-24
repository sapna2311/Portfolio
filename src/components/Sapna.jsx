import profilePic from "../assets/sapna.png";
import { motion } from "framer-motion";

const Sapna = () => {
  return (
    <div className="border-b border-neutral-900 pb-1 lg:mb-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="pb-0 text-3xl font-medium tracking-tight lg:mt-16 lg:text-6xl"
            >
              Sapna Sharma
            </motion.h1>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pb-8 mt-4 text-sm text-gray-600 flex flex-col items-center lg:items-start"
            >
              <p className="mb-1">Age: 23</p>
            </motion.div>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="relative lg:text-3xl text-2xl tracking-tight text-purple-600"
            >
              <span className="relative z-20">Aspiring Educator & Biology Enthusiast</span>
            </motion.span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={profilePic}
              alt="Sapna Sharma"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sapna;
