import PropTypes from "prop-types";
import "./WhiteButton.css";

const WhiteButton = ({ onClick }) => {
  return (
    <div className="whiteBTN" onClick={onClick}>
      <button>Login</button>
    </div>
  );
};

WhiteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default WhiteButton;
