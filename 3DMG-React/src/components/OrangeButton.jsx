import "./OrangeButton.css";
import PropTypes from "prop-types";

const OrangeButton = ({ onClick }) => {
  return (
    <div className="orangeBTN" onClick={onClick}>
      <button>Login</button>
    </div>
  );
};

OrangeButton.propTypes = {
  onClick: PropTypes.func,
};

export default OrangeButton;
