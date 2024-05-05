// import React from 'react'
import "./Gallery.css";
import pig from "../assets/pig.gif";
import amongus from "../assets/amongus.gif";
import fish from "../assets/fish.gif";
import laptop from "../assets/laptop.gif";
import penguin from "../assets/penguin.gif";
import ring from "../assets/ring.gif";
import sofa from "../assets/sofa.gif";
import trophy from "../assets/trophy.gif";
import Galleryslider from "../components/Galleryslider.jsx";

const Gallery = () => {
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
              src={pig}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement2">
            <img
              src={amongus}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement3">
            <img
              src={fish}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement4">
            <img
              src={laptop}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement5">
            <img
              src={penguin}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement6">
            <img
              src={ring}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement7">
            <img
              src={sofa}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement8">
            <img
              src={trophy}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement9">
            <img
              src={amongus}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>

      <div className="ImageTo3DHeading">
        <h2>Image to 3-D model generation</h2>
      </div>

      <div className="TextTo3DContentMainDiv">
        <div className="TextTo3DContent">
          <div className="TextTo3DElement1">
            <img
              src={pig}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement2">
            <img
              src={amongus}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement3">
            <img
              src={fish}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement4">
            <img
              src={laptop}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement5">
            <img
              src={penguin}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement6">
            <img
              src={ring}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement7">
            <img
              src={sofa}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement8">
            <img
              src={trophy}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
          <div className="TextTo3DElement9">
            <img
              src={amongus}
              alt="Pig's Image"
              style={{ width: "20vw", height: "40vh", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
