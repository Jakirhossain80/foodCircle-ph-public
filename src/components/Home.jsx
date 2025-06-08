import React from "react";
import BannerSlider from "./BannerSlider";
import FeaturedFoods from "./FeaturedFoods";
import CommunityImpact from "./CommunityImpact";

const Home = () => {
  return (
    <>
      <div>
        <BannerSlider />
      </div>
      <div className="mt-20 mb-32">
        <FeaturedFoods />
      </div>
      <div className="my-20">
        <CommunityImpact />
      </div>
    </>
  );
};

export default Home;
