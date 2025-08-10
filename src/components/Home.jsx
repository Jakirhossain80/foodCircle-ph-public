import React from "react";
import BannerSlider from "./BannerSlider";
import FeaturedFoods from "./FeaturedFoods";
import CommunityImpact from "./CommunityImpact";
import Testimonials from "./Testimonials";
import JoinTheMovement from "./JoinTheMovement";
import OurMission from "./OurMission";


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
      <div className="mb-16">
        <Testimonials />
      </div>
      <div className="mb-20">
        <OurMission />
      </div>
      <div className="mb-20">
        <JoinTheMovement />
      </div>
      
    </>
  );
};

export default Home;
