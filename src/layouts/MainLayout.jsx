import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Home from "../components/Home";
import ScrollToTop from "../utils/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <header>
        <nav className="py-10 border-b border-gray-200 dark:border-gray-700">
          <Navbar />
        </nav>
      </header>
      <div className="container">
        <main className="pt-10">
          <Outlet>
            <Home />
          </Outlet>
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
