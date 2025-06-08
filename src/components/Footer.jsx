import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logoImage from "../assets/logo-food.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200 mt-10">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        {/* Logo & Tagline */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logoImage} alt="FoodCircle Logo" className="h-10 w-10" />
            <h2 className="text-2xl font-bold text-green-600 font-poppins">
              FoodCircle
            </h2>
          </Link>
          <p className="text-sm font-inter">
            Empowering communities through food sharing. Reduce waste, spread
            love, and nourish sustainability.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 font-inter">
          <h3 className="text-lg font-semibold text-green-600 mb-2">
            Quick Links
          </h3>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-green-600 transition-all ${
                isActive ? "text-green-600 font-medium" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/availablefoods"
            className={({ isActive }) =>
              `hover:text-green-600 transition-all ${
                isActive ? "text-green-600 font-medium" : ""
              }`
            }
          >
            Available Foods
          </NavLink>
          <NavLink
            to="/addfood"
            className={({ isActive }) =>
              `hover:text-green-600 transition-all ${
                isActive ? "text-green-600 font-medium" : ""
              }`
            }
          >
            Add Food
          </NavLink>
          <NavLink
            to="/managemyfoods"
            className={({ isActive }) =>
              `hover:text-green-600 transition-all ${
                isActive ? "text-green-600 font-medium" : ""
              }`
            }
          >
            Manage My Foods
          </NavLink>
          <NavLink
            to="/myfoodrequest"
            className={({ isActive }) =>
              `hover:text-green-600 transition-all ${
                isActive ? "text-green-600 font-medium" : ""
              }`
            }
          >
            My Food Request
          </NavLink>
        </div>

        {/* Social Media */}
        <div className="font-inter">
          <h3 className="text-lg font-semibold text-green-600 mb-2">
            Follow Us
          </h3>
          <div className="flex gap-4 mt-2">
            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors text-white"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors text-white"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors text-white"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors text-white"
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-600 font-inter">
        © FoodCircle 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
