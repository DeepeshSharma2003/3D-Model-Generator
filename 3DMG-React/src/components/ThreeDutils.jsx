const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://api.replicate.com/v1/predictions";
const apiToken3d = "r8_Fa2uL5Pv0rOCBFX1WGeeyJ980mAlJgC2u64PU";
const apiTokenImgGen = "r8_dEofO9tibufJKGCoyVUeuHfcCduoPKr1VYZvT";
const apiTokenHindi = "r8_T8hvjdRXnBnT0NgVkk631Ci7e3wb2ci2Mr6n7";

// eslint-disable-next-line react-refresh/only-export-components
export function isAlphabetic(str) {
  const result = [...str]
    .every(char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'));
  console.log(result);
  return result;
}

// eslint-disable-next-line react-refresh/only-export-components
export function isValidURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
  return pattern.test(str);
}

// eslint-disable-next-line react-refresh/only-export-components
export async function translatePrompt(prompt, setModelLink) {
  const data = JSON.stringify({
    version: "668a4fec05a887143e5fe8d45df25ec4c794dd43169b9a11562309b2d45873b0",
    input: {
      input_text: prompt,
      task_name: "T2TT (Text to Text translation)",
      input_audio: "https://replicate.delivery/pbxt/JWSAJpKxUszI0scNYatExIXZX2rJ78UBilGXCTq4Ct9BDwTA/sample_input_2.mp3",
      input_text_language: "Hindi",
      max_input_audio_length: 60,
      target_language_text_only: "English",
      target_language_with_speech: "English"
    }
  });

  try {
    const response = await fetch(`${corsProxyUrl}${targetUrl}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiTokenHindi}`,
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const output = await response.json();
    const predictionUrl = output.urls.get; // This is not used now, but might be useful for debugging or future needs.
    const predictionid = output.id;
    console.log(predictionUrl);
    console.log(predictionid);

    const checkPredictionStatus = async () => {
      const predictionResponse = await fetch(`${corsProxyUrl}${targetUrl}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${apiTokenHindi}`,
        }
      });

      if (!predictionResponse.ok) {
        throw new Error(`HTTP error! status: ${predictionResponse.status}`);
      }

      const predictionOutput = await predictionResponse.json();
      const selectedItem = predictionOutput.results.find(item => item.id === predictionid);
      const predictionStatus = selectedItem.status;

      if (predictionStatus === "succeeded") {
        const translated = selectedItem.output.text_output; // Assuming the translated text is in the output
        GenerateImage(translated, setModelLink);
      } else if (predictionStatus === "failed") {
        console.error("Prediction failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        checkPredictionStatus();
      }
    }

    checkPredictionStatus();

  } catch (error) {
    console.error(error);
  }
}

export async function Generate(path, setModelLink) {
  const input = { image_path: path };
  const data = JSON.stringify({
    version: "476f025230580cb41ffc3b3d6457965f968c63d1db4a0737bef338a851eb62d6",
    input,
  });

  try {
    const response = await fetch(`${corsProxyUrl}${targetUrl}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiToken3d}`,
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const output = await response.json();
    const predictionUrl = output.urls.get; // This is not used now, but might be useful for debugging or future needs.
    const predictionid = output.id;
    console.log(predictionUrl);
    console.log(predictionid);

    const checkPredictionStatus = async () => {
      const predictionResponse = await fetch(`${corsProxyUrl}${targetUrl}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${apiToken3d}`,
        }
      });

      if (!predictionResponse.ok) {
        throw new Error(`HTTP error! status: ${predictionResponse.status}`);
      }

      const predictionOutput = await predictionResponse.json();
      const selectedItem = predictionOutput.results.find(item => item.id === predictionid);
      const predictionStatus = selectedItem.status;

      if (predictionStatus === "succeeded") {
        const modelLink = selectedItem.output[2]; // Assuming the 3D model link is the third item in the output array
        setModelLink(modelLink);
        console.log(modelLink);
      } else if (predictionStatus === "failed") {
        console.error("Prediction failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        checkPredictionStatus();
      }
    }

    checkPredictionStatus();

  } catch (error) {
    console.error(error);
  }
}

export async function GenerateImage(imagetext, setModelLink) {
  console.log("Generating image using the Translated prompt", imagetext);
  const input = { prompt: imagetext };
  const data = JSON.stringify({
    version: "5f24084160c9089501c1b3545d9be3c27883ae2239b6f412990e82d4a6210f8f",
    input,
  });

  try {
    const response = await fetch(`${corsProxyUrl}${targetUrl}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiTokenImgGen}`,
        "Content-Type": "application/json",
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const output = await response.json();
    const predictionUrl = output.urls.get; // This is not used now, but might be useful for debugging or future needs.
    const predictionid = output.id;
    console.log(predictionUrl);
    console.log(predictionid);

    const checkPredictionStatus = async () => {
      const predictionResponse = await fetch(`${corsProxyUrl}${targetUrl}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${apiTokenImgGen}`,
        }
      });

      if (!predictionResponse.ok) {
        throw new Error(`HTTP error! status: ${predictionResponse.status}`);
      }

      const predictionOutput = await predictionResponse.json();
      const selectedItem = predictionOutput.results.find(item => item.id === predictionid);
      const predictionStatus = selectedItem.status;

      if (predictionStatus === "succeeded") {
        const imagelink = selectedItem.output[0]; // Assuming the image link is the first item in the output array
        Generate(imagelink, setModelLink);
      } else if (predictionStatus === "failed") {
        console.error("Prediction failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        checkPredictionStatus();
      }
    }

    checkPredictionStatus();

  } catch (error) {
    console.error(error);
  }
}







