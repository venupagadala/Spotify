import "./Trending.css";
import ArtistCard from "../../Common/Artist/ArtistCard";
import trendingData from "../../Data/trendingData";
import popularSinglesData from "../../Data/popularSingles";

export default function Trending() {
  return (
    <div className="main-container p-3">
      <div className="trending-cards">

        {/* Trending Songs */}
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="trend-title">Trending Songs</h2>
          <div className="show-all cursor-pointer">Show All</div>
        </div>
        <div className="card-slider">
          {trendingData.map((artist, index) => (
            <ArtistCard key={index} image={artist.imgSrc} name={artist.title} />
          ))}
        </div>
      </div>

{/* Popular Artists */}
      <div className="trending-cards">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="trend-title">Popular Artists</h2>
          <div className="show-all cursor-pointer">Show All</div>
        </div>
        <div className="card-slider">
          {trendingData.map((artist, index) => (
            <ArtistCard key={index} image={artist.imgSrc} name={artist.title} />
          ))}
        </div>
      </div>

{/* Popular Albums and Singles */}
      <div className="trending-cards">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="trend-title">Popular Albums and Singles</h2>
          <div className="show-all cursor-pointer">Show All</div>
        </div>
        <div className="card-slider">
          {popularSinglesData.map((single, index) => (
            <ArtistCard key={index} image={single.imgSrc} name={single.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
