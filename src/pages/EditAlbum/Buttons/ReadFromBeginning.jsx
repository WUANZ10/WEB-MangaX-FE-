import { useNavigate } from "react-router-dom";

import { FaBook } from "react-icons/fa6";
import "../editAlbumPageStyle.css";


export function ReadFromBeginning({ comicId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/read/${comicId}/0`);
  };

  return           <button onClick={handleClick} className="button read-btn">
              <div className="button-inner">
              <FaBook className="white" />
                <p className="p button-text unselectable white">Read from Beginning</p>
              </div>
            </button>;
};
;