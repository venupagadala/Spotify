import React from 'react';
import '../App.css'; // Import global styles if needed
import Library from './Library/Library';
import Trending from './Trending/Trending';

export default function Content() {
  return (
    <div className="content-container">
      <div className="library-section">
        <Library />
      </div>
      <div className="trending-section">
        <Trending />
      </div>
    </div>
  );
}
