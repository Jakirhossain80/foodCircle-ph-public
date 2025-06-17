import React, { useState } from "react";
import UploadImage from "./UploadImage.JSX";
import ImageAnalyzer from "./ImageAnalyzer.JSX";


const FoodUpload = () => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl min-h-64 mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upload & Analyze Food</h2>

      <UploadImage onUpload={setImageUrl} />

      {imageUrl && (
        <>
          <img src={imageUrl} alt="Uploaded" className="w-64 h-64 object-cover mx-auto my-4 rounded-md" />
          <ImageAnalyzer imageUrl={imageUrl} />
        </>
      )}
    </div>
  );
};

export default FoodUpload;
