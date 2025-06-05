import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { signOut, getAuth } from "firebase/auth";
import app from "../firebase.config";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logoImage from "../assets/logo-food.png";

const auth = getAuth(app);

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/availablefoods"
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : ""
        }
      >
        Available Foods
      </NavLink>
      <NavLink
        to="/addfood"
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : ""
        }
      >
        Add Food
      </NavLink>
      <NavLink
        to="/managemyfoods"
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : ""
        }
      >
        Manage My Foods
      </NavLink>
      <NavLink
        to="/myfoodrequest"
        className={({ isActive }) =>
          isActive ? "text-green-600 font-semibold" : ""
        }
      >
        My Food Request
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white border-gray-200 px-4 py-3 flex justify-between items-center relative z-50">
      {/* Logo and Title */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logoImage} alt="Logo" className="h-8 w-8" />
        <h1 className="text-xl font-bold text-green-600 font-poppins">
          FoodCircle
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-gray-800 font-inter">
        {navLinks}
        <button className="text-xl cursor-pointer">
          <FiSun />
        </button>

        {!user && (
          <>
            <NavLink to="/login" className="text-amber-500 font-semibold">
              Login
            </NavLink>
            <NavLink
              to="/registration"
              className="text-amber-500 font-semibold"
            >
              Signup
            </NavLink>
          </>
        )}

        {user && (
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <img
              src={user.photoURL}
              alt="User"
              className="h-10 w-10 rounded-full border-2 border-green-500 cursor-pointer"
            />
            {user && showDropdown && (
              <div className="absolute right-0 bg-white border border-gray-200 p-3 shadow-md rounded text-sm w-44">
                <p className="font-medium text-gray-800">{user.displayName}</p>
                <button
                  onClick={handleLogout}
                  className="mt-2 w-full text-left text-rose-500 hover:text-rose-600 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          className="text-2xl text-green-600 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-40 flex flex-col gap-4 p-5 shadow-md text-gray-800 font-inter md:hidden">
          <>
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/availablefoods"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : ""
              }
            >
              Available Foods
            </NavLink>
            <NavLink
              to="/addfood"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : ""
              }
            >
              Add Food
            </NavLink>
            <NavLink
              to="/managemyfoods"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : ""
              }
            >
              Manage My Foods
            </NavLink>
            <NavLink
              to="/myfoodrequest"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-green-600 font-semibold" : ""
              }
            >
              My Food Request
            </NavLink>
          </>

          <button className="text-xl w-fit cursor-pointer">
            <FiSun />
          </button>

          {!user && (
            <>
              <NavLink
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-amber-500 font-semibold"
              >
                Login
              </NavLink>
              <NavLink
                to="/registration"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-amber-500 font-semibold"
              >
                Signup
              </NavLink>
            </>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <img
                src={user.photoURL}
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-green-500"
              />
              <div>
                <p className="font-medium">{user.displayName}</p>
                <button
                  onClick={handleLogout}
                  className="text-rose-500 hover:text-rose-600 text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
