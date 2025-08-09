import { Link } from "react-router";
import { motion } from "framer-motion";

const JoinTheMovement = () => {
  return (
    <motion.section
      className="bg-green-500 dark:bg-green-600 text-white transition-all duration-500 py-16 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 transition-all duration-500">
          Join the Movement
        </h2>
        <p>Test purpose added</p>
        <p className="text-lg md:text-xl mb-10 font-inter transition-all duration-500">
          Every shared meal makes a difference. Become part of the FoodCircle today!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            to="/registration"
            className="bg-white text-green-600 dark:bg-gray-100 dark:text-green-700 font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Register
          </Link>
          <Link
            to="/addfood"
            className="bg-amber-400 text-green-900 dark:bg-amber-500 dark:text-green-950 font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Add Food
          </Link>
          <Link
            to="/learnmore"
            className="bg-green-700 text-white dark:bg-green-800 dark:text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default JoinTheMovement;
