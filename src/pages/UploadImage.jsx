import React, { useState } from "react";

const UploadImage = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "foodcircle_upload");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dqaq0bomn/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Uploaded Image URL:", data.secure_url);
      onUpload(data.secure_url);
    } catch (error) {
      console.error("Cloudinary upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} className="mb-4" />
      <button
        onClick={handleUpload}
        disabled={!image || loading}
        className="bg-green-600 text-white font-semibold  px-6 py-2 rounded-full cursor-pointer hover:bg-green-700 duration-300"
      >
        {loading ? "Uploading..." : "Upload to Cloudinary"}
      </button>
    </div>
  );
};

export default UploadImage;
