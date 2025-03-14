import { useNavigate } from "react-router-dom";

import { FaBookOpenReader } from "react-icons/fa6";
import { IoBookmarkSharp, IoChatbubble, IoEyeSharp, IoStar } from "react-icons/io5";
import "../homePageStyle.css";

const ComicButton = ({ album }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/comic/${album._id}`);
  };

  return <div className="album-item-wrapper">
    <button onClick={handleClick} key={album._id} className="album-item">
  <img className="album-logo" src={album.cover_image}/>
  <h3 className="album-name">{album.title}</h3>
  <div className="stats-row">
  <div className="stats-column">
              <IoEyeSharp />
              <p className="p value">{album.views}</p>
            </div>
            <div className="stats-column">
              <IoBookmarkSharp />
              <p className="p value">{album.favorites}</p>
            </div>
            <div className="stats-column">
              <IoChatbubble />
              <p className="p value">0</p>
            </div>
            <div className="stats-column">
              <FaBookOpenReader />
              <p className="p value">{album.chapters.length}</p>
            </div>
  </div>
</button>
  </div>;
};

export default ComicButton;