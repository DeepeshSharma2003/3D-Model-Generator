import  { useState, useEffect } from 'react';
import './ProPlanCard.css'; // Import your CSS file
import { Link } from "react-router-dom";


function ProPlanCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isExtended, setIsExtended] = useState(false);

  useEffect(() => {
    if (isHovered) {
      
      const timeoutId = setTimeout(() => {
        setIsExtended(true);
      }, 300);
      
      return () => clearTimeout(timeoutId);
    } else {
     
      setIsExtended(false);
    }
  }, [isHovered]);

  return (
    <div
      className={`ProPlan ${isExtended ? 'extended' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span id="ProPlanHeading">
        <h4>PRO</h4>
        <p>Get access to all premium features</p>
      </span>

      <span id="ProPriceContent">
        <p id="ProDollarSignPos">&#36;</p>
        <h1 id="ProPriceToBePaid">19.99</h1>
      </span>
      <span id="ProPlanParagraphs">
        <p>&#10004; All features of BASIC plan </p>
        <p>&#10004; VIP 3D model generation support</p>
        <p>&#10004; Exclusive multi-view-image generation features</p>
        <p>&#10004; Full model customization options</p>
        <p>&#10004; 24/7 dedicated customer support</p>
      </span>

     
      {isExtended && (
        <div className="ButtonContainer">
         <Link to="/about">
                <button>Learn More</button>
              </Link>
        </div>
      )}
    </div>
  );
}

export default ProPlanCard;
