import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Home from "../components/Home";
import ScrollToTop from "../utils/ScrollToTop";
import getBreadcrumbItems from "../utils/getBreadcrumbItems";
import Breadcrumb from "../components/Breadcrumb";

const MainLayout = () => {
   const location = useLocation();
  const breadcrumbItems = getBreadcrumbItems(location.pathname);
  return (
    <>
      <div className="container">
        <header>
          <nav className="py-10">
            <Navbar />
          </nav>
         <div className="mt-10">
            <Breadcrumb items={breadcrumbItems}/>
         </div>
        
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
