import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUtensils, FaGlobeAmericas, FaHandsHelping } from "react-icons/fa";

const CommunityImpact = () => {
  const stats = [
    { icon: <FaUtensils />, label: "Meals Shared", count: 12000 },
    { icon: <FaGlobeAmericas />, label: "Food Saved (kg)", count: 5500 },
    { icon: <FaHandsHelping />, label: "Active Members", count: 3000 },
  ];

  const AnimatedCounter = ({ value }) => {
    const count = useMotionValue(0);
    const [display, setDisplay] = useState("0");
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
      if (inView) {
        const controls = animate(count, value, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => {
            setDisplay(Math.round(latest).toLocaleString());
          },
        });
        return () => controls.stop();
      }
    }, [inView, count, value]);

    return <span ref={ref}>{display}+</span>;
  };

  return (
    <section className="bg-gradient-to-r from-amber-400 to-amber-300 py-12 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-10">
          Together, We're Making a Real Difference
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4 text-green-600">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                <AnimatedCounter value={stat.count} />
              </div>
              <p className="text-base text-gray-700 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
