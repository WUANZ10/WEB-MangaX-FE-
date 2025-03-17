import React from 'react';
import { RiImageEditFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function EditButton({ comicId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/edit/${comicId}`);
  };

  return <button className="button" onClick={handleClick}>
  <div className="button-inner">
  <RiImageEditFill />
    <p className="p button-text unselectable">Edit</p>
  </div>
</button>
}

export default EditButton;