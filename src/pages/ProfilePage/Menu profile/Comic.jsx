import { Bookmark, CircleStop, Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from 'axios'
export default function Comic(props) {
  const [textTitle,setTextTile]=useState('')
  const [dataComic, setDataComic] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/album/showAlbum");
      console.log("API response:", response.data); // In dữ liệu API
      if (Array.isArray(response.data.data)) { 
        setDataComic(response.data.data); // Lấy mảng từ `data`
      } else {
        console.error("Lỗi: API không trả về mảng!", response.data);
        setDataComic([]); // Đảm bảo dữ liệu luôn là mảng
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };
  
  useEffect(()=>{
    fetchData()
  },[])
  useEffect(()=>{
    switch (props.type) {
      case "follower":
        setTextTile("theo dõi");
        break;
      case "viewed":
        setTextTile("đã đọc");
        break;
      case "upload":
        setTextTile("đã đăng");
        break;
    }
  }, [props.type]);
  console.log(props);

  return (
    <div className="comic-container">
      <div className="header-list">
        <p>Danh sách truyện {textTitle} ({dataComic.length})</p>
        {props.type === "upload" ? (
          <button className="upload-new-comic">Đăng truyện</button>
        ) : (
          ""
        )}
      </div>
      <div className="list-container">
        {dataComic.map((comic)=>(
        <div className="comic-container">
          <img src={comic.cover_image} alt="truyện" />
          <div className="comic-information">
            <p className="name">{comic.title}</p>
            <p className="chapter">Chapter {comic.chapters.length}</p>
          </div>
          <div className="comic-rate">
            <span className="icon-circle">
              <CircleStop />
            </span>
            <div className="rate">
              <span className="icon-rate">
                <Bookmark />
              </span>
              <p>{comic.views}</p>
              <span className="icon-rate">
                <Eye />
              </span>
              <p>{comic.ratings}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
