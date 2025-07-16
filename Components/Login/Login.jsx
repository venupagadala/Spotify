import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import Logo from "./../../Assets/Images/logo.jpg";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [openPasswordField, setOpenPasswordField] = useState(false);
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function (min 8 chars, at least 1 letter and 1 number, special chars allowed)
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // Handle email input change and validate
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  // Handle password input change and validate
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
  };

  const handleRedirectToError = () => {
    navigate("/error");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add further form submission logic here (e.g., API call)
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img className="logo" src={Logo} alt="Spotify Logo" />
        <h2 className="login-title">Log in to Spotify</h2>

        <div className="login-apps">
          <button className="login-button" onClick={handleRedirectToError}>
            <FacebookIcon /> Continue with Facebook
          </button>
          <button className="login-button" onClick={handleRedirectToError}>
            <GoogleIcon /> Continue with Google
          </button>
          <button className="login-button" onClick={handleRedirectToError}>
            <AppleIcon /> Continue with Apple
          </button>
        </div>

        <div className="form">
          <form action="" onSubmit={handleFormSubmit}>
            {!openPasswordField && (
              <div className="email-field">
                <label htmlFor="email" className="email-label">
                  Email or username
                </label>
                <input
                  type="email"
                  className="login-input"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  aria-describedby={email.length > 0 && !isEmailValid ? "email-error" : undefined}
                />
                {!isEmailValid && email.length > 0 && (
                  <p id="email-error" className="error-message">
                    Please enter a valid email address
                  </p>
                )}
              </div>
            )}
            {openPasswordField && (
              <div className="password-field">
                <label htmlFor="password" className="password-label">
                  Password
                </label>
                <input
                  type="password"
                  className="password-input"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  aria-describedby={password.length > 0 && !isPasswordValid ? "password-error" : undefined}
                />
                {!isPasswordValid && password.length > 0 && (
                  <p id="password-error" className="error-message">
                    Password must be at least 8 characters and include a letter and a number
                  </p>
                )}
              </div>
            )}
            {!openPasswordField && (
              <button
                type="button"
                className="continue-btn"
                onClick={() => setOpenPasswordField(true)}
                disabled={!isEmailValid}
              >
                Continue
              </button>
            )}
            {openPasswordField && (
              <button
                type="submit"
                className="login-btnn"
                onClick={handleRedirectToError}
                disabled={!isEmailValid || !isPasswordValid}
              >
                Log In
              </button>
            )}
            <div className="forgot-password" onClick={handleRedirectToError}>
              Forgot your password?
            </div>
            <div className="no-acc">
              Don't have an account?{" "}
              <span className="sign-up" onClick={handleRedirectToError}>
                Sign up for Spotify
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}