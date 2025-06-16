import React, { useState } from "react";
import * as tmImage from "@teachablemachine/image";

const ImageAnalyzer = ({ imageUrl }) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeImage = async () => {
    setLoading(true);
    const modelURL = "/model/model.json";
    const metadataURL = "/model/metadata.json";

    const model = await tmImage.load(modelURL, metadataURL);
    const image = document.getElementById("analyzeImage");
    const predictions = await model.predict(image);
    setResult(predictions);
    setLoading(false);
  };

  const getPredictionSummary = () => {
    if (!result) return null;
    const topPrediction = result.reduce((a, b) => (a.probability > b.probability ? a : b));
    if (topPrediction.className === "Fresh") {
      return `Food seems fresh (~2-3 days remaining)`;
    } else {
      return `Spoilage detected — do not consume!`;
    }
  };

  return (
    <div>
      <img id="analyzeImage" src={imageUrl} alt="To Analyze" className="w-64 h-64 mx-auto my-4 rounded" />

      <button
        onClick={analyzeImage}
        disabled={loading}
        className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 duration-300"
      >
        {loading ? "Analyzing..." : "Analyze Image"}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Prediction:</h3>
          {result.map((res, i) => (
            <p key={i}>
              {res.className}: {(res.probability * 100).toFixed(2)}%
            </p>
          ))}
          <p className="mt-4 font-bold text-lg text-emerald-500">{getPredictionSummary()}</p>
        </div>
      )}
    </div>
  );
};

export default ImageAnalyzer;
