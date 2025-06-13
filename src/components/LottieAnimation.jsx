
import React from "react";
import Lottie from "lottie-react";

const LottieAnimation = ({ animationData, width = "100%", height = "100%", loop = true }) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={animationData} loop={loop} />
    </div>
  );
};



export default LottieAnimation;
