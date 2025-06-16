import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase.config";
import Loading from "../utils/Loading";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosSecure from "../api/axiosSecure";


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
    userImage: "",
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData((prev) => ({
          ...prev,
          userName: user.displayName || "Anonymous",
          userEmail: user.email,
          userImage: user.photoURL,
        }));

        const fetchMyFoods = async () => {
          const response = await axiosSecure.get(`/myfoods?email=${user.email}`);
          console.log(response.data);
        };

        fetchMyFoods();
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: async (newFood) => {
      const res = await axiosSecure.post("/foods", newFood);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Food Added",
          text: `You successfully shared "${formData.foodName}"!`,
        });

        queryClient.invalidateQueries({ queryKey: ['foods'] });

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
    },
    onError: (error) => {
      console.error("Error adding food:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to Add Food",
        text: error.message || "Something went wrong",
      });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 transition-all duration-500">
  
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-md shadow-md transition-all duration-500">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6 text-center font-[Poppins] transition-all duration-500">
          Share Surplus Food
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200 transition-all duration-500">Food Name</label>
            <input
              type="text"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-500"
              placeholder="e.g., Chicken Curry"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200 transition-all duration-500">Quantity (Servings)</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-500"
              placeholder="e.g., 5 servings"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200 transition-all duration-500">Pickup Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-500"
              placeholder="e.g., 123 Main St, NY"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200 transition-all duration-500">Expiration Date & Time</label>
            <input
              type="datetime-local"
              name="expireAt"
              value={formData.expireAt}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200 transition-all duration-500">Food Image URL</label>
            <input
              type="text"
              name="foodImage"
              value={formData.foodImage}
              onChange={handleChange}
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-500"
              placeholder="Paste image URL"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200 transition-all duration-500">Additional Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows="4"
              className="w-full border p-3 rounded-md bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-500"
              placeholder="e.g., Vegetarian, contains nuts, spicy, etc."
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200 transition-all duration-500">Your Name</label>
            <input
              type="text"
              value={formData.userName}
              readOnly
              className="w-full border p-3 rounded-md bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 transition-all duration-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200 transition-all duration-500">Your Email</label>
            <input
              type="email"
              value={formData.userEmail}
              readOnly
              className="w-full border p-3 rounded-md bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 transition-all duration-500"
            />
          </div>

          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={isPending}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300 cursor-pointer"
            >
              {isPending ? "Adding..." : "Add Food"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
