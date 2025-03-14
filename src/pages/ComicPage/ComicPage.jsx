import React, { useEffect, useState } from "react";
import "./comicPageStyle.css";
import { FaBook, FaBookOpenReader, FaMagnifyingGlass, FaShare } from "react-icons/fa6";
import { IoBookmarkSharp, IoEyeSharp, IoStar } from "react-icons/io5";
import { RiImageEditFill, RiInformation2Fill } from "react-icons/ri";
import { MdReport } from "react-icons/md";
import axios from "axios";

export default function ComicPage() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const path = window.location.pathname;
      const id = path.split('/').pop();
      console.log(id)
      try {
        const response2 = await axios.get(`${process.env.REACT_APP_API_URL}/album/getAllAlbum`);
        console.log(response2.data)
        axios.get(`${process.env.REACT_APP_API_URL}/album/detailedAlbum/${id}`)
          .then(response => console.log(response.data))
          .catch(error => console.error("Error:", error.response?.data || error.message));
      } catch (err) {
        console.error('Error fetching item:', err);
      }
    };

    fetchItem();
  }, []);
  return (
    <div id="content">
    {/* ----- TOP SECTION: LOGO + INFO ----- */}
    <div className="top-section">
      <div className="ladiv">
        <img src="" id="logo" alt="Logo" />
      </div>
      <div className="info-section">
        <h1 id="name" className="white comic-title">Comic Name Placeholder</h1>
        <p className="artist-name">Author:Name / Artist: Name</p>

        {/* Hàng TAG (trước đây là statsdiv với flex:4) */}
        <div className="tags-row">
          <p className="p white tag">Example Tag</p>
          <p className="p white tag">Horror</p>
          <p className="p white tag">Comedy</p>
        </div>

        {/* Hàng STATS (trước đây là statsdiv với flex:20) */}
        <div className="stats-row">
          <div className="stats-column">
            <div className="stats-column-left">
              <FaBookOpenReader />
              <p className="p label">Chapters</p>
            </div>
            <div className="stats-column-right">
              <p className="p value">1,234,567,890</p>
            </div>
          </div>
          <div className="stats-column">
            <div className="stats-column-left">
              <IoEyeSharp />
              <p className="p label">Views</p>
            </div>
            <div className="stats-column-right">
              <p className="p value">1,234,567,890</p>
            </div>
          </div>
          <div className="stats-column">
            <div className="stats-column-left">
              <IoBookmarkSharp />
              <p className="p label">Favorites</p>
            </div>
            <div className="stats-column-right">
              <p className="p value">1,234,567,890</p>
            </div>
          </div>
          <div className="stats-column">
            <div className="stats-column-left">
              <IoStar />
              <p className="p label">Ratings</p>
            </div>
            <div className="stats-column-right">
              <p className="p value">9.8 / 10</p>
            </div>
          </div>
        </div>

        {/* Hàng BUTTONS (trước đây là flex:1) */}
        <div className="buttons-row">
          <button className="button read-btn">
            <div className="button-inner">
            <FaBook />
              <p className="p button-text">Read from Beginning</p>
            </div>
          </button>
          <button className="button">
            <div className="button-inner">
            <IoBookmarkSharp />
              <p className="p button-text">Favorite</p>
            </div>
          </button>
          <button className="button">
            <div className="button-inner">
            <FaShare />
              <p className="p button-text">Share</p>
            </div>
          </button>
          <button className="button">
            <div className="button-inner">
            <MdReport />
              <p className="p button-text">Report</p>
            </div>
          </button>
          <button className="button">
            <div className="button-inner">
            <RiImageEditFill />
              <p className="p button-text">Edit</p>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* ----- DESCRIPTION SECTION ----- */}
    <div className="description-block">
      <div className="desc-header">
      <RiInformation2Fill />
        <h1 className="white desc-title">Description</h1>
      </div>
      <p className="p desc-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas leo eu nunc luctus, in laoreet libero venenatis. Duis eget finibus odio. Cras facilisis hendrerit mi, quis luctus lacus tempus et...
      </p>
    </div>

    {/* ----- CHAPTERS SECTION ----- */}
    <div className="chapters-wrapper">
      <h1 className="white chapters-title">Chapters</h1>
      <div className="chapters-box">
        {/* Row trên: 2 khối (left 9, right 1) */}
        <div className="chapter-top-row">
          <input type="text" className="chapter-input" />
          <button className="chapter-find"><FaMagnifyingGlass /></button>
        </div>
        {/* Row dưới: container list chapters */}
        <div className="chapter-bottom-row">
          <div className="chapter-item">
            <div className="ladiv chapter-item-ladiv">
              <img src="" alt="Chapter 1" />
            </div>
            <div className="chapter-item-text">
              <h1 id="name" className="white chapter-item-title">Chapter 1</h1>
              <p className="p chapter-item-desc">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div className="chapter-item">
            <div className="ladiv chapter-item-ladiv">
              <img src="" alt="Chapter 2" />
            </div>
            <div className="chapter-item-text">
              <h1 id="name" className="white chapter-item-title">Chapter 2</h1>
              <p className="p chapter-item-desc">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div className="chapter-item">
            <div className="ladiv chapter-item-ladiv">
              <img src="" alt="Chapter 3" />
            </div>
            <div className="chapter-item-text">
              <h1 id="name" className="white chapter-item-title">Chapter 3</h1>
              <p className="p chapter-item-desc">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div className="chapter-item">
            <div className="ladiv chapter-item-ladiv">
              <img src="" alt="Chapter 4" />
            </div>
            <div className="chapter-item-text">
              <h1 id="name" className="white chapter-item-title">Chapter 4</h1>
              <p className="p chapter-item-desc">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ----- COMMENTS SECTION ----- */}
    <div className="comments-wrapper">
      <h1 className="white comments-title">Comments</h1>
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
  );
}