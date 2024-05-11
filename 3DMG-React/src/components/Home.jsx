// import React from 'react'
import "./Home.css";
import Cube3DFeatures from "./Cube3DFeatures";
import FreePlanCard from "./FreePlanCard";
import BasicPlanCard from "./BasicPlanCard";
import ProPlanCard from "./ProPlanCard";
// import { BrowserRouter as Link} from 'react-router-dom';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <main>
        <div className="transformingMainDiv">
          <div className="transforming ">
            <div className="transformingTXT ">
              <h1>Transforming 2-D into 3-D</h1>
            </div>
            <div className="transformingBTNS">
             

<div className="orangeBTN">
            <Link to="/3-D Model Generation"><button>Get Started Now</button></Link>
          </div>

          <div className="whiteBTN">
            <Link to="/learn-more"><button>Learn More &rarr;</button></Link>
          </div>
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="OurFeatures">
          <div className="FeatureHeading">
            <h6>Features</h6>
            <h1>Our Features</h1>
          </div>
          <div className="features">
            <div className="FeaturesSVG">
              <Cube3DFeatures />
            </div>
            <div className="FeatureContent">
              <h3>3-D Model Generation</h3>
              <p>
                Turn 2-D images or text into 3-D models effortlessly. Upload or
                input your content, and our algorithms create stunning 3-D
                models in seconds
              </p>
            </div>
          </div>
          <div className="features">
            <div className="FeaturesSVG">
              <Cube3DFeatures />
            </div>
            <div className="FeatureContent">
              <h3>Multi-View Image Generation</h3>
              <p>
                Generate dynamic multi-view images from 2-D inputs or text. Add
                depth and perspective to your visuals for enhanced presentations
                or product showcases.
              </p>
            </div>
          </div>
          <div className="features">
            <div className="FeaturesSVG">
              <Cube3DFeatures />
            </div>
            <div className="FeatureContent">
              <h3>Customizable Rendering Options</h3>
              <p>
                Customize rendering styles to achieve your desired look. Adjust
                lighting, textures, and effects for photorealistic or stylized
                renders
              </p>
            </div>
          </div>
          <div className="features">
            <div className="FeaturesSVG">
              <Cube3DFeatures />
            </div>
            <div className="FeatureContent">
              <h3>Seamless Integration and Export</h3>
              <p>
                Integrate smoothly into your workflow and export with ease.
                Support for various file formats ensures compatibility with
                popular design software
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ChooseYourPlansMainDiv">
          <div className="ChooseYourPLans">
            <div className="ChooseYourPlansHeading">
              <h3>Pricing</h3>
              <h1>Choose Your PLan</h1>
            </div>

            <FreePlanCard />

            <BasicPlanCard />

            <ProPlanCard />
          </div>
        </div>
      </section>

      <section>
        <div className="LearnMoreVCMainDiv">
          <div className="LearnMoreVC">
            <div className="VCContentHeading">
              <h1>Revolutionize Your Visual Content</h1>
            </div>

            <div className="VCContentBTN orangeBTN">
              <button>Learn More</button>
            </div>
            
          </div>
        </div>
      </section>

      <article>
        <div className="CommonQuestions">
          <div className="CQtitle">FAQ</div>
          <div className="CommonQue">
            <p>Common</p>
            <p>questions</p>
            <p id="CQsubtitle">
              Here are some of the most common questions that we get.
            </p>
          </div>

          <div className="CQquestion que1">
            <p>Can I convert 2-D images into 3-D models on your website?</p>
            <p id="CQanswer">
              Yes, absolutely! Our platform allows you to effortlessly convert
              2-D images into stunning 3-D models.
            </p>
          </div>

          <div className="CQquestion que2">
            <p>
              How quickly can I generate multi-view images from my 2-D photos?
            </p>
            <p id="CQanswer">
              With our platform, you can generate dynamic multi-view images in
              just a few seconds, adding depth and perspective to your visuals
              instantly
            </p>
          </div>

          <div className="CQquestion que3">
            <p>
              Do I have control over the rendering styles for my 3-D models?
            </p>
            <p id="CQanswer">
              Yes, you have full control! Customize rendering styles to achieve
              your desired look, whether you prefer photorealistic or stylized
              renders
            </p>
          </div>

          <div className="CQquestion que4">
            <p>
              Is it easy to integrate my projects with other design software?
            </p>
            <p id="CQanswer">
              Absolutely! Our platform offers seamless integration with popular
              design software, making collaboration and workflow integration a
              breeze.
            </p>
          </div>

          <div className="CQquestion que5">
            <p>Can I export my creations easily from your platform?</p>
            <p id="CQanswer">
              Yes, exporting your creations is a breeze! Our platform supports
              various file formats for smooth and hassle-free export, ensuring
              compatibility with your preferred design software and platforms.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
