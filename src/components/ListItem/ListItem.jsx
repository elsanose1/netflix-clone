import { PlayCircle } from "@mui/icons-material";
import "./listItem.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="list-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-2774-3997.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRhjm7jL0yysST7EjziFl3d_4lXELxkYCVAzJaGv1ilVpKEzvqSyMRmgDAIuXNHWFe3tFxSqHHPtSvpwnAJxaxUIhRpRG0burwem5zOhcBVz3gMsOLYHv42EwUb9c2GLLpZoZ_nnK3AZKCyfYRJ4jSsFS8zKhXJR6jgq-xNBWL3EcQJvfXexOO-ygIK_7UI.jpg?r=3a5"
        alt=""
      />
      {isHovered && (
        <>
          <video
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
            autoPlay
            loop
          />
          <div className="layer">
            <Link to="/watch">
              <PlayCircle className="icon" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
