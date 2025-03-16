import React, { useEffect, useState } from "react";
import "./readPageStyle.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReadPage() {
  let [album, setAlbum] = useState({})
  const id = useParams()
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
    <div id="content">
    {/* ----- TOP SECTION: INFO + CHAPTER ----- */}
    <div className="info-section">
      <h1 id="name" className="white comic-title">Comic Name Placeholder</h1>
      <h2 id="name" className="white">Chapter 1</h2>
    </div>
    {/* ----- MIDDLE SECTION: NAVIGATION BUTTONS + PAGES ----- */}
    <div className="navbar">
      <button className="no-style center white semibold flex1 left"><IoIosArrowBack className="icon"/> Previous Chapter</button>
      <h3 className="normal flex1 center">Chapter Name</h3>
      <button className="no-style center white semibold flex1 right">Next Chapter <IoIosArrowForward className="icon"/></button>
    </div>
    <div className="page-holder">
    <img className="page" src="https://blog.nimblepros.com/static/9ee7c9d944dc07e118677f07e14c253e/2bef9/pascal-cased-name.png"/>
    <img className="page" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPL7l5ilegPzNTCMJ3cSHPSNgIq6CWggccGQ&s"/>
    </div>
    {/* ----- BOTTOM SECTION: NAVIGATION BUTTONS ----- */}
    <div className="navbar">
      <button className="no-style center white semibold flex1 left"><IoIosArrowBack className="icon"/> Previous Chapter</button>
      <h3 className="normal flex1 center">Chapter Name</h3>
      <button className="no-style center white semibold flex1 right">Next Chapter <IoIosArrowForward className="icon"/></button>
    </div>
  </div>
  );
}