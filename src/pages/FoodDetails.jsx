import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosSecure from "../api/axiosSecure";
import Swal from "sweetalert2";
import Loading from "../utils/Loading";
import { FaMapMarkerAlt, FaClock, FaUserAlt, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await axiosSecure.get(`/food/${id}`);
        setFood(res.data);
      } catch (err) {
        console.error("Failed to fetch food details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFood();
  }, [id]);

  const handleRequestFood = async () => {
    const requestData = {
      foodId: food._id,
      foodName: food.foodName,
      foodImage: food.foodImage,
      donorName: food.donorName,
      donorEmail: food.donorEmail,
      userEmail: user.email,
      location: food.location,
      expireAt: food.expireAt,
      requestDate: new Date().toISOString(),
      notes,
      requesterName: user.displayName,
      requesterImage: user.photoURL,
    };

    try {
      await axiosSecure.put(
        `/foods/request/${food._id}`,
        { foodStatus: "requested" },
        { headers: { "Content-Type": "application/json" } }
      );

      await axiosSecure.post("/requests", requestData);
      Swal.fire("Success", "Food request submitted!", "success");
      setShowModal(false);
      navigate("/myfoodrequest");
    } catch (error) {
      console.error("Request failed:", error);
      Swal.fire("Error", "Failed to submit request", "error");
    }
  };

  if (loading) return <Loading />;

  if (!food) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-rose-500 font-semibold text-xl transition-all duration-500 dark:text-rose-400">
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
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 font-inter transition-all duration-500 text-gray-800 dark:text-gray-100">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden px-6 py-8 transition-all duration-500">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-[500px] object-cover rounded-sm"
        />

        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-semibold font-poppins text-green-600 dark:text-green-400 transition-all duration-500">
            {foodName}
          </h1>

          <p>
            <span className="font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">Quantity:</span> {quantity}
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
            <span className="font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">Status:</span>{" "}
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 ${
                foodStatus === "Available"
                  ? "bg-emerald-100 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400"
                  : "bg-rose-100 dark:bg-rose-600/20 text-rose-600 dark:text-rose-400"
              }`}
            >
              {foodStatus}
            </span>
          </p>

          {note && (
            <p>
              <span className="font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">Note:</span> {note}
            </p>
          )}

          <p>
            <span className="font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">Posted on:</span>{" "}
            {new Date(createdAt).toLocaleString()}
          </p>

          <div className="flex items-center gap-4 mt-6">
            {donorImage ? (
              <img
                src={donorImage}
                alt={donorName}
                className="w-14 h-14 rounded-full object-cover border border-green-500"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 text-xl font-bold">
                {donorName?.charAt(0)}
              </div>
            )}
            <div>
              <p className="flex items-center gap-2 text-lg font-medium text-green-700 dark:text-green-400 transition-all duration-500">
                <FaUserAlt /> {donorName}
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-500">
                <FaEnvelope /> {donorEmail}
              </p>
            </div>
          </div>
        </div>

        {foodStatus === "Available" && user?.email && (
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-200 cursor-pointer"
            >
              Make a Request
            </button>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-transparent backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg w-full max-w-2xl relative shadow-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 transition-all duration-500">
            <h2 className="text-2xl font-bold font-poppins text-green-600 dark:text-green-400 text-center mb-4 transition-all duration-500">
              Request This Food
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Field label="Food Name" value={foodName} />
              <Field label="Donor Name" value={donorName} />
              <Field label="Donor Email" value={donorEmail} />
              <Field label="Pickup Location" value={location} />
              <Field label="Expiration Date" value={new Date(expireAt).toLocaleString()} />
              <Field label="Your Email" value={user.email} />
              <Field label="Request Date" value={new Date().toLocaleString()} />
            </div>

            <div className="mt-4">
              <label className="font-medium text-gray-700 dark:text-gray-300 block mb-1 transition-all duration-500">
                Additional Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-green-500 transition-all duration-500"
                placeholder="Enter any additional notes..."
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-10 border-2 border-green-600 font-semibold rounded-full bg-transparent py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-rose-600 cursor-pointer duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleRequestFood}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full font-semibold cursor-pointer duration-300"
              >
                Claim This Food
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Field Component
const Field = ({ label, value }) => (
  <div>
    <label className="text-gray-600 dark:text-gray-300 font-medium transition-all duration-500">{label}</label>
    <input
      type="text"
      value={value}
      readOnly
      className="w-full mt-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md transition-all duration-500"
    />
  </div>
);

export default FoodDetails;
