import { useLocation, useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../utils/Loading";

const fetchFoodById = async (id) => {
  // Fallback fetch if user navigates directly without state
  const res = await axios.get(
    `https://foodcircle-current.vercel.app/foods/${id}`
  );
  return res.data;
};

const InfoRow = ({ label, value }) => (
  <div className="flex items-start justify-between gap-3 py-2 border-b border-gray-200 dark:border-gray-700">
    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
      {label}
    </span>
    <span className="text-sm text-gray-800 dark:text-gray-100">
      {value ?? "—"}
    </span>
  </div>
);

const SingleFoodDetail = () => {
  const location = useLocation();
  const { id } = useParams();

  // Prefer data passed via Link state for instant render
  const presetFood = location.state?.food;

  const {
    data: food,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["foodDetails", id],
    queryFn: () => fetchFoodById(id),
    enabled: !presetFood, // skip fetch if we already have it
  });

  const item = presetFood || food;

  if (!item && isLoading) return <Loading />;
  if (!item && isError)
    return (
      <p className="px-4 py-8 text-center text-rose-500">
        Failed to load food details.
      </p>
    );

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold font-poppins text-gray-900 dark:text-gray-100">
          {item.foodName}
        </h1>
        <Link
          to="/availablefoods"
          className="hidden sm:inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-full transition-all duration-300"
        >
          Back to All
        </Link>
      </div>

      {/* Content: mobile-first, two-column on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
          <img
            src={item.foodImage}
            alt={item.foodName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-lime-400 text-gray-900">
              Featured
            </span>
            {/* optional tags, if present */}
            {item?.status && (
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-amber-400 text-gray-900">
                {item.status}
              </span>
            )}
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <InfoRow label="Quantity" value={item.quantity} />
            <InfoRow label="Location" value={item.location} />
            <InfoRow label="Note" value={item.note} />
            {/* Show extra fields when available */}
            {item?.pickupTime && (
              <InfoRow label="Pickup Time" value={item.pickupTime} />
            )}
            {item?.donorName && (
              <InfoRow label="Donor" value={item.donorName} />
            )}
            {item?.contact && <InfoRow label="Contact" value={item.contact} />}
          </div>

          {/* Description */}
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Description
            </h3>
            <p className="text-sm leading-6 text-justify text-gray-700 dark:text-gray-300">
              {item?.description || "No description provided."}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/availablefoods"
              className="sm:hidden inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-full text-center transition-all duration-300"
            >
              Back to All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleFoodDetail;
