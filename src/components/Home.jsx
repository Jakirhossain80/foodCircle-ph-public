import React from "react";
import BannerSlider from "./BannerSlider";
import FeaturedFoods from "./FeaturedFoods";
import CommunityImpact from "./CommunityImpact";
import Testimonials from "./Testimonials";
import JoinTheMovement from "./JoinTheMovement";
import OurMission from "./OurMission";
import CategoryOfSharedFood from "./CategoryOfSharedFood";
import SafetyAndQualityGuideline from "./SafetyAndQualityGuideline";
import PartnersAndSponsors from "./PartnersAndSponsors";
import NewsLetter from "./NewsLetter";


const Home = () => {
 
  return (
    <>

      <div>
        <BannerSlider />
      </div>
      <div className="my-10">
        <FeaturedFoods />
      </div>
      <div className="mb-10">
        <CommunityImpact />
      </div>
      <div className="mb-10">
        <Testimonials />
      </div>
      <div className="mb-10">
        <OurMission />
      </div>
      <div className="mb-10">
        <JoinTheMovement />
      </div>
      <div className="mb-10">
        <CategoryOfSharedFood />
      </div>
      <div className="mb-10">
        <SafetyAndQualityGuideline />
      </div>
      <div className="mb-10">
        <PartnersAndSponsors />
      </div>
      <div className="mb-10">
        <NewsLetter />
      </div>
      
    </>
  );
};

export default Home;
