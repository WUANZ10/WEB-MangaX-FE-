import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUndoAlt } from 'react-icons/fa';
import { IoIosSave } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import "../editAlbumPageStyle.css";

const AlbumActions = ({ albumId }) => {
  const navigate = useNavigate();

  const handleUndo = () => {
    // Simply navigate back to the comic page
    navigate(`/comic/${albumId}`);
  };

  const handleSave = async () => {
    try {
      // Fire HTTP request to update album using Axios
      await axios.put(`http://localhost:3001/api/album/updateAlbum/${albumId}`);
    } catch (error) {
      console.error('Error updating album:', error);
    }
    // After saving, navigate back to the comic page
    navigate(`/comic/${albumId}`);
  };

  const handleDelete = () => {
    // Currently ignoring delete action; simply redirecting to home
    navigate('/');
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
  </button>
  <button onClick={handleDelete} className="button red">
    <div className="button-inner">
      <MdDeleteForever />
      <p className="p button-text unselectable">DELETE ALBUM</p>
    </div>
  </button></>
  );
};

export default AlbumActions;