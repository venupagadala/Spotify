import LibraryCard from "../../Common/LibraryCard/LibraryCard";
import "./Library.css"; // Make sure to create this CSS file for styling
import React from "react";
export default function Library() {
  return (
    <div className="library-container">
      <div className="lib d-flex justify-content-between align-items-center font-weight-bold">
        <div className="lib-title">Your Library</div>
        <div className="plus-wrapper">
          <div className="plus">+</div>
          <div className="tooltip">Create a Playlist or folder</div>
        </div>
      </div>

      {/* Make this scrollable */}
      <div className="library-content">
        <div className="-cards">
          <LibraryCard
            title="Create your first playlist"
            desc="It is easy, we will help you"
            btnTittle="Create playlist"
          />
          <LibraryCard
            title="Discover new music"
            desc="Find your next favorite song"
            btnTittle="Start listening"
          />
        </div>
      </div>

      {/* Footer stays at the bottom */}
      <footer className="px-4 pb-4">
        <div className="footer-options d-flex justify-content-start align-items-center flex-wrap text-start">
          <div className="footer-option">Legal</div>
          <div className="footer-option">Safety and privacy</div>
          <div className="footer-option">privacy policy</div>
          <div className="footer-option">cookies</div>
          <div className="footer-option">about us</div>
          <div className="footer-option">accessibility</div>
          <div className="footer-option">notice at collections</div>
        </div>
        <button className="privacy-btn mb-2 d-flex justify-content-start">your privacy choices</button>
        <div className="footer-cookies mb-4 d-flex justify-content-start">cookies</div>
        <button className="btn-eng d-flex justify-content-start">English</button>
      </footer>
    </div>
  );
}

