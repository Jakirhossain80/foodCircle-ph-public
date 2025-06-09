import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Home from "../components/Home";
import ScrollToTop from "../utils/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <div className="container">
        <header>
          <nav className="py-10">
            <Navbar />
          </nav>
        </header>

        <main className="pt-20">
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
