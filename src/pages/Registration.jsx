import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate(); // ✅ Initialize navigation

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoURL: '',
    password: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const { name, email, photoURL, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'password') setPasswordError('');
  };

  const validatePassword = (pwd) => {
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const isLongEnough = pwd.length >= 6;

    if (!hasUppercase) {
      setPasswordError('Password must contain at least 6 digit of one uppercase letter an one lowercase letter.');
      return false;
    }
    if (!hasLowercase) {
      setPasswordError('Password must contain at least one lowercase letter.');
      return false;
    }
    if (!isLongEnough) {
      setPasswordError('Password must be at least 6 characters long.');
      return false;
    }

    setPasswordError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !photoURL || !password) {
      Swal.fire('Please fill in all fields.');
      return;
    }

    if (!validatePassword(password)) return;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // ✅ Update Firebase profile with name and photoURL
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photoURL,
            });

            // ✅ Show success alert only after profile update
            Swal.fire({
              icon: 'success',
              title: 'Registration Successful',
              text: `Welcome to HobbyHub, ${name}!`,
            });

            // ✅ Navigate to Home page
            navigate('/');
          })
          .catch((error) => {
            Swal.fire('Profile update failed', error.message, 'error');
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire('Error', errorMessage, 'error');
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full sm:w-96 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center mb-6">
          <FaUserPlus className="text-3xl text-green-600 mx-auto mb-2" />
          <h2 className="text-2xl font-bold font-[Poppins] text-green-600">
            Create Your FoodCircle Account
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            value={photoURL}
            onChange={handleChange}
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="w-full p-3 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {passwordError && (
            <p className="text-sm text-red-600 mb-4">{passwordError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-green-600 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
