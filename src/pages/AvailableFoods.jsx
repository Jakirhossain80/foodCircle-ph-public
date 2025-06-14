import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch, FaSort, FaThList, FaTh } from "react-icons/fa";
import Loading from "../utils/Loading";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isGridThree, setIsGridThree] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const fetchFoods = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/available-foods`, {
        params: { search: searchQuery, sort: sortOrder },
      });
      setFoods(response.data);
    } catch (err) {
      console.error("Failed to fetch foods:", err);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, sortOrder]);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setSearchQuery("");
    }
  }, [searchInput]);

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchInput.trim());
    }
  };

  const handleSearchClick = () => {
    setSearchQuery(searchInput.trim());
  };

  useEffect(() => {
    if (!searchInput) {
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <div className="mx-auto px-4 py-8 font-inter text-gray-800 dark:text-white transition-all duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Search */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search food name..."
            className="input input-bordered w-full md:w-64 border-green-500 focus:outline focus:outline-green-600 dark:bg-gray-800 dark:border-green-400 dark:placeholder-gray-400 transition-all duration-500"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSearchClick}
            className="btn border-green-400 text-green-600 hover:bg-green-400 hover:text-white flex items-center group dark:border-green-300 dark:text-green-600 dark:hover:bg-green-500 transition-all duration-500"
            title="Search"
            disabled={isTyping}
          >
            <FaSearch className="text-green-600 group-hover:text-white dark:text-green-600 dark:group-hover:text-white transition-all duration-500" />{" "}
            Search
          </button>
        </div>

        {/* Sort */}
        <div>
          <select
            className="select select-bordered border-green-500 focus:border-green-600 focus:ring-green-500 dark:bg-gray-800 dark:border-green-400 transition-all duration-500"
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
          className="btn border-green-400 text-green-600 hover:bg-green-400 hover:text-white flex items-center gap-2 dark:border-green-300 dark:text-green-600 dark:hover:bg-green-500 transition-all duration-500"
          onClick={() => setIsGridThree(!isGridThree)}
        >
          {isGridThree ? <FaThList /> : <FaTh />}
          Change Layout
        </button>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <Loading />
      ) : (
        <div
          className={`grid gap-6 ${
            isGridThree
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {foods.length === 0 ? (
            <p className="col-span-full text-2xl font-semibold text-center text-amber-500 dark:text-amber-400 transition-all duration-500">
              No food items found.
            </p>
          ) : (
            foods.map((food) => (
              <div
                key={food._id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-600 flex flex-col px-4 py-6 transition-all duration-500"
              >
                <img
                  src={food.foodImage}
                  alt={food.foodName}
                  className="w-full h-72 object-cover rounded-sm"
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
                      className="btn bg-green-500 hover:bg-green-600 text-white mt-4 w-full dark:bg-green-600 dark:hover:bg-green-700 transition-all duration-500"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
