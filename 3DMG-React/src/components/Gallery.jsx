// import React from 'react'
import "./Gallery.css";

import pikachu from "../assets/pikachu.gif";
import batman from "../assets/batman.gif";
import fish from "../assets/fish.gif";
import beagle from "../assets/beagle.gif";
import penguine from "../assets/penguine.gif";
import penguine2 from "../assets/penguine2.gif";
import blackdog from "../assets/blackdog.gif";
import cow from "../assets/cow.gif";
import deadpool from "../assets/deadpool.gif";
import jedi from "../assets/jedi.gif";
import loki from "../assets/loki.gif";
import thor from "../assets/thor.gif";
import whiteboy from "../assets/whiteboy.gif";
import whitepanda from "../assets/whitepanda.gif";
import whiteninja from "../assets/whiteninja.gif";
// import blackboy from "../assets/blackboy.gif";

// import blackpanda from "../assets/blackpanda.gif";
// import blackpug from "../assets/blackpug.gif";
// import cat1 from "../assets/cat1.gif";

// import egg from "../assets/egg.gif";
// import giraffe from "../assets/giraffe.gif";

// import lion from "../assets/lion.gif";

// import pikachu2 from "../assets/pikachu2.gif";
// import shinchan from "../assets/shinchan.gif";
// import starfish from "../assets/starfish.gif";

// import whitecat from "../assets/whitecat.gif";

// import whitepug from "../assets/whitepug.gif";

import Galleryslider from "../components/Galleryslider.jsx";
import "@google/model-viewer/dist/model-viewer";

const Gallery = () => {
  const modelLink1 =
    "https://replicate.delivery/pbxt/yH7dlRvJ5qbCG93cF4ho0fMkjwfHoGIN6eOcmOb9zChpFV0lA/tmphyqv4lnd.glb";
  const modelLink2 =
    "https://replicate.delivery/pbxt/fBSfBTCfwjNvJJGMZFveIOdn3IFtg7eK4y3hApfG5ZXPPiiuE/tmp4jt0cijg.glb";
  const modelLink3 =
    "https://replicate.delivery/pbxt/DA0vwevQe0hWuEhlwWZxRQUwNSBaOL1jfLDGcmUceU9GHooLB/tmpws6tt36f.glb";
  const modelLink4 =
    "https://replicate.delivery/pbxt/9b3dWPRbsKrpFZosuc51foqDy3PY7yRH9Pyemwl2cK3L5J6SA/tmp4otv02yv.glb";
  const modelLink5 =
    "https://replicate.delivery/pbxt/9jJWiB3l7I6oDhLTUopHorg2jGIuLQ7C84qmdf5vBg5v9EdJA/tmp622m01p1.glb";
  const modelLink6 =
    "https://replicate.delivery/pbxt/eYclRJhVh9U7XqHSi0YcfPYzvgMc4BX8UCmaw5ioRMvZAK6SA/tmpndxpokhx.glb";
 
  return (
    <>
      <div className="Slider">
        <Galleryslider />
      </div>
      <div className="TextTo3DHeading">
        <h2>Text to 3-D model generation</h2>
      </div>

      <div className="TextTo3DContentMainDiv">
        <div className="TextTo3DContent">
          <div className="TextTo3DElement1">
            <img
              src={deadpool}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement2">
            <img
              src={batman}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement3">
            <img
              src={blackdog}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement4">
            <img
              src={penguine2}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement5">
            <img
              src={fish}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement6">
            <img
              src={cow}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement7">
            <img
              src={penguine}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement8">
            <img
              src={pikachu}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement9">
            <img
              src={thor}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>

      <div className="ImageTo3DHeading">
        <h2>Image to 3-D model generation</h2>
      </div>

      <div className="ImageTo3DContentMainDiv">
        <div className="ImageTo3DContent">
          <div className="ImageTo3DContentEle1">
            <img
              src={beagle}
              alt="img1"
              style={{ width: "18vw", height: "32vh", borderRadius: "10px" }}
            />

            {modelLink1 && (
              <model-viewer
                src={modelLink1}
                alt="A 3D model"
                style={{ width: "18vw", height: "36vh" }}
                auto-rotate
                camera-controls
              ></model-viewer>
            )}
          </div>

          <div className="ImageTo3DContentEle2">
            <img
              src={loki}
              alt="img2"
              style={{ width: "18vw", height: "32vh", borderRadius: "10px" }}
            />
            {modelLink2 && (
              <model-viewer
                src={modelLink2}
                alt="A 3D model"
                style={{ width: "18vw", height: "36vh" }}
                auto-rotate
                camera-controls
              ></model-viewer>
            )}
          </div>
          <div className="ImageTo3DContentEle3">
            <img
              src={whitepanda}
              alt="img3"
              style={{ width: "18vw", height: "32vh", borderRadius: "10px" }}
            />
            {modelLink3 && (
              <model-viewer
                src={modelLink3}
                alt="A 3D model"
                style={{ width: "18vw", height: "36vh" }}
                auto-rotate
                camera-controls
              ></model-viewer>
            )}
          </div>
          <div className="ImageTo3DContentEle4">
            <img
              src={whiteboy}
              alt="img4"
              style={{ width: "18vw", height: "32vh", borderRadius: "10px" }}
            />
            {modelLink4 && (
              <model-viewer
                src={modelLink4}
                alt="A 3D model"
                style={{ width: "18vw", height: "36vh" }}
                auto-rotate
                camera-controls
              ></model-viewer>
            )}
          </div>
          <div className="ImageTo3DContentEle5">
            <img
              src={jedi}
              alt="img5"
              style={{ width: "18vw", height: "32vh", borderRadius: "10px" }}
            />
            {modelLink5 && (
              <model-viewer
                src={modelLink5}
                alt="A 3D model"
                style={{ width: "18vw", height: "36vh" }}
                auto-rotate
                camera-controls
              ></model-viewer>
            )}
          </div>
          <div className="ImageTo3DContentEle6">
            <img
              src={whiteninja}
              alt="img6"
              style={{ width: "18vw", height: "32vh", borderRadius: "10px" }}
            />
            {modelLink6 && (
              <model-viewer
                src={modelLink6}
                alt="A 3D model"
                style={{ width: "18vw", height: "36vh" }}
                auto-rotate
                camera-controls
              ></model-viewer>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
