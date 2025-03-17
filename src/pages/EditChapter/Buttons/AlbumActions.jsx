import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUndoAlt } from 'react-icons/fa';
import { IoIosSave } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import "../editChapterPageStyle.css";

const AlbumActions = ({ albumId }) => {
  const navigate = useNavigate();

  const handleUndo = () => {
    navigate(`/edit/${albumId}`);
  };

  const handleSave = async () => {
    try {
      
    } catch (error) {
      console.error('Error updating album:', error);
    }
    navigate(`/edit/${albumId}`);
  };

  return (
    <>      <button onClick={handleUndo} className="button">
    <div className="button-inner">
      <FaUndoAlt />
      <p className="p button-text unselectable">Undo Changes</p>
    </div>
  </button>
  <button onClick={handleSave} className="button">
    <div className="button-inner">
      <IoIosSave />
      <p className="p button-text unselectable">Save Changes</p>
    </div>
  </button></>
  );
};

export default AlbumActions;