// src/components/SafetyAndQualityGuideline.jsx
import {
  FaShieldAlt,
  FaThermometerHalf,
  FaBoxOpen,
  FaClipboardList,
  FaClock,
  FaInfoCircle,
  FaLeaf,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaShieldAlt className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden />,
    title: "Clean & Safe Handling",
    desc: "Wash hands, utensils, and surfaces before preparing or packing food. Keep raw and cooked items separate.",
    pill: "Hygiene first",
    pillClass: "bg-lime-400 text-gray-900",
  },
  {
    icon: <FaClipboardList className="text-amber-500 text-xl transition-all duration-500" aria-hidden />,
    title: "Label Clearly",
    desc: "Include item name, prepared/opened date, best-before date, and storage instructions on every package.",
    pill: "Clear labels",
    pillClass: "bg-amber-400 text-gray-900",
  },
  {
    icon: <FaThermometerHalf className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden />,
    title: "Right Temperature",
    desc: "Keep cold foods at ≤ 4°C and hot foods at ≥ 60°C until handover. Use insulated bags when possible.",
    pill: "Stay in the safe zone",
    pillClass: "bg-lime-400 text-gray-900",
  },
  {
    icon: <FaBoxOpen className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden />,
    title: "Secure Packaging",
    desc: "Use clean, food-grade containers. Seal tightly to avoid spills and cross-contamination during transport.",
    pill: "No leaks",
    pillClass: "bg-lime-400 text-gray-900",
  },
  {
    icon: <FaClock className="text-amber-500 text-xl transition-all duration-500" aria-hidden />,
    title: "Share While Fresh",
    desc: "Only share items that are fresh and safe to eat. Avoid food past its use-by date or with off smells.",
    pill: "Freshness matters",
    pillClass: "bg-amber-400 text-gray-900",
  },
  {
    icon: <FaInfoCircle className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden />,
    title: "Allergen Disclosure",
    desc: "Clearly mention common allergens (e.g., nuts, dairy, gluten, eggs, soy) and possible cross-contact.",
    pill: "Allergy info",
    pillClass: "bg-lime-400 text-gray-900",
  },
  {
    icon: <FaLeaf className="text-green-600 dark:text-green-500 text-xl transition-all duration-500" aria-hidden />,
    title: "Dietary Notes",
    desc: "Mark vegetarian/vegan/halal where relevant. Be honest about ingredients and preparation methods.",
    pill: "Be transparent",
    pillClass: "bg-lime-400 text-gray-900",
  },
];

const SafetyAndQualityGuideline = () => {
  return (
    <section
      className="w-full bg-gray-50 dark:bg-gray-900 transition-all duration-500"
      aria-labelledby="safety-guidelines-heading"
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <h2
            id="safety-guidelines-heading"
            className="text-2xl md:text-3xl font-semibold font-poppins text-gray-800 dark:text-gray-100 transition-all duration-500"
          >
            Safety & Quality Guidelines
          </h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 font-inter transition-all duration-500">
            FoodCircle is built on trust. Please follow these simple guidelines to keep sharing safe,
            transparent, and sustainable for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
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
                  className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${c.pillClass} transition-all duration-500`}
                >
                  {c.pill}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Do & Don't */}
        <div className="mt-10 md:mt-12 grid gap-5 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-all duration-500">
            <div className="flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green-600 dark:text-green-500 text-lg transition-all duration-500" aria-hidden />
              <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                Do
              </h4>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              <li>Share only foods you would feel safe serving to others.</li>
              <li>Cool hot foods quickly and refrigerate within 2 hours.</li>
              <li>Use clean containers and label contents & dates clearly.</li>
              <li>Arrange prompt pickup to maintain freshness and quality.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 transition-all duration-500">
            <div className="flex items-center gap-2 mb-3">
              <FaTimesCircle className="text-rose-500 text-lg transition-all duration-500" aria-hidden />
              <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 transition-all duration-500">
                Don’t
              </h4>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500">
              <li>Share food that smells off, is moldy, or past its use-by date.</li>
              <li>Mix raw and cooked foods in the same container.</li>
              <li>Share food with undeclared allergens or unclear ingredients.</li>
              <li>Refreeze previously thawed perishable items.</li>
            </ul>
          </div>
        </div>

        {/* Footer note / CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 transition-all duration-500">
            Unsure about an item? When in doubt, leave it out. Safety comes first—for you and your neighbors.
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-500"
            >
              View Full Guidelines
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyAndQualityGuideline;
