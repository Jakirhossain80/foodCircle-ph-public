import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase.config";
import axios from "axios";
import Loading from "../utils/Loading";
import { FaEdit, FaTrash } from "react-icons/fa";

const auth = getAuth(app);

const ManageMyFoods = () => {
  const [user, setUser] = useState(null);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Ensure route protection
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) setUser(u);
      else navigate("/login");
    });
    return unsubscribe;
  }, [navigate]);

  // Fetch user-specific foods
  useEffect(() => {
    if (!user) return;
    axios
      .get(`http://localhost:3000/myfoods?email=${user.email}`)
      .then((res) => setFoods(res.data))
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Unable to fetch your foods.", "error");
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00c853 ",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(`http://localhost:3000/food/${id}`)
          .then(() => {
            setFoods((f) => f.filter((e) => e._id !== id));
            Swal.fire("Deleted!", "Food removed.", "success");
          })
          .catch(() => Swal.fire("Error", "Deletion failed.", "error"));
      }
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold text-green-600 mb-6 text-center font-poppins">
        Manage My Foods
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Qty</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Expires</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, i) => (
              <tr key={food._id} className="text-gray-700 border-b text-center">
                <td className="py-2 px-4">{i + 1}</td>
                <td className="py-2 px-4">
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="h-12 w-12 rounded-full mx-auto object-cover"
                  />
                </td>
                <td className="py-2 px-4">{food.foodName}</td>
                <td className="py-2 px-4">{food.quantity}</td>
                <td className="py-2 px-4">{food.location}</td>
                <td className="py-2 px-4">
                  {new Date(food.expireAt).toLocaleString()}
                </td>
                <td className="py-2 px-4 space-x-6">
                  <button
                    onClick={() => navigate(`/updatefood/${food._id}`)}
                    className="text-amber-500 hover:text-amber-700 cursor-pointer duration-300 p-2"
                  >
                    <FaEdit size={22} />
                  </button>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="text-rose-500 hover:text-rose-700 cursor-pointer duration-300 p-2"
                  >
                    <FaTrash size={22} />
                  </button>
                </td>
              </tr>
            ))}
            {foods.length === 0 && (
              <tr>
                <td colSpan="7" className="py-4">
                  No foods found. Try adding some!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFoods;
