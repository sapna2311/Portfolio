
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div
        className="bg-black rounded-full w-16 h-16 flex items-center justify-center text-xl text-[#63e] shadow-md"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        SS
      </motion.div>      
    </nav>
  );
}

export default Navbar;
