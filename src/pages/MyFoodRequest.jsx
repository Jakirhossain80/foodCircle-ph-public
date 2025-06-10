import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../utils/Loading";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/requests?email=${user.email}`);
        setRequests(res.data);
      } catch (err) {
        console.error("Error fetching requests", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchRequests();
  }, [user]);

  if (loading) return <Loading />;

  return (
    <div className="p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {requests.map((req) => (
        <div key={req._id} className="border border-gray-300 p-6 rounded-lg shadow bg-white space-y-1">
          <img src={req.foodImage} className="w-full h-64 object-cover rounded-sm mb-4" />
          <h2 className="text-xl font-semibold text-green-600">{req.foodName}</h2>
          <p><strong>Donor:</strong> {req.donorName} ({req.donorEmail})</p>
          <p><strong>Pickup Location:</strong> {req.location}</p>
          <p><strong>Expires At:</strong> {new Date(req.expireAt).toLocaleString()}</p>
          <p><strong>Your Notes:</strong> {req.notes || "N/A"}</p>
          <p><strong>Requested At:</strong> {new Date(req.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default MyFoodRequest;
