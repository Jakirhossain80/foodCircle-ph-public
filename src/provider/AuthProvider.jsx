import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import axios from "axios";
import Cookies from "js-cookie";
import app from "../firebase.config";

// Create the context
export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Observe auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const email = currentUser.email;
        try {
          const { data } = await axios.post(
            "https://foodcircle-live.vercel.app/jwt",
            { email }
          );
          Cookies.set("foodcircle-token", data.token, { expires: 7 });
          setUser(currentUser);
        } catch (error) {
          console.error("Failed to fetch JWT", error);
        }
      } else {
        Cookies.remove("foodcircle-token");
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Signup
  const createUser = async (email, password) => {
  setLoading(true);
  return await createUserWithEmailAndPassword(auth, email, password);
};


  // Email/Password login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout = () => {
    setLoading(true);
    Cookies.remove("foodcircle-token");
    return signOut(auth);
  };

  const authData = {
    user,
    loading,
    createUser,
    signIn,
    googleLogin,
    logout,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
