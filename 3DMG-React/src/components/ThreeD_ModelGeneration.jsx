import { useState } from "react";
import "./ThreeD_ModelGeneration.css";
import "@google/model-viewer/dist/model-viewer";

import {
  Generate,
  GenerateImage,
  translatePrompt,
  isValidURL,
  isAlphabetic,
} from "./ThreeDutils";
import Spline from "@splinetool/react-spline";

const ThreeD_ModelGeneration = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("text");
  // const [modelLink, setModelLink] = useState("https://replicate.delivery/pbxt/4AokPMo5MPrgI1wIuj8Fcae4Rf6CpEixlm102eCcJShwCAolA/tmprdu7bxpx.glb");
  const [modelLink, setModelLink] = useState(
    "https://replicate.delivery/pbxt/eYclRJhVh9U7XqHSi0YcfPYzvgMc4BX8UCmaw5ioRMvZAK6SA/tmpndxpokhx.glb"
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    if (inputType === "text") {
      if (isValidURL(inputValue)) {
        alert("Please enter Text");
      } else {
        if (isAlphabetic(inputValue)) {
          GenerateImage(inputValue, setModelLink);
        } else {
          translatePrompt(inputValue, setModelLink);
        }
      }
    } else {
      if (!isValidURL(inputValue)) {
        alert("Please enter URL");
      } else {
        Generate(inputValue, setModelLink);
      }
    }
  };

  const handleButtonClick = (type) => {
    setInputType(type);
  };

  return (
    <>
      <div className="PlacingThreeModelPageElements">
        <div className="ThreeDModelMainDiv">
          <div className="ThreeDModelLeftSection">
            <div className="ThreeDModelHeading">
              <p>3D Model Generator</p>
            </div>
            <div className="RadioButtonPos">
              <div className="RadiobuttonMainDiv">
                <button
                  className={`RadioButton ${
                    inputType === "text" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("text")}
                >
                  Text
                </button>
                <button
                  className={`RadioButton ${
                    inputType === "image" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("image")}
                >
                  Image
                </button>
              </div>
            </div>
            <div className="ThreeDInputPos">
              <div className="ThreeDinput-container">
                <textarea
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder={
                    inputType === "text"
                      ? "Enter Your Text Here!"
                      : "Enter Your Image Here!"
                  }
                  className="ThreeDinput-field"
                  rows="2"
                  wrap="soft"
                  style={{ resize: "none" }}
                />
                <button
                  onClick={handleGenerate}
                  className="ThreeDgenerate-button"
                >
                  Generate 3D Model
                </button>
              </div>
            </div>
          </div>
          <div className="ThreeDModelRightSection">
            {modelLink && (
              <model-viewer
                src={modelLink}
                alt="A 3D model"
                style={{ width: "600px", height: "500px" }}
                auto-rotate
                camera-controls
              ></model-viewer>
            )}
          </div>
        </div>
<div className="ThreeDmodelSplineContainer">
<Spline scene="https://prod.spline.design/29cPPVHVqaMBysTm/scene.splinecode" />
</div>


      </div>
      
    </>
  );
};

export default ThreeD_ModelGeneration;
