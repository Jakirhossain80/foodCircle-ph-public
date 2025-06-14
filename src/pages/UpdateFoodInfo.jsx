import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import axiosSecure from "../api/axiosSecure";
import Loading from "../utils/Loading";
import { AuthContext } from "../provider/AuthProvider";

const UpdateFoodInfo = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ JWT function implementation as per your requirement
  const fetchMyFoods = async () => {
    try {
      const response = await axiosSecure.get(`/myfoods?email=${user.email}`);
      console.log(response.data);
    } catch (err) {
      console.error("JWT fetchMyFoods error:", err);
    }
  };

  useEffect(() => {
    axiosSecure
      .get(`/food/${id}`)
      .then((res) => {
        const foodData = res.data;
        setFormData({
          ...foodData,
          userName: foodData.userName || user?.displayName || "",
          userEmail: foodData.userEmail || user?.email || "",
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to load food info.", "error");
      })
      .finally(() => setLoading(false));

    if (user?.email) {
      fetchMyFoods();
    }
  }, [id, user]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatePayload = {
      ...formData,
      donorName: formData.userName,
      donorEmail: formData.userEmail,
    };

    delete updatePayload._id;
    delete updatePayload.userName;
    delete updatePayload.userEmail;

   axiosSecure.put(`/food/${id}`, updatePayload)
      .then(() => {
        Swal.fire("Updated!", "Food info saved.", "success");
        navigate("/managemyfoods");
      })
      .catch((err) => {
        console.error("Update error:", err);
        Swal.fire("Error", "Update failed.", "error");
      });
  };

  if (loading || !formData) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-md shadow-md transition-all duration-500">
        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-6 text-center font-poppins transition-all duration-500">
          Update Food Info
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-gray-200 transition-all duration-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-gray-200 transition-all duration-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">
              Pickup Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-gray-200 transition-all duration-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">
              Expiration Date & Time
            </label>
            <input
              type="datetime-local"
              name="expireAt"
              value={new Date(formData.expireAt).toISOString().slice(0, 16)}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-gray-200 transition-all duration-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">
              Food Image URL
            </label>
            <input
              type="text"
              name="foodImage"
              value={formData.foodImage}
              onChange={handleChange}
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-gray-200 transition-all duration-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">
              Additional Note
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows="4"
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-gray-200 transition-all duration-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">
              Your Name
            </label>
            <input
              type="text"
              value={formData.userName}
              readOnly
              className="w-full border p-3 rounded-md bg-gray-100 dark:bg-gray-600 dark:text-gray-300 transition-all duration-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-500">
              Your Email
            </label>
            <input
              type="email"
              value={formData.userEmail}
              readOnly
              className="w-full border p-3 rounded-md bg-gray-100 dark:bg-gray-600 dark:text-gray-300 transition-all duration-500"
            />
          </div>

          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-all duration-300 cursor-pointer"
            >
              Update Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFoodInfo;
