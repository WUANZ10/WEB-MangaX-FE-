import { useNavigate } from "react-router-dom";

import { FaBookOpenReader } from "react-icons/fa6";
import { IoBookmarkSharp, IoChatbubble, IoEyeSharp, IoStar } from "react-icons/io5";
import "../homePageStyle.css";

const ComicButton = ({ album }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/comic/${album._id}`);
  };

  return <div className="album-item-wrapper">
    <button onClick={handleClick} key={album._id} className="album-item">
  <img className="album-logo" src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"/>
  <h3 className="album-name">{album.title}</h3>
  <div className="stats-row">
  <div className="stats-column">
              <IoEyeSharp className="icon" />
              <p className="p value">{album.views}</p>
            </div>
            <div className="stats-column">
              <IoBookmarkSharp className="icon" />
              <p className="p value">{album.favorites}</p>
            </div>
            <div className="stats-column">
              <IoChatbubble className="icon" />
              <p className="p value">0</p>
            </div>
            <div className="stats-column">
              <FaBookOpenReader className="icon" />
              <p className="p value">{album.chapters.length}</p>
            </div>
  </div>
</button>
  </div>;
};

export default ComicButton;