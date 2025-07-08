import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import Logo from "./../../Assets/Images/logo.jpg";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [openPasswordField, setOpenPasswordField] = useState(false);
  const navigate = useNavigate();

  const handleRedirectToError = () => {
    navigate("/error");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                />
              </div>
            )}
            {!openPasswordField && (
              <button
                type="button"
                className="continue-btn"
                onClick={() => setOpenPasswordField(true)}
              >
                Continue
              </button>
            )}
            {openPasswordField && (
              <button type="submit" className="login-btnn" onClick={handleRedirectToError}>
                Log In
              </button>
            )}
            <div className="forgot-password" onClick={handleRedirectToError}>Forgot your password?</div>
            <div className="no-acc">
              Don't have an account?{" "}
              <span className="sign-up" onClick={handleRedirectToError}>Sign up for Spotify</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
