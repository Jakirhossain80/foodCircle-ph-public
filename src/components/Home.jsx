import React from "react";
import BannerSlider from "./BannerSlider";
import FeaturedFoods from "./FeaturedFoods";

const Home = () => {
  return (
    <>
      <div>
        <BannerSlider />
      </div>
      <div className="my-20">
        <FeaturedFoods />
      </div>
    </>
  );
};

export default Home;
