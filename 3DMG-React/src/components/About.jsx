import "./About.css";
import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <>
      <div className="AboutUsElementsPlacement">
        <div className="AboutUsSplineContainer">
          <Spline scene="https://prod.spline.design/Db6kLlBZV-ZyEHf3/scene.splinecode" />
        </div>
        <div className="AboutUsMainDiv">
          <div className="AboutusContent">
            <h1>ABOUT US</h1>
            <p>
              Welcome to 3DIFY, your ultimate destination for creating dynamic
              3D models and multi-view images. Our innovative platform allows
              you to generate detailed and interactive 3D visualizations with
              ease. By entering descriptions in Hindi or English, you can create
              3D models and multi-view images that can be rotated and viewed
              from all 360 degrees, giving you a comprehensive understanding of
              the product. Additionally, you can provide an image or an image
              URL, and our platform will generate both multi-view images and a
              3D model, just like with text input. This feature is perfect for
              quickly transforming visual concepts into interactive models. At
              3DIFY, we are dedicated to enhancing product visualization by
              making advanced technology accessible to everyone. Join us to
              transform your ideas into immersive 3D experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="ContactUsPlacement">
        <div className="ContactUsSplineContainer">
          <Spline scene="https://prod.spline.design/aPQhl-hs1AMLWc4f/scene.splinecode" />
        </div>

        <div className="ContactMainDiv">
          <div className="ContactUsLeft">
            <div className="GetInTouchHeading">
              <h5>Get in Touch</h5>
            </div>
            <div className="GetInTouchPrompt">
              <h3>Let&apos;s Chat, Reach Out to Us</h3>
            </div>
            <div className="GetInTouchPara">
              <p>
                Have questions or feedback? We&apos;re here to help. Send us a
                message, and we&apos;ll respond within 24 hours
              </p>
            </div>
            <hr />
            <div className="GetInTouchNameSection">
              <div className="ContactFirstName">
                <p>First Name</p>
                <input
                  type="text"
                  className="ContactFirstInput"
                  placeholder="First Name"
                />
              </div>
              <div className="ContactLastName">
                <p>Last Name</p>
                <input
                  type="text"
                  className="ContactLastInput"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="GetInTouchEmail">
              <p>Email Address</p>
              <input
                type="text"
                className="EmailInput"
                placeholder="Email Address"
              />
            </div>
            <div className="GetInTouchMessage">
              <p>Message</p>
              <textarea name="comment" rows="10" cols="50">
                Enter your message here...
              </textarea>
            </div>
            <div className="GetInTouchCheckBox">
              <input
                type="checkbox"
                id="agreeConditions"
                name="agreeConditions"
                value="yes"
              />
              <label htmlFor="agreeConditions">
                I agree to your friendly privacy policy
              </label>
            </div>
            <div className="orangeBTN">
              <button>Send</button>
            </div>
          </div>
          {/* <div className="ContactUsRight">
   

    <div className="ContactUsDivs">
      <div className="contactUscard">
        <div className="contactUsitem">
          <div className="icon email-icon"></div>
          <div className="contactUsdetails">
            <div className="contactUstype">Email</div>
           
            <a href="mailto:techteam@3dify.com" className="contactUsinfo">
              techteam@3dify.com
            </a>
          </div>
        </div>
        <div className="contactUsitem">
          <div className="icon phone-icon"></div>
          <div className="contactUsdetails">
            <div className="contactUstype">Phone</div>
         
            <a href="tel:+025283249231" className="contactUsinfo">
              (0252) 8324 9231
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

          <div className="ContactUsRight">
            <div className="ContactUsItemHeading">
              <h3>Contact us at:</h3>
            </div>
            <div className="contactUsitem">
              <div className="icon email-icon"></div>
              <div className="contactUsdetails">
                <div className="contactUstype">Email</div>

                <a href="mailto:techteam@3dify.com" className="contactUsinfo">
                  techteam@3dify.com
                </a>
              </div>
            </div>
            <div className="contactUsitem">
              <div className="icon phone-icon"></div>
              <div className="contactUsdetails">
                <div className="contactUstype">Phone</div>

                <a href="tel:+025283249231" className="contactUsinfo">
                  (0252) 8324 9231
                </a>
              </div>
            </div>
          </div>
        </div>

<div className="ContactusMapdiv">

<div className="ContactusMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.6706086659474!2d76.81105197527428!3d28.247675775877134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d478e1d59b7fb%3A0xb1787ccb5563c223!2sBML%20Munjal%20University%20(BMU)!5e0!3m2!1sen!2sin!4v1717166220411!5m2!1sen!2sin"
        width="1400"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
</div>
      

      </div>
    </>
  );
};

export default About;
