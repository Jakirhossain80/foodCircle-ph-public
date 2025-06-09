import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../utils/Loading";
import { motion, useScroll, useTransform } from "framer-motion";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // For parallax
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/featured-foods")
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching featured foods:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <motion.section
      className="px-4 py-8 mx-auto"
      style={{ y: parallaxY }} // Parallax background scroll effect
    >
      <motion.h2
        className="text-2xl md:text-3xl font-semibold font-poppins mb-6 text-center text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 10,
        }}
        viewport={{ once: true }}
      >
        Featured Foods
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <motion.div
            key={food._id}
            className="bg-white rounded-2xl shadow p-8 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
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
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{food.foodName}</h3>
            <p className="text-sm text-gray-600 mb-1">🍱 Quantity: {food.quantity}</p>
            <p className="text-sm text-gray-600 mb-1">📍 {food.location}</p>
            <p className="text-sm text-gray-600">📝 {food.note}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 12,
        }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.05,
        }}
      >
        <Link
          to="/availablefoods"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-8 rounded-full transition"
        >
          Show All
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedFoods;
