import "./RegisterForm.css";

import { useState } from "react";
import PropTypes from "prop-types";
import "./RegisterForm.css";

const RegisterForm = ({ onSubmit, onClose, openLoginForm  }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      onSubmit({ email, password });
    } else {
      alert("Passwords do not match");
    }
  };

  const handleClose = () => {
    onClose();
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="register-form-container" onClick={stopPropagation}>
        <div className="register-form">
          <button className="Registerclose-button" onClick={handleClose}>
            X
          </button>
          <div className="Registerlogo-container">
            <img
              src="/src/assets/LoginLogo.jpg"
              alt="Logo"
              style={{ width: "150px", height: "100px", borderRadius: "50%" }}
            />
          </div>
          <h1>WELCOME TO 3DIFY</h1>
          <h2>Create an Account</h2>
          <p>Please enter your details to register</p>
          <div className="Registersocial-buttons">
            <button>
              <img src="/src/assets/GoogleLogo.jpg" alt="Google" />
            </button>
            <button>
              <img src="/src/assets/AppleLogo.jpg" alt="Apple" />
            </button>
            <button>
              <img src="/src/assets/FacebookLogo.jpg" alt="Facebook" />
            </button>
          </div>
          <p className="or">or</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <a href="#" onClick={openLoginForm}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  openLoginForm: PropTypes.func.isRequired, 
};

export default RegisterForm;


