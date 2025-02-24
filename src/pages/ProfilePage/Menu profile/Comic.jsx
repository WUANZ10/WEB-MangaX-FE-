import { Bookmark, CircleStop, Eye } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Comic(props) {
  const [textTitle, setTextTile] = useState("");
  useEffect(() => {
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
        <p>Danh sách truyện {textTitle} (0)</p>
        {props.type === "upload" ? (
          <button className="upload-new-comic">Đăng truyện</button>
        ) : (
          ""
        )}
      </div>
      <div className="list-container">
        <div className="comic-container">
          <img src="/logo512.png" alt="truyện" />
          <div className="comic-information">
            <p className="name">Name</p>
            <p className="chapter">Chapter 100</p>
          </div>
          <div className="comic-rate">
            <span className="icon-circle">
              <CircleStop />
            </span>
            <div className="rate">
              <span className="icon-rate">
                <Bookmark />
              </span>
              <p>100</p>
              <span className="icon-rate">
                <Eye />
              </span>
              <p>3.5k</p>
            </div>
          </div>
        </div>
        <div className="comic-container">
          <img src="/logo512.png" alt="truyện" />
          <div className="comic-information">
            <p className="name">Name</p>
            <p className="chapter">Chapter 100</p>
          </div>
          <div className="comic-rate">
            <span className="icon-circle">
              <CircleStop />
            </span>
            <div className="rate">
              <span className="icon-rate">
                <Bookmark />
              </span>
              <p>100</p>
              <span className="icon-rate">
                <Eye />
              </span>
              <p>3.5k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
