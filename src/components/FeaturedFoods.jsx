import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../utils/Loading";
import { motion, useScroll, useTransform } from "framer-motion";

const FeaturedFoods = () => {
  // Parallax setup
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Fetching with React Query
  const { data: foods = [], isLoading, isError } = useQuery({
    queryKey: ["featuredFoods"],
    queryFn: async () => {
      const res = await axios.get("https://foodcircle-current.vercel.app/featured-foods");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-center text-rose-500">Failed to load featured foods.</p>;

  return (
    <motion.section
      className="px-4 py-8 mx-auto transition-all duration-500"
      style={{ y: parallaxY }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-semibold font-poppins mb-6 text-center text-gray-800 dark:text-gray-100 transition-all duration-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 10 }}
        viewport={{ once: true }}
      >
        Featured Foods
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <motion.div
            key={food._id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8 flex flex-col transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-60 object-cover rounded-xl mb-4 transition-all duration-500"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
              {food.foodName}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 transition-all duration-500">
              🍱 Quantity: {food.quantity}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 transition-all duration-500">
              📍 {food.location}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-all duration-500">
              📝 {food.note}
            </p>

            {/* --- NEW: See More button (keeps existing layout) --- */}
            <div className="mt-4">
              <Link
                to={`/foods/${food._id}`}
                state={{ food }}
                className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium py-2 px-6 rounded-full transition-all duration-500"
              >
                See More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 12 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <Link
          to="/availablefoods"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-8 rounded-full transition-all duration-500"
        >
          Show All
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedFoods;