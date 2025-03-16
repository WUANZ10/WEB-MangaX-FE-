import React, { useEffect, useState } from "react";
import "./readPageStyle.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PreviousChapter } from "./Buttons/PreviousChapter";
import { NextChapter } from "./Buttons/NextChapter";

export default function ReadPage() {
  let [album, setAlbum] = useState({})
  let [chapter, setChapter] = useState({})
  const params = useParams()
  useEffect(() => {
    const fetchItem = async () => {
      try {
        axios.get(`${process.env.REACT_APP_API_URL}/album/detailedAlbum/${params.comicId}`)
          .then((response) => 
            {
            setAlbum(response.data.data)
            setChapter(response.data.data.chapters)
          })
          .catch(error => console.error("Error:", error.response?.data || error.message));
      } catch (err) {
        console.error('Error fetching item:', err);
      }
    };

    fetchItem();
  }, []);


  return (
    <div id="read_content">
    {/* ----- TOP SECTION: INFO + CHAPTER ----- */}
    <div className="info-section">
      <h1 className="white comic-title center">{album.title}</h1>
      <h2 className="white center">Chapter {(chapter[Number(params.chapter)]||[]).chapter_number||1}</h2>
    </div>
    {/* ----- MIDDLE SECTION: NAVIGATION BUTTONS + PAGES ----- */}
    <div className="navbar">
      <button className="no-style center white semibold flex1 left"><IoIosArrowBack className="icon"/> Previous Chapter</button>
      <h3 className="normal flex1 center">{(chapter[Number(params.chapter)]||[]).chapter_name}</h3>
      <button className="no-style center white semibold flex1 right">Next Chapter <IoIosArrowForward className="icon"/></button>
    </div>
    <div className="page-holder">
      {((chapter[Number(params.chapter)]||[]).pages||[]).map((page)=>(
            <img className="page" src={page.image_data}/>
      ))}
    </div>
    {/* ----- BOTTOM SECTION: NAVIGATION BUTTONS ----- */}
    <div className="navbar">
      <PreviousChapter/>
      <h3 className="normal flex1 center">{(chapter[Number(params.chapter)]||[]).chapter_name}</h3>
      <NextChapter max={chapter.length}/>
    </div>
  </div>
  );
}