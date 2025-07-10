import "./Trending.css";
import ArtistCard from "../../Common/Artist/ArtistCard";
import trendingData from "../../Data/trendingData";
import popularSinglesData from "../../Data/popularSingles";
import trendData from "../../Data/Trend";
import Footer from "../Footer/Footer";

export default function Trending() {
  return (
    <div className="main-container p-3">
      {/* Popular Artists */}
      <div className="trending-cards">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="trend-title">Trending Songs</h2>
          <div className="show-all cursor-pointer">Show All</div>
        </div>
        <div className="card-slider">
          {trendData.map((artist, index) => (
            <ArtistCard key={index} image={artist.imgSrc} name={artist.title} shape='rectangle' />
          ))}
        </div>
      </div>

      {/* Trending Songs */}
      <div className="trending-cards">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="trend-title"> Popular Artists </h2>
          <div className="show-all cursor-pointer">Show All</div>
        </div>
        <div className="card-slider">
          {trendingData.map((artist, index) => (
            <ArtistCard key={index} image={artist.imgSrc} name={artist.title} shape='circle' />
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
            <ArtistCard key={index} image={single.imgSrc} name={single.title} shape='circle' />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
