import React, { useState } from "react";
import "./Profile.css";
import { BookHeart, FileClock, PanelLeftClose, PanelRightClose, ScrollText, User, UserCog } from "lucide-react";
import UserProfile from './Menu profile/UserProfile'
import UserPassword from './Menu profile/UserPassword'
import Comic from './Menu profile/Comic'
export default function Profile() {
  const [aside, setAside] = useState("");
  const [moveContent, setMoveContent] = useState("");
  const [moreSetting, setMoreSetting] = useState("");
  const [optionMenu, setOptionMenu] = useState(<UserProfile />);
  const openMore = (status) => {
    if (moreSetting !== status) {
      setMoreSetting(status);
    } else {
      setMoreSetting("close-more-op");
    }
  };

  const openAside=(status)=>{
    if(status==='open-aside'){
      setAside('open-aside')
      setMoveContent('move-profile-content')
    }else{
      setAside('close-aside')
      setMoveContent('back-profile-content')
    }
  };
  return (
    <div className="profile-container">
      <div className={`aside-profile-container ${aside}`}>
        <div className="aside-profile">
          <p className="option" onClick={() => setOptionMenu(<UserProfile />)}>
            <span className="icon">
              <User />
            </span>
            Trang cá nhân
          </p>
          <p
            className="option"
            onClick={() => setOptionMenu(<Comic type="follower" />)}
          >
            <span className="icon">
              <BookHeart />
            </span>
            Truyện theo dõi
          </p>
          <p
            className="option"
            onClick={() => setOptionMenu(<Comic type="viewed" />)}
          >
            <span className="icon">
              <FileClock />
            </span>
            Truyện đã đọc
          </p>
          <p
            className="option"
            onClick={() => setOptionMenu(<Comic type="upload" />)}
          >
            <span className="icon">
              <ScrollText />
            </span>
            Truyện đã đăng
          </p>
          <div className="setting">
            <p className="option" onClick={() => openMore("open-more-op")}>
              <span className="icon">
                <UserCog />
              </span>
              Cài đặt
            </p>
            <div className="setting">
              <p className="option" onClick={()=>openMore("open-more-op")}>
                <span className="icon">
                  <UserCog />
                </span>
                Cài đặt
              </p>
              <ul className={moreSetting}>
                <li className="option extra-op" onClick={()=>setOptionMenu(<UserPassword/>)}>Thay đổi mật khẩu</li>
              </ul>
            </div>
          </div>
        </div>
        {aside === "open-aside" ? (
          <span
            className="aside-action"
            onClick={() => openAside("close-aside")}
          >
            <PanelLeftClose />{" "}
          </span>
        ) : (
          <span
            className="aside-action"
            onClick={() => openAside("open-aside")}
          >
            <PanelRightClose />
          </span>
        )}
      </div>
      <div className={`profile-content ${moveContent}`}>{optionMenu}</div>
    </div>
  );
}
