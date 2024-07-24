import aboutImg from "../assets/sapna2.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-5xl font-bold">
            About
            <span className="text-neutral-600">
            Me
            </span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p=12">
                <div className="flex item-center justify-center">
                    <img src={aboutImg} alt="about" className="rounded-5xl h-100"/>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="my-2 max-w-2xl py-3 font-semibold tracking-tighter lg:text-2xl text-grey-800">
                        <span className="relative z-10">{ABOUT_TEXT}</span>
                    </motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About