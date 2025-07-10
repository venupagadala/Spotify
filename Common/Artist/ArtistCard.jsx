import React from "react";
import "./ArtistCard.css";

export default function ArtistCard({ image, name, shape }) {
  return (
    <div className="artist-card">
  <div className="artist-img-wrapper">
    <div><img src={image} alt={name} className={shape === 'circle' ? "artist-img-circle" : "artist-img-rectangle"} /></div>
    <div className="play-button">
      <i className="fas fa-play"></i>
    </div>
  </div>
  <div className="artist-name">{name}</div>
  <div className="artist-tag">Artist</div>
</div>

  );
}
