import React, { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(
      "http://13.204.120.208:5000/upload",
      formData
    );

    setImageUrl(res.data.imageUrl);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>DeployX FULL CI/CD WORKING 🚀></h1>

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button onClick={uploadImage}>
        Upload
      </button>

      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img
            src={imageUrl}
            alt="uploaded"
            width="300"
          />
        </div>
      )}
    </div>
  );
}

export default App;
