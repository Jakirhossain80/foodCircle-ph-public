import { CheckCircle } from 'lucide-react';

const LearnMore = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 text-gray-800 dark:text-gray-200 transition-all duration-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-green-600 dark:text-green-400 transition-all duration-500">
            Why FoodCircle?
          </h2>
          <p className="text-lg mb-4 font-inter transition-all duration-500">
            FoodCircle is on a mission to reduce food waste and foster community connection.
            By sharing surplus food, we ensure that no meal goes uneaten and every neighbor feels supported.
          </p>
          <p className="text-lg mb-6 font-inter transition-all duration-500">
            Whether you're donating extra groceries or picking up a warm plate, your participation
            fuels a movement of sustainability and compassion.
          </p>

          {/* Features Checklist */}
          <ul className="space-y-3">
            <li className="flex items-start gap-3 transition-all duration-500">
              <CheckCircle className="text-emerald-500 w-5 h-5 mt-1" />
              <span className="text-base font-medium">
                Reduce food waste in your local area
              </span>
            </li>
            <li className="flex items-start gap-3 transition-all duration-500">
              <CheckCircle className="text-emerald-500 w-5 h-5 mt-1" />
              <span className="text-base font-medium">
                Share meals and uplift your community
              </span>
            </li>
            <li className="flex items-start gap-3 transition-all duration-500">
              <CheckCircle className="text-emerald-500 w-5 h-5 mt-1" />
              <span className="text-base font-medium">
                Join a growing network of mindful food heroes
              </span>
            </li>
          </ul>
        </div>

        {/* Visual Illustration */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706195.png"
            alt="Community Sharing"
            className="w-72 md:w-96 rounded-xl shadow-md transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
