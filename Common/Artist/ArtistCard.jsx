import React from "react";
import "./ArtistCard.css";
import sampleArtist from "../../Assets/Images/artist.jpg"; // Replace with your image path

export default function ArtistCard({ image = sampleArtist, name = "Artist Name" }) {
  return (
    <div className="artist-card">
  <div className="artist-img-wrapper">
    <div><img src={image} alt={name} className="artist-img" /></div>
    <div className="play-button">
      <i className="fas fa-play"></i>
    </div>
  </div>
  <div className="artist-name">{name}</div>
  <div className="artist-tag">Artist</div>
</div>

  );
}
