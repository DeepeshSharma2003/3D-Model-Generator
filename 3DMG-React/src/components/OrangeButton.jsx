import "./OrangeButton.css";
import PropTypes from "prop-types";

const OrangeButton = ({ onClick }) => {
  return (
    <div className="orangeBTN" onClick={onClick}>
      <button>Register</button>
    </div>
  );
};

OrangeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default OrangeButton;
