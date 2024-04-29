// import React from 'react'
import "./Home.css";

const Home = () => {
  return (
   <>
     <main>
        <div className="transforming">
            <div className="transformingTXT">
                <h1>Transforming 2-D into 3-D</h1>
            </div>
            <div className="transformingBTNS">
                <div className="orangeBTN">
                    <button>Get Started Now</button>
                </div>
                <div className="whiteBTN">
                    <button>Learn More &rarr;</button>
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
                        {/* <svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-34.8 -34.8 127.60 127.60" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="3.4799999999999995"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#5d576b;" points="29,58 3,45 3,13 29,26 "></polygon> <polygon style="fill:#5d576b;" points="29,58 55,45 55,13 29,26 "></polygon> <polygon style="fill:#5d576b;" points="3,13 28,0 55,13 29,26 "></polygon> </g> </g></svg>                */}
                    </div>
                    <div className="FeatureContent">
                        <h3>3-D Model Generation</h3>
                    <p>Turn 2-D images or text into 3-D models effortlessly. Upload or
                        input your content, and our algorithms create stunning 3-D
                        models in seconds</p>
                    </div>   
                </div>
                <div className="features">
                    <div className="FeaturesSVG">
                        {/* <svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-34.8 -34.8 127.60 127.60" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="3.4799999999999995"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#5d576b;" points="29,58 3,45 3,13 29,26 "></polygon> <polygon style="fill:#5d576b;" points="29,58 55,45 55,13 29,26 "></polygon> <polygon style="fill:#5d576b;" points="3,13 28,0 55,13 29,26 "></polygon> </g> </g></svg>                        */}
                    </div>
                    <div className="FeatureContent">
                        <h3>Multi-View Image Generation</h3>
                        <p>
                            Generate dynamic multi-view images from 2-D inputs or
                            text. Add depth and perspective to your visuals for
                            enhanced presentations or product showcases.</p>
                    </div>
                </div>        
                <div className="features">
                    <div className="FeaturesSVG">
                   
                        {/* <svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-34.8 -34.8 127.60 127.60" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="3.4799999999999995"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#5d576b;" points="29,58 3,45 3,13 29,26 "></polygon> <polygon style="fill:#5d576b;" points="29,58 55,45 55,13 29,26 "></polygon> <polygon style="fill:#5d576b;" points="3,13 28,0 55,13 29,26 "></polygon> </g> </g></svg>                          */}
                    </div>
                    <div className="FeatureContent">
                        <h3>Customizable Rendering Options</h3>
                        <p>
                            Customize rendering styles to achieve your desired look.
                            Adjust lighting, textures, and effects for photorealistic or
                            stylized renders</p>
                    </div>
                </div>      
                <div className="features">
                    <div className="FeaturesSVG">
                        {/* <svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-34.8 -34.8 127.60 127.60" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="3.4799999999999995"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#5d576b;" points="29,58 3,45 3,13 29,26 "></polygon> <polygon style="fill:#5d576b;" points="29,58 55,45 55,13 29,26 "></polygon> <polygon style="fill:#5d576b;" points="3,13 28,0 55,13 29,26 "></polygon> </g> </g></svg>                         */}
                    </div>
                    <div className="FeatureContent">
                        <h3>Seamless Integration and Export</h3>
                        <p>
                            Integrate smoothly into your workflow and export with
                            ease. Support for various file formats ensures
                            compatibility with popular design software</p>
                    </div>
                </div>      
        </div>      
    </section>

    <section>
        <div className="ChoosePlans">
        <div className="ChooseYourPlan">
            <div className="ChoosePlanHeading">
                <h6>Pricing</h6>
                <h3>Choose Your Plan</h3>
            </div>


           
                <div className="FreePlanIntro">
                    <h4>
                        FREE
                    </h4>
                    <p>Access basic features for free</p>

                </div>
                <div className="FreePlanPrice">
<p>&#36;</p>
<h1>0</h1>
                </div>
                <div className="FreePlanContent">
                    <p>&#10004; Generate 3-D models from 2-D
                        images or text </p>
                        <p>&#10004; Generate multi-view images from 2-D
                            images or text</p>
                        <p> &#10004; Limited model customization options</p>
                        <p> &#10004; Standard customer support</p>

                </div>
                <div className="FreePlanBTN whiteBTN">
                    <button>Continue with Free</button>

            </div>
           
                <div className="BasicPlanIntro">
                    <h4>
                        FREE
                    </h4>
                    <p>Access basic features for free</p>

                </div>
                <div className="BasicPlanPrice">
<p>&#36;</p>
<h1>0</h1>
                </div>
                <div className="BasicPlanContent">
                    <p>&#10004; All features of FREE plan</p>
                        <p>&#10004; Unlimited 3-D model generation from 2-D images or text</p>
                        <p> &#10004; Advanced multi-view image  generation from 2-D images &nbsp; &nbsp; &nbsp; or text</p>
                        <p> &#10004; Enhanced model customization options</p>
                        <p> &#10004;  Priority customer support</p>
                       

                </div>
                <div className="BasicPlanBTN orangeBTN">
                    <button>Try the Basic plan</button>

            </div>
           
                <div className="ProPlanIntro">
                    <h4>
                        FREE
                    </h4>
                    <p>Access basic features for free</p>

                </div>
                <div className="ProPlanPrice">
<p>&#36;</p>
<h1>0</h1>
                </div>
                <div className="ProPlanContent">
                    <p>&#10004; All features of BASIC plan </p>
                        <p>&#10004; VIP 3-D model generation support</p>
                        <p> &#10004;  Exclusive multi-view image generation features</p>
                        <p> &#10004; Full model customization options</p>
                        <p> &#10004;   24/7 dedicated customer support </p>

                </div>
                <div className="ProPlanBTN orangeBTN">
                    <button>Try the Pro plan</button>

            </div>

            <div className="ChooseYourPlanCol1">
                
            </div>
            <div className="ChooseYourPlanCol3">
                
            </div>
            <div className="ChooseYourPlanCol5">
                
            </div>
            <div className="ChooseYourPlanCol7">
                
            </div>
            <div className="ChooseYourPlanCol9">
                
            </div>
            <div className="ChooseYourPlanCol11">
                
            </div>
          

        </div>
    </div>
    </section>

    <section>
        <div className="LearnMoreVC">
            
                <div className="VCContentHeading">
                    <h1>Revolutionize Your Visual Content</h1>
                </div>
                
                <div className="VCContentBTN orangeBTN">
                    <button>Learn More</button>
                </div>

           
          
        </div>
    </section>


    <article>
        <div className="CommonQuestions">
            <div className="CQtitle">FAQ</div>
            <div className="CommonQue">
                <p>Common</p>
                <p>questions</p>
                <p id="CQsubtitle">Here are some of the most common questions that we get.</p>
            </div>
                
            <div className="CQquestion que1">
                <p>Can I convert 2-D images into 3-D models on your website?</p>
                <p id="CQanswer">Yes, absolutely! Our platform allows you to effortlessly convert 2-D images into stunning 3-D models.</p></div>
            
            <div className="CQquestion que2">
                <p>How quickly can I generate multi-view images from my 2-D photos?</p>
                <p id="CQanswer">With our platform, you can generate dynamic multi-view images in just a few seconds, adding depth and perspective to your visuals instantly</p></div>

            <div className="CQquestion que3">
                <p>Do I have control over the rendering styles for my 3-D models?</p>
                <p id="CQanswer">Yes, you have full control! Customize rendering styles to achieve your desired look, whether you prefer photorealistic or stylized renders</p></div>
            
            <div className="CQquestion que4"><p>Is it easy to integrate my projects with other design software?</p>
            <p id="CQanswer">Absolutely! Our platform offers seamless integration with popular design software, making collaboration and workflow integration a breeze.</p></div>
            
            <div className="CQquestion que5"><p>Can I export my creations easily from your platform?</p>
            <p id="CQanswer">Yes, exporting your creations is a breeze! Our platform supports various file formats for smooth and hassle-free export, ensuring compatibility with your preferred design software and platforms.</p></div>
           
        </div>
    
    
    </article>

   </>
  )
}

export default Home
