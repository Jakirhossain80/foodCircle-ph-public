import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router";
import {
  showSuccessAlert,
  showErrorAlert,
  showConfirmDialog,
} from "../utils/SweetAlert";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showErrorAlert("Please fill in both email and password.");
      return;
    }

    setLoading(true);
    try {
      await signIn(email, password);
      showSuccessAlert("Login successful!");
      navigate(`${location.state ? location.state : "/"}`);
    } catch (err) {
      showErrorAlert(
        "Login failed. Please check your email and password and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      showSuccessAlert("Google login successful!");
      navigate(`${location.state ? location.state : "/"}`);
    } catch (err) {
      showErrorAlert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full sm:w-96 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-xl font-extrabold text-green-600 mb-6 font-[Poppins] text-center">
          Login to FoodCircle
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200 flex items-center justify-center cursor-pointer"
            disabled={loading}
          >
            {loading ? (
              <span className="loader ease-linear border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="my-4 text-center text-gray-400">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-gray-800 border py-2 px-4 rounded hover:bg-gray-100 transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/registration"
            className="text-green-600 hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
