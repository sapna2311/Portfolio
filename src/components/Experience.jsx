import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b text-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-bold"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-2 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-4 text-neutral-900 font-bold">{experience.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h2 className="mb-2 text-xl font-bold">
                {experience.position}{" "}
                <span className="text-sm text-red-600">{experience.company}</span>
              </h2>
              <p className="mb-4">{experience.description}</p>
              
              <div className="flex flex-wrap gap-2">
                <h3 className="mb-2 text-lg font-semibold w-full lg:w-auto">Achievements:</h3>
                <div className="ml-4">
                  {experience.achievements.map((achievement, index) => (
                    <span key={index} className="block mb-1">
                      - {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
