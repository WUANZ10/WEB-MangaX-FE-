import React, { useEffect, useState } from "react";
import "./comicPageStyle.css";
import { FaBookOpenReader, FaMagnifyingGlass } from "react-icons/fa6";
import { IoBookmarkSharp, IoEyeSharp, IoStar } from "react-icons/io5";
import { RiImageEditFill, RiInformation2Fill } from "react-icons/ri";
import { MdReport } from "react-icons/md";
import axios from "axios";
import { useParams } from "react-router-dom";
import {ReadFromBeginning} from "./Buttons/ReadFromBeginning.jsx"
import ShareButton from "./Buttons/Share.jsx";
import EditButton from "./Buttons/Edit.jsx";
import FooterComponent from "../../components/FooterComponent/FooterComponent.jsx";

export default function ComicPage() {
  let [album, setAlbum] = useState({})
  const id = useParams()

  const [searchTerm, setSearchTerm] = useState("");

  const filteredChapters = (album.chapters || []).filter(chapter =>
    chapter.chapter_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    chapter.chapter_number.toString().includes(searchTerm)
  );

  useEffect(() => {

    const fetchItem = async () => {
      try {
        axios.get(`${process.env.REACT_APP_API_URL}/album/detailedAlbum/${id.comicId}`)
          .then((response) => 
            setAlbum(response.data.data))
          .catch(error => console.error("Error:", error.response?.data || error.message));
      } catch (err) {
        console.error('Error fetching item:', err);
      }
    };

    fetchItem();
  }, []);
  return (
    <><div id="comic_content">
    {/* ----- TOP SECTION: LOGO + INFO ----- */}
    <div className="top-section">
      <div className="ladiv">
        <img src="" id="logo" alt="Logo" />
      </div>
      <div className="info-section">
        <h1 id="name" className="white comic-title">{album.title}</h1>
        <p className="artist-name">Author: {album.author} / Artist: {album.artist}</p>

        {/* Hàng TAG (trước đây là statsdiv với flex:4) */}
        <div className="tags-row">
          {(album.tags||[]).map((i)=>{
            return <p className="p white tag unselectable">{i}</p>
          })}
        </div>

        {/* Hàng STATS (trước đây là statsdiv với flex:20) */}
        <div className="stats-row">
          <div className="stats-column">
            <div className="stats-column-left">
              <FaBookOpenReader />
              <p className="p label">Chapters</p>
            </div>
            <div className="stats-column-right">
              <p className="p value">{(album.chapters||[]).length}</p>
            </div>
          </div>
          <div className="stats-column">
            <div className="stats-column-left">
              <IoEyeSharp />
              <p className="p label">Views</p>
            </div>
            <div className="stats-column-right">
              <p className="p value">{album.views||0}</p>
            </div>
          </div>
          <div className="stats-column">
            <div className="stats-column-left">
              <IoBookmarkSharp />
              <p className="p label">Favorites</p>
            </div>
            <div className="stats-column-right">
              <p className="p value">{album.favorites||0}</p>
            </div>
          </div>
          <div className="stats-column">
            <div className="stats-column-left">
              <IoStar />
              <p className="p label">Ratings</p>
            </div>
            <div className="stats-column-right">
              <p className="p value">{album.ratings||0} / 10</p>
            </div>
          </div>
        </div>

        {/* Hàng BUTTONS (trước đây là flex:1) */}
        <div className="buttons-row">
          <ReadFromBeginning comicId={album._id}/>
          <button className="button">
            <div className="button-inner">
            <IoBookmarkSharp />
              <p className="p button-text unselectable">Favorite</p>
            </div>
          </button>
          <ShareButton url={window.location} title={album.title}/>
          <button className="button">
            <div className="button-inner">
            <MdReport />
              <p className="p button-text unselectable">Report</p>
            </div>
          </button>
          {album.uploader_id==localStorage.getItem("userId")?<EditButton comicId={album._id}/>:<></>}
        </div>
      </div>
    </div>

    {/* ----- DESCRIPTION SECTION ----- */}
    <div className="description-block">
      <div className="desc-header">
      <RiInformation2Fill />
        <h1 className="white desc-title unselectable">Description</h1>
      </div>
      <p className="p desc-content">
        {album.description}
      </p>
    </div>

    {/* ----- CHAPTERS SECTION ----- */}
    <div className="chapters-wrapper">
      <h1 className="white chapters-title unselectable">Chapters</h1>
      <div className="chapters-box">
        {/* Row trên: 2 khối (left 9, right 1) */}
        <div className="chapter-top-row">
        <input
          type="text"
          className="chapter-input"
          placeholder="Search chapters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="chapter-find"><FaMagnifyingGlass /></button>
      </div>

      {/* Chapters List */}
      <div className="chapter-bottom-row">
        {filteredChapters.map((chapter) => (
          <button key={chapter.id} className="chapter-item">
            <div className="ladiv chapter-item-ladiv">
              <img src={chapter.chapter_cover || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"} alt={`Chapter ${chapter.chapter_number}`} />
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

    {/* ----- COMMENTS SECTION ----- */}
    <div className="comments-wrapper">
      <h1 className="white comments-title unselectable">Comments</h1>
      <div className="comments-box">
        {/* Row trên: 2 khối (left 9, right 1) */}
        <div className="comments-top-row">
          <div className="comments-left"></div>
          <div className="comments-right"></div>
        </div>
        {/* Row dưới: container list comments */}
        <div className="comments-bottom-row">
          <div className="comment-user-block">
            <p className="white comment-username">Username</p>
            <div className="comment-row">
              <img src="" className="icon comment-avatar" alt="Avatar" />
              <div className="comment-bubble">
                <p className="comment-text">Lorem Ipsum Dolor Sit Amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        <FooterComponent />
  </>
  );
}