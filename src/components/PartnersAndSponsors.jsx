// src/components/PartnersAndSponsors.jsx
import { FaHandshake, FaBuilding, FaHeart, FaGlobeAsia, FaLeaf } from "react-icons/fa";

const partnerGroups = [
  {
    label: "Community Partners",
    pillClass: "bg-lime-400 text-gray-900",
    items: [
      { name: "Dhaka Food Bank", icon: <FaLeaf className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden /> },
      { name: "Local Volunteers", icon: <FaHandshake className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden /> },
      { name: "Neighborhood Clubs", icon: <FaGlobeAsia className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden /> },
    ],
  },
  {
    label: "Corporate Sponsors",
    pillClass: "bg-amber-400 text-gray-900",
    items: [
      { name: "FreshMart", icon: <FaBuilding className="text-amber-500 text-xl transition-all duration-500" aria-hidden /> },
      { name: "GreenGrocer", icon: <FaBuilding className="text-amber-500 text-xl transition-all duration-500" aria-hidden /> },
      { name: "City Logistics", icon: <FaBuilding className="text-amber-500 text-xl transition-all duration-500" aria-hidden /> },
    ],
  },
];

const PartnersAndSponsors = () => {
  return (
    <section
      className="w-full bg-gray-50 dark:bg-gray-900 transition-all duration-500"
      aria-labelledby="partners-sponsors-heading"
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2
            id="partners-sponsors-heading"
            className="text-2xl md:text-3xl font-semibold font-poppins text-gray-800 dark:text-gray-100 transition-all duration-500"
          >
            Partners & Sponsors
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 font-inter transition-all duration-500">
            FoodCircle grows with the support of local communities and generous sponsors.
            Together, we reduce waste, share meals, and strengthen neighborhoods.
          </p>
        </div>

        {/* Partner/Sponsor Groups */}
        <div className="space-y-8">
          {partnerGroups.map((group) => (
            <div key={group.label} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${group.pillClass} transition-all duration-500`}
                  >
                    {group.label}
                  </span>
                </div>
              </div>

              {/* Logo/Name Grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <article
                    key={item.name}
                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow p-5 flex items-center gap-4 transition-all duration-500 hover:shadow-lg"
                  >
                    <span className="inline-flex p-3 rounded-xl bg-green-500/10 dark:bg-green-500/20 transition-all duration-500">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                        {item.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 transition-all duration-500">
                        Proud supporter of community food sharing.
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Strip */}
        <div className="mt-12 md:mt-14 grid gap-5 md:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 text-center transition-all duration-500">
            <FaHandshake className="mx-auto text-green-600 dark:text-green-500 text-2xl transition-all duration-500" aria-hidden />
            <h4 className="mt-3 font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
              Collaborate Locally
            </h4>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              Work with NGOs, schools, and clubs to reach more people.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 text-center transition-all duration-500">
            <FaBuilding className="mx-auto text-amber-500 text-2xl transition-all duration-500" aria-hidden />
            <h4 className="mt-3 font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
              Sponsor a Program
            </h4>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              Support pickups, packaging kits, or storage for shared food.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 text-center transition-all duration-500">
            <FaHeart className="mx-auto text-green-600 dark:text-green-500 text-2xl transition-all duration-500" aria-hidden />
            <h4 className="mt-3 font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
              Make a Difference
            </h4>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              Every partnership helps reduce waste and feed neighbors.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 text-center">
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-500"
          >
            Become a Partner
          </button>
          <p className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400 transition-all duration-500">
            Interested in partnering or sponsoring? Let’s build a kinder, greener community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersAndSponsors;
