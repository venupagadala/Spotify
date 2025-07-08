import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../..//Assets/Images/logo.jpg";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";

export default function Header() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <div className="sub-header-1">
        <img className="logo" src={logo} alt="logo" />
        <div className="home">
          <HomeIcon
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
        </div>
        <div className="search-bar">
          <div>
            <SearchOutlinedIcon fontSize="medium" />
          </div>
          <div className="search">
            <input
              className="search-input"
              type="text"
              placeholder="Enter the song you want to play"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="search" onClick={() => setSearchTerm("")}>
            <AdsClickOutlinedIcon fontSize="medium" />
          </div>
        </div>
      </div>

    <div className="sub">
      <div className="sub-header-2">
        <div className="options">Premium</div>
        <div className="options">Download</div>
        <div className="options">Support</div>
      </div>

      <div className="sub-header-3">
        <div className="install">Install App</div>
        <div className="sign-in">Sign-in</div>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
      </div>
    </header>
  );
}
