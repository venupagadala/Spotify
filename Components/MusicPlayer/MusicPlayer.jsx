// src/components/MusicPlayer.js
import React from 'react';
import './MusicPlayer.css';
import shapeOfYou from '../../Assets/audio/Ed Sheeran - Shape of You (Official Music Video).mp3'; // Example audio file

export default function MusicPlayer() {
  return (
    <div className="music-player">
      <h3>Now Playing: Shape of You</h3>
      <audio controls>
        <source src={shapeOfYou} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
