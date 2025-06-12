import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase.config";
import Loading from "../utils/Loading";
import axios from "axios";

const auth = getAuth(app);

const AddFood = () => {
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    quantity: "",
    location: "",
    expireAt: "",
    note: "",
    userName: "",
    userEmail: "",
  });

  // Set user info from Firebase auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData((prev) => ({
          ...prev,
          userName: user.displayName || "Anonymous",
          userEmail: user.email,
           userImage: user.photoURL,
        }));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://foodcircle-server.vercel.app/foods", formData);

      if (response.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Food Added",
          text: `You successfully shared "${formData.foodName}"!`,
        });

        // Reset form except user info
        setFormData((prev) => ({
          ...prev,
          foodName: "",
          foodImage: "",
          quantity: "",
          location: "",
          expireAt: "",
          note: "",
        }));
      }
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center font-[Poppins]">
          Share Surplus Food
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Food Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
              placeholder="e.g., Chicken Curry"
            />
          </div>

          {/* Food Quantity */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Quantity (Servings)
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
              placeholder="e.g., 5 servings"
            />
          </div>

          {/* Pickup Location */}
          <div className="sm:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Pickup Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
              placeholder="e.g., 123 Main St, NY"
            />
          </div>

          {/* Expire Date and Time */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Expiration Date & Time
            </label>
            <input
              type="datetime-local"
              name="expireAt"
              value={formData.expireAt}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Food Image URL
            </label>
            <input
              type="text"
              name="foodImage"
              value={formData.foodImage}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
              placeholder="Paste image URL"
            />
          </div>

          {/* Additional Note */}
          <div className="sm:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Additional Note
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows="4"
              className="w-full border p-3 rounded-md"
              placeholder="e.g., Vegetarian, contains nuts, spicy, etc."
            ></textarea>
          </div>

          {/* Firebase User Info */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              value={formData.userName}
              readOnly
              className="w-full border p-3 rounded-md bg-gray-100 text-gray-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              value={formData.userEmail}
              readOnly
              className="w-full border p-3 rounded-md bg-gray-100 text-gray-600"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300 cursor-pointer"
            >
              Add Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
