import React, { useEffect, useState, useRef } from "react";
import "./editAlbumPageStyle.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import axios from "axios";
import { useParams } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent.jsx";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import AlbumActions from "./Buttons/AlbumActions.jsx";

export default function EditPage() {
  const [album, setAlbum] = useState({});
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const artistRef = useRef(null);
  const desRef = useRef(null);
  const comicId = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChapters = (album.chapters || []).filter(chapter =>
    chapter.chapter_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    chapter.chapter_number.toString().includes(searchTerm)
  );

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

  const handleAuthorBlur = () => {
    setAlbum({ ...album, author: authorRef.current.innerText });
  }

  const handleArtistBlur = () => {
    setAlbum({ ...album, artist: artistRef.current.innerText });
  };

  const handleDesBlur = () => {
    setAlbum({ ...album, description: desRef.current.innerText });
  };


  return (
    <>
      <div id="edit_content">
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
            Author:{" "}
            <p
              className="artist-name edit-field"
              contentEditable={true}
              suppressContentEditableWarning
              ref={authorRef}
              onBlur={handleAuthorBlur}
            >
              {album.author}
            </p>
            Artist:{" "}
            <p
              className="artist-name edit-field"
              contentEditable={true}
              suppressContentEditableWarning
              ref={artistRef}
              onBlur={handleArtistBlur}
            >
              {album.artist}
            </p>

            {/* Tags row */}
            <div className="tags-row">
              {(album.tags || []).map((i) => (
                <p key={i} className="p white tag unselectable">
                  {i}{" "}
                  <button className="no-style">
                    <MdOutlineCancel className="white icon" />
                  </button>
                </p>
              ))}
              <p className="p white tag unselectable">
                <button className="no-style">
                  <IoMdAddCircleOutline className="white icon" />
                </button>
              </p>
            </div>

            {/* Buttons row */}
            <div className="buttons-row">
            <AlbumActions/>
            </div>
          </div>
        </div>

        {/* ----- DESCRIPTION SECTION ----- */}
        <div className="description-block">
          <div className="desc-header">
            <RiInformation2Fill />
            <h1 className="white desc-title unselectable">Description</h1>
          </div>
          <p className="p desc-content edit-field"
                        contentEditable={true}
                        suppressContentEditableWarning
                        ref={desRef}
                        onBlur={handleDesBlur}>
            {album.description}
          </p>
        </div>

        {/* ----- CHAPTERS SECTION ----- */}
        <div className="chapters-wrapper">
          <h1 className="white chapters-title unselectable">Chapters</h1>
          <div className="chapters-box">
            <div className="chapter-top-row">
              <input
                type="text"
                className="chapter-input"
                placeholder="Search chapters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="chapter-find">
                <FaMagnifyingGlass />
              </button>
            </div>
            <div className="chapter-bottom-row">
              {filteredChapters.map((chapter) => (
                <button key={chapter.id} className="chapter-item">
                  <div className="ladiv chapter-item-ladiv">
                    <img
                      src={chapter.chapter_cover || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"}
                      alt={`Chapter ${chapter.chapter_number}`}
                    />
                  </div>
                  <div className="chapter-item-text">
                    <h1 className="white chapter-item-title">
                      Chapter {chapter.chapter_number}: {chapter.chapter_name}
                    </h1>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}