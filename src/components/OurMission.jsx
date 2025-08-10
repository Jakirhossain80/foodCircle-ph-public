// src/components/OurMission.jsx
import { FaLeaf, FaHandsHelping, FaRecycle, FaUsers, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

const OurMission = () => {
  return (
    <section
      className="w-full bg-gray-50 dark:bg-gray-900 transition-all duration-500"
      aria-labelledby="our-mission-heading"
    >
      <div className="container mx-auto px-4 py-12 md:py-16 transition-all duration-500">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2
            id="our-mission-heading"
            className="text-2xl md:text-3xl font-semibold font-poppins text-gray-800 dark:text-gray-100 transition-all duration-500"
          >
            Our Mission
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 font-inter transition-all duration-500">
            FoodCircle connects people with surplus food to neighbors who need it—reducing waste,
            strengthening communities, and making sharing simple and safe.
          </p>
        </div>

        {/* Mission KPIs / Value props */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-all duration-500">
            <div className="flex items-center gap-3">
              <span className="inline-flex p-3 rounded-xl bg-green-500/10 dark:bg-green-500/20 transition-all duration-500">
                <FaLeaf className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                Cut Food Waste
              </h3>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              We make it effortless to share extra meals and ingredients so less food ends up in landfills.
            </p>
          </article>

          {/* Card 2 */}
          <article className="bg-white dark:bg-gray-8 00 rounded-2xl shadow p-6 transition-all duration-500">
            <div className="flex items-center gap-3">
              <span className="inline-flex p-3 rounded-xl bg-amber-400/20 dark:bg-amber-400/25 transition-all duration-500">
                <FaHandsHelping className="text-amber-500 text-xl transition-all duration-500" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                Help Neighbors
              </h3>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              Share what you have or request what you need—FoodCircle fosters kindness at a local level.
            </p>
          </article>

          {/* Card 3 */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-all duration-500">
            <div className="flex items-center gap-3">
              <span className="inline-flex p-3 rounded-xl bg-lime-400/20 dark:bg-lime-400/25 transition-all duration-500">
                <FaRecycle className="text-lime-400 text-xl transition-all duration-500" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                Share Sustainably
              </h3>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              Sustainable sharing habits today build healthier communities and a greener tomorrow.
            </p>
          </article>

          {/* Card 4 */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-all duration-500">
            <div className="flex items-center gap-3">
              <span className="inline-flex p-3 rounded-xl bg-green-500/10 dark:bg-green-500/20 transition-all duration-500">
                <FaUsers className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                Build Community
              </h3>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              Meet local donors and recipients, share stories, and inspire others to join the circle.
            </p>
          </article>

          {/* Card 5 */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-all duration-500">
            <div className="flex items-center gap-3">
              <span className="inline-flex p-3 rounded-xl bg-amber-400/20 dark:bg-amber-400/25 transition-all duration-500">
                <FaShieldAlt className="text-amber-500 text-xl transition-all duration-500" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                Safety First
              </h3>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              Clear guidelines on freshness, packaging, and pickup keep sharing safe for everyone.
            </p>
          </article>

          {/* Card 6 */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-all duration-500">
            <div className="flex items-center gap-3">
              <span className="inline-flex p-3 rounded-xl bg-lime-400/20 dark:bg-lime-400/25 transition-all duration-500">
                <FaMapMarkerAlt className="text-lime-400 text-xl transition-all duration-500" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                Local Impact
              </h3>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              Food shared nearby travels less, reaches people faster, and reduces carbon footprint.
            </p>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-500"
          >
            Join the FoodCircle
          </button>
          <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 transition-all duration-500">
            Share food, request help, and be part of a kinder, greener community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
