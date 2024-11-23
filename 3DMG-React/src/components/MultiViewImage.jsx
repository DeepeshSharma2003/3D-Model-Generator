
import { useState } from "react";
import "./MultiViewImage.css";
import Spline from "@splinetool/react-spline";

const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://api.replicate.com/v1/predictions";
const apiToken = "r8_Fa2uL5Pv0rOCBFX1WGeeyJ980mAlJgC2u64PU";

async function Generate(path, handleImageLink) {
  const input = { image_path: path };
  const data = JSON.stringify({
    version: "476f025230580cb41ffc3b3d6457965f968c63d1db4a0737bef338a851eb62d6",
    input,
  });

  try {
    const response = await fetch(`${corsProxyUrl}${targetUrl}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const output = await response.json();
    const predictionUrl = output.urls.get;
    const predictionid = output.id;
    console.log(predictionUrl);
    console.log(predictionid);

    const checkPredictionStatus = async () => {
      const predictionResponse = await fetch(`${corsProxyUrl}${targetUrl}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${apiToken}`,
        }
      });

      if (!predictionResponse.ok) {
        throw new Error(`HTTP error! status: ${predictionResponse.status}`);
      }

      const predictionOutput = await predictionResponse.json();
      const selectedItem = predictionOutput.results.find(item => item.id === predictionid);
      const predictionStatus = selectedItem.status;

      if (predictionStatus === "succeeded") {
        const links = selectedItem.output;
        if (links && links.length > 0) {
          handleImageLink(links[0]);
        }
      }
      else if (predictionStatus === "failed") {
        console.error("Prediction failed");
      }
      else{
        await new Promise((resolve) => setTimeout(resolve, 10000));
        checkPredictionStatus();
      }
    }

    checkPredictionStatus();
    
  } catch (error) {
    console.error(error);
  }
}

const MultiViewImage = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("text");
  const [imageLink, setImageLink] = useState("https://replicate.delivery/pbxt/v2DlxfRIeeZB4I5vEpzGfakKeVwpb5kpcsJrvIEWM0Kj1ORXC/mv_show_images.png");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerate = () => {
    console.log("Generating for:", inputValue);
    Generate(inputValue, handleImageLink);
  };

  const handleButtonClick = (type) => {
    setInputType(type);
  };

  const handleImageLink = (link) => {
    setImageLink(link);
  };

  return (
    <>
    <div className="PlacingMultiViewPageElements">

    <div className="MultiViewMainDiv">
      <div className="MultiViewLeftSection">
      <img src={imageLink} alt="Multiview Image" className="MultiViewImage"  style={{ width: "800px", height: "500px" }}/>
      </div>
      <div className="MultiViewRightSection">
      <div className="MultiViewImagesHeading">
        <p>Multi View Image Generator</p>
      </div>
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
      
      <div className="MultiViewInputPos">
        <div className="MultiViewinput-container">
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder={inputType === "text" ? "Enter Your Text Here!" : "Enter Your Image Here!"}
            className="MultiViewinput-field"
            rows="2"
            wrap="soft"
            style={{ resize: "none"}}
          />
          <button
            onClick={handleGenerate}
            className="MultiViewgenerate-button"
          >
            Generate Multiviews
          </button>
        </div>
      </div>
    </div>
    
    </div>

    </div>

    <div className="MultiViewSplineContainer">
<Spline scene="https://prod.spline.design/29cPPVHVqaMBysTm/scene.splinecode" />
</div>
    </>
   
  );
};

export default MultiViewImage;