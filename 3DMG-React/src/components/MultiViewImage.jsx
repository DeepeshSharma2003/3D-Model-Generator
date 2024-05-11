import { useState } from "react";
import "./MultiViewImage.css";

const MultiViewImage = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("text");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    console.log("Generating for:", inputValue);
  };

  const handleButtonClick = (type) => {
    setInputType(type);
  };

  return (
    <>
      <div className="RadioButtonPos">
        <div className="RadiobuttonMainDiv">
          <button
            className={`RadioButton ${inputType === "text" ? "active" : ""}`}
            onClick={() => handleButtonClick("text")}
          >
            Text
          </button>
          <button
            className={`RadioButton ${inputType === "image" ? "active" : ""}`}
            onClick={() => handleButtonClick("image")}
          >
            Image
          </button>
        </div>
      </div>

      <div className="MultiViewImagesHeading">
        <p>Multi View Image Generator</p>
      </div>

      <div className="ThreeDInputPos">
        <div className="ThreeDinput-container">
          {inputType === "text" && (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter Your Text Here!"
                className="ThreeDinput-field"
              />
              <button
                onClick={handleGenerate}
                className="ThreeDgenerate-button"
              >
                Generate Multi View Images
              </button>
            </>
          )}
          {inputType === "image" && (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter Your Image Here!"
                className="ThreeDinput-field"
              />
              <button
                onClick={handleGenerate}
                className="ThreeDgenerate-button"
              >
                Generate Multi View Images
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiViewImage;
