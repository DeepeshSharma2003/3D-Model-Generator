import  { useState, useEffect } from 'react';
import './BasicPlanCard.css'; // Import your CSS file
import { Link } from "react-router-dom";


function BasicPlanCard() {
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
      className={`BasicPlan ${isExtended ? 'extended' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span id="BasicPlanHeading">
        <h4>BASIC</h4>
        <p>Upgrade for more advanced features</p>
      </span>

      <span id="BasicPriceContent">
        <p id="BasicDollarSignPos">&#36;</p>
        <h1 id="BasicPriceToBePaid">9.99</h1>
      </span>
      <span id="BasicPlanParagraphs">
        <p>&#10004; All features of FREE plan </p>
        <p>&#10004; Unlimited 3D model generation from 2D ikmages or text</p>
        <p>&#10004; Advanced multi-view-image generation from 2D images or text</p>
        <p>&#10004; Priority customer support</p>
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

export default BasicPlanCard;
