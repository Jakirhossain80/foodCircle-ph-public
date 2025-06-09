import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch, FaSort, FaThList, FaTh } from "react-icons/fa";
import Loading from "../utils/Loading";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isGridThree, setIsGridThree] = useState(true);

  const fetchFoods = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/available-foods`,
        {
          params: {
            search,
            sort: sortOrder,
          },
        }
      );
      setFoods(response.data);
    } catch (err) {
      console.error("Failed to fetch foods:", err);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  const delayDebounce = setTimeout(() => {
    fetchFoods();
  }, 300); // Delay API call by 300ms

  return () => clearTimeout(delayDebounce); // Cleanup on unmount or next change
}, [search, sortOrder]);


  if (loading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-inter text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Search */}
        <div className="flex items-center w-full md:w-auto gap-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search food name..."
            className="input input-bordered w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <FaSort className="text-gray-500" />
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by Expiry</option>
            <option value="asc">Earliest First</option>
            <option value="desc">Latest First</option>
          </select>
        </div>

        {/* Toggle Layout */}
        <button
          className="btn btn-outline flex items-center gap-2"
          onClick={() => setIsGridThree(!isGridThree)}
        >
          {isGridThree ? <FaThList /> : <FaTh />}
          Change Layout
        </button>
      </div>

      {/* Grid */}
      <div
        className={`grid gap-6 ${
          isGridThree
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {foods.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No food items found.
          </p>
        ) : (
          foods.map((food) => (
            <div
              key={food._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
            >
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h2 className="text-xl font-semibold">{food.foodName}</h2>
                <p>
                  <strong>Quantity:</strong> {food.quantity}
                </p>
                <p>
                  <strong>Location:</strong> {food.location}
                </p>
                <p>
                  <strong>Expires:</strong>{" "}
                  {new Date(food.expireAt).toLocaleString()}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/food/${food._id}`}
                    className="btn btn-primary mt-4 w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
