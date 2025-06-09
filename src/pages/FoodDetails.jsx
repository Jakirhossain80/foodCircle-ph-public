import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../utils/Loading";
import { FaMapMarkerAlt, FaClock, FaUserAlt, FaEnvelope } from "react-icons/fa";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/food/${id}`);
        setFood(res.data);
      } catch (err) {
        console.error("Failed to fetch food details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, [id]);

  if (loading) return <Loading />;

  if (!food) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-rose-500 font-semibold text-xl">
        Food item not found.
      </div>
    );
  }

  const {
    foodName,
    foodImage,
    quantity,
    location,
    expireAt,
    note,
    donorName,
    donorEmail,
    donorImage,
    foodStatus,
    createdAt,
  } = food;

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 font-inter text-gray-800">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden px-6 py-8">
        {/* Image */}
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-[500px] object-cover rounded-sm"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-semibold font-poppins text-green-600">
            {foodName}
          </h1>

          <p>
            <span className="font-semibold text-gray-700">Quantity:</span>{" "}
            {quantity}
          </p>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-500" />
            <span>{location}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaClock className="text-amber-500" />
            <span>Expires at: {new Date(expireAt).toLocaleString()}</span>
          </p>

          <p>
            <span className="font-semibold text-gray-700">Status:</span>{" "}
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                foodStatus === "Available"
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-rose-100 text-rose-600"
              }`}
            >
              {foodStatus}
            </span>
          </p>

          {note && (
            <p>
              <span className="font-semibold text-gray-700">Note:</span> {note}
            </p>
          )}

          <p>
            <span className="font-semibold text-gray-700">Posted on:</span>{" "}
            {new Date(createdAt).toLocaleString()}
          </p>

          {/* Donor Info */}
          <div className="flex items-center gap-4 mt-6">
            {donorImage ? (
              <img
                src={donorImage}
                alt={donorName}
                className="w-14 h-14 rounded-full object-cover border border-green-500"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl font-bold">
                {donorName?.charAt(0)}
              </div>
            )}
            <div>
              <p className="flex items-center gap-2 text-lg font-medium text-green-700">
                <FaUserAlt /> {donorName}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-600">
                <FaEnvelope /> {donorEmail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
