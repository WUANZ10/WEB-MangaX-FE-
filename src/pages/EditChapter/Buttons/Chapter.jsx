import React from 'react';
import { useNavigate } from 'react-router-dom';

function Chapter({ comicId, chapter }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/edit/${comicId}/${chapter.chapter_number}`);
  };

  return           <button key={chapter.id} onClick={handleClick} className="chapter-item">
  <div className="ladiv chapter-item-ladiv">
    <img src={chapter.chapter_cover || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} alt={`Chapter ${chapter.chapter_number}`} />
  </div>
  <div className="chapter-item-text">
    <h1 className="white chapter-item-title">
      Chapter {chapter.chapter_number}: {chapter.chapter_name}
    </h1>
  </div>
</button>
}

export default Chapter;