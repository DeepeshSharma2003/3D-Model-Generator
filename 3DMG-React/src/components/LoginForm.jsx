import { useState } from "react";
import PropTypes from "prop-types";
import "./LoginForm.css";

const LoginForm = ({ onSubmit, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email, password, rememberMe });
  };

  const handleClose = () => {
    onClose();
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="login-form-container" onClick={stopPropagation}>
        <div className="login-form">
          <button className="close-button" onClick={handleClose}>
            X
          </button>
          <div className="logo-container">
            <img src="globe-logo.svg" alt="Logo" />
          </div>
          <h2>Welcome back</h2>
          <p>Please enter your details to sign in</p>
          <div className="social-buttons">
            <button>
              <img src="google-logo.svg" alt="Google" />
            </button>
            <button>
              <img src="apple-logo.svg" alt="Apple" />
            </button>
            <button>
              <img src="facebook-logo.svg" alt="Facebook" />
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
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="remember-me">Remember for 30 days</label>
            </div>
            <button type="submit">Sign in</button>
          </form>
          <p className="forgot-password">Forgot password?</p>
          <p>
            Don&apos;t have an account? <a href="#">Create account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
