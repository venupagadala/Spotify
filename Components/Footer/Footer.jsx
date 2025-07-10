import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-title">Company</div>
          <div className="footer-subTitle">About</div>
          <div className="footer-subTitle">Jobs</div>
          <div className="footer-subTitle">For the Record</div>
        </div>
        <div className="footer-sections">
          <div className="footer-title">Communities</div>
          <div className="footer-subTitle">For Artists</div>
          <div className="footer-subTitle">Developers</div>
          <div className="footer-subTitle">Advertising</div>
          <div className="footer-subTitle">Investors</div>
          <div className="footer-subTitle">Vendors</div>
        </div>
        <div className="footer-sections">
          <div className="footer-title">Useful links</div>
          <div className="footer-subTitle">Support</div>
          <div className="footer-subTitle">Free Mobile App</div>
        </div>
        <div className="footer-sections">
          <div className="footer-title">Spotify Plans</div>
          <div className="footer-subTitle">Premium Individual</div>
          <div className="footer-subTitle">Premium Duo</div>
          <div className="footer-subTitle">Premium Family</div>
          <div className="footer-subTitle">Premium Student</div>
          <div className="footer-subTitle">Spotify Free</div>
          <div className="footer-subTitle">Audiobooks Access</div>
        </div>
        <div className="footer-socialMedia">
          <div >
            <FacebookIcon className="social-media-icon" fontSize="large" />
          </div>
          <div >
            <TwitterIcon className="social-media-icon" fontSize="large" />
          </div>
          <div >
            <InstagramIcon className="social-media-icon" fontSize="large" />
          </div>
        </div>
      </div>
      <div className="footer-foot">© 2025 Spotify AB</div>
    </footer>
  );
}
