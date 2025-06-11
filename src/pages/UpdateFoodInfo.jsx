import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../utils/Loading";
import { AuthContext } from "../provider/AuthProvider";

const UpdateFoodInfo = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/food/${id}`)
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

  // Clean up fields that should not be sent in the update
  delete updatePayload._id;
  delete updatePayload.userName;
  delete updatePayload.userEmail;

  axios
    .put(`http://localhost:3000/food/${id}`, updatePayload)
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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center font-poppins">
          Update Food Info
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Form fields */}
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
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
            />
          </div>
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
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Expiration Date & Time
            </label>
            <input
              type="datetime-local"
              name="expireAt"
              value={new Date(formData.expireAt).toISOString().slice(0, 16)}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-md"
            />
          </div>
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
            />
          </div>
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
            />
          </div>

          {/* Read‑only user info */}
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

          {/* Submit button */}
          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300 cursor-pointer"
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
