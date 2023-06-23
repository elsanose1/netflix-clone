import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import { Link } from "react-router-dom";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "TV Shows"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://occ-0-2774-3997.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfqwnNYL_UpxiK1FfEpxahf7BggtnqXD-R3NnoFnvfNKerXtMGbs9HiZBEH85FKcsJpk7-g3SUous9Ud644tHon9GHcHIWXwUpns.webp?r=d62"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-2774-3997.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYiFD7PIwGZoQWtXcQb2-Xv36PdPOSeM2SLxk6_6F2dFc6TQ1cDJ7BiY6fi3MkgEzvePqEsjPtSVsYvirUq01FTitXCzGdHZnPa2HYg4cwPVAVkkyYxpHwXgI5YmVVP8xi7tWb05DqNwAZ8G6fKjX5e52GC0wSTYGVpn9j471n_riRJYWEzFRw.webp?r=f17"
          alt=""
        />
        <span className="desc">
          Loyalties are tested when five former special forces operatives
          reunite to steal a drug lord's fortune, unleashing a chain of
          unintended consequences.
        </span>
        <div className="buttons">
          <button className="play">
            <Link to="/watch">
              <PlayArrow />
              <span>Play</span>
            </Link>
          </button>
          <button className="more">
            <InfoOutlined /> <span>More Info</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
