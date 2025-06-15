import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

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

            Swal.fire({
              icon: 'success',
              title: 'Registration Successful',
              text: `Welcome to HobbyHub, ${name}!`,
            });

            navigate('/');
          })
          .catch((error) => {
            Swal.fire('Profile update failed', error.message, 'error');
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire('Error', errorMessage, 'error');
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 transition-all duration-500">
      <div className="w-full sm:w-96 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-all duration-500">
        <div className="text-center mb-6">
          <FaUserPlus className="text-3xl text-green-600 dark:text-green-400 mx-auto mb-2 transition-all duration-500" />
          <h2 className="text-2xl font-bold font-[Poppins] text-green-600 dark:text-green-400 transition-all duration-500">
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
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition-all duration-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition-all duration-500"
          />

          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            value={photoURL}
            onChange={handleChange}
            className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition-all duration-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="w-full p-3 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition-all duration-500"
          />
          {passwordError && (
            <p className="text-sm text-rose-500 mb-4 transition-all duration-500">{passwordError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all duration-500 cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 transition-all duration-500">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-green-600 dark:text-green-400 hover:underline font-medium transition-all duration-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
