import React from "react";
import { Link } from "react-router";
import "./headerStyle.css";
import { CiSearch } from "react-icons/ci";

export default function HeaderComponent() {
  return (
    <div id="main_header">
      <header className="main_header">
        <div className="div_module">
          <div className="left">
            <div className="logo">
              <Link to="/" className="pc_display">
                <img
                  className="brand_logo_white"
                  alt="logo"
                  src="https://cmangax.com/assets/img/brand/cmanga/logo-white.png"
                />
              </Link>
            </div>
            <div className="search input_screen pc_display">
              <input
                className="text_album_find"
                placeholder="Bạn muốn tìm truyện gì"
              />
              <button>
                <CiSearch style={{ fontSize: 28, cursor: "pointer" }} />
              </button>
              <div className="search_result" style={{ display: "none" }}>
                <ul></ul>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="button_style">
              <Link to="/register">
                <button className="pc_display text_button_register">
                  Đăng ký
                </button>
              </Link>

              <div className="box">
                <span className="border-line" />
                <Link to="/login">
                  <button className="text_button_login">Đăng nhập</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
