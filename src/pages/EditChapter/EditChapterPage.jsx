import React, { useEffect, useState, useRef } from "react";
import "./editChapterPageStyle.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent.jsx";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import AlbumActions from "./Buttons/AlbumActions.jsx";

export default function EditChapter() {
  const [album, setAlbum] = useState({});
  const titleRef = useRef(null);
  const desRef = useRef(null);
  const comicId = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        axios.get(`${process.env.REACT_APP_API_URL}/album/detailedAlbum/${comicId.comicId}`)
          .then((response) => setAlbum(response.data.data))
          .catch(error => console.error("Error:", error.response?.data || error.message));
      } catch (err) {
        console.error('Error fetching item:', err);
      }
    };

    fetchItem();
  }, [comicId]);

  const handleTitleBlur = () => {
    setAlbum({ ...album, title: titleRef.current.innerText });
  };

  const handleDesBlur = () => {
    setAlbum({ ...album, description: desRef.current.innerText });
  };


  return (
    <>
      <div id="chapter_content">
        {/* ----- TOP SECTION: LOGO + INFO ----- */}
        <div className="top-section">
          <div className="ladiv">
            <img src="" id="logo" alt="Logo" />
          </div>
          <div className="info-section">
          <h1
              id="name"
              className="white comic-title edit-field"
              contentEditable={true}
              suppressContentEditableWarning
              ref={titleRef}
              onBlur={handleTitleBlur}
            >
              {album.title}
            </h1>
            <p className="p desc-content edit-field"
                        contentEditable={true}
                        suppressContentEditableWarning
                        ref={desRef}
                        onBlur={handleDesBlur}>
            {album.description}
          </p>

            {/* Buttons row */}
            <div className="buttons-row">
            <AlbumActions/>
            </div>
          </div>
        </div>

        {/* ----- PAGES SECTION ----- */}
        <div className="pages-wrapper">
          <h1 className="white chapters-title unselectable">Pages</h1>
          <div className="page">
              {(((album.chapters||[])[Number(comicId.chapter)-1]||{pages:[]}).pages||[]).map((page) => (
                <button key={page._id} className="page-item">
                  <img/>
                </button>
              ))}
            </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}