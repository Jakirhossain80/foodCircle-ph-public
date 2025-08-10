// src/components/CategoryOfSharedFood.jsx
import {
  FaAppleAlt,
  FaCarrot,
  FaBreadSlice,
  FaUtensils,
  FaBoxOpen,
  FaTint,
  FaCheese,
  FaDrumstickBite,
} from "react-icons/fa";
import { Link } from "react-router";

const categories = [
  {
    icon: <FaAppleAlt className="text-green-600 dark:text-green-500 text-2xl transition-all duration-500" aria-hidden />,
    title: "Fruits",
    desc: "Fresh fruits that need a new home—share seasonal surplus to reduce waste.",
    badge: "Fresh & whole",
    badgeColor: "bg-lime-400 text-gray-900",
  },
  {
    icon: <FaCarrot className="text-green-600 dark:text-green-500 text-2xl transition-all duration-500" aria-hidden />,
    title: "Vegetables",
    desc: "Garden extras or market buys—perfect for quick, healthy meals.",
    badge: "Farm to table",
    badgeColor: "bg-lime-400 text-gray-900",
  },
  {
    icon: <FaBreadSlice className="text-amber-500 text-2xl transition-all duration-500" aria-hidden />,
    title: "Baked Goods",
    desc: "Bread, pastries, and cakes—best enjoyed while still fresh.",
    badge: "Best today",
    badgeColor: "bg-amber-400 text-gray-900",
  },
  {
    icon: <FaUtensils className="text-amber-500 text-2xl transition-all duration-500" aria-hidden />,
    title: "Prepared Meals",
    desc: "Home-cooked portions or leftovers—properly packed and labeled.",
    badge: "Handle with care",
    badgeColor: "bg-amber-400 text-gray-900",
  },
  {
    icon: <FaBoxOpen className="text-green-600 dark:text-green-500 text-2xl transition-all duration-500" aria-hidden />,
    title: "Pantry Staples",
    desc: "Shelf-stable items like rice, pasta, lentils, and canned goods.",
    badge: "Unopened only",
    badgeColor: "bg-lime-400 text-gray-900",
  },
  {
    icon: <FaTint className="text-green-600 dark:text-green-500 text-2xl transition-all duration-500" aria-hidden />,
    title: "Beverages",
    desc: "Juice, milk alternatives, and sealed drinks approaching date.",
    badge: "Sealed & safe",
    badgeColor: "bg-lime-400 text-gray-900",
  },
  {
    icon: <FaCheese className="text-amber-500 text-2xl transition-all duration-500" aria-hidden />,
    title: "Dairy",
    desc: "Milk, yogurt, and cheese—share with clear dates and cold storage.",
    badge: "Keep chilled",
    badgeColor: "bg-amber-400 text-gray-900",
  },
  {
    icon: <FaDrumstickBite className="text-green-600 dark:text-green-500 text-2xl transition-all duration-500" aria-hidden />,
    title: "Proteins",
    desc: "Eggs, tofu, and cooked meats—label clearly and follow safety tips.",
    badge: "Label dates",
    badgeColor: "bg-lime-400 text-gray-900",
  },
];

const CategoryOfSharedFood = () => {
  return (
    <section
      className="w-full bg-gray-50 dark:bg-gray-900 transition-all duration-500"
      aria-labelledby="category-heading"
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2
            id="category-heading"
            className="text-2xl md:text-3xl font-semibold font-poppins text-gray-800 dark:text-gray-100 transition-all duration-500"
          >
            Categories of Shared Food
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 font-inter transition-all duration-500">
            Explore common categories you can share or request on FoodCircle.
            Keeping items labeled and safely packed helps everyone.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-all duration-500 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex p-3 rounded-xl bg-green-500/10 dark:bg-green-500/20 transition-all duration-500">
                  {c.icon}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                  {c.title}
                </h3>
              </div>

              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
                {c.desc}
              </p>

              <div className="mt-4">
                <span
                  className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${c.badgeColor} transition-all duration-500`}
                >
                  {c.badge}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Micro-guidelines */}
        <div className="mt-10 md:mt-12 max-w-3xl mx-auto text-center">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 transition-all duration-500">
            Tip: Pack securely, add{" "}
            <span className="font-medium text-gray-800 dark:text-gray-200 transition-all duration-500">
              pickup time
            </span>
            , and include{" "}
            <span className="font-medium text-gray-800 dark:text-gray-200 transition-all duration-500">
              best-before dates
            </span>{" "}
            where relevant. Safety first.
          </p>
          <div className="mt-4">
            <Link to="/addfood"
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-500"
            >
              Share Food
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryOfSharedFood;
