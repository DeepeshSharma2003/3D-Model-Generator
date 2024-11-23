import PropTypes from "prop-types";
import "./WhiteButton.css";

const WhiteButton = ({ onClick }) => {
  return (
    <div className="glow-on-hover" onClick={onClick}>
      <button></button>
    </div>
  );
};

WhiteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default WhiteButton;
