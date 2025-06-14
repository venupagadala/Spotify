import React from "react";
import logo from "../..//Assets/Images/logo.jpg"; // Adjust the path as necessary
import home from "../..//Assets/Images/home.png"; // Adjust the path as necessary
import search from "../..//Assets/Images/search.webp"; // Adjust the path as necessary
import "./Header.css"; // Assuming you have a CSS file for styling

export default function Header() {

  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <header className="App-header">
      <div className="sub-header-1">
        <img className="logo" src={logo} alt="logo" />
        <img className="home" src={home} alt="home" />
        <div className="search-bar">
          <div >
            <img className="search-logo" src={search} alt="logo"/>
          </div>
          <div className="search">
            <input type="text" placeholder="Enter the song you want to play" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
          </div>
          <div className="search" onClick={()=>setSearchTerm('')}>Hit</div>
        </div>
      </div>
      <div className="sub-header-2">
        <div className="options">Premium</div>
        <div className="options">Download</div>
        <div className="options">Support</div>
      </div>
      <div className="sub-header-3">
        <div className="install">Install App</div>
        <div className="sign-in">Sign-in</div>
        <button className="login-btn">Login in</button>
      </div>
    </header>
  );
}
