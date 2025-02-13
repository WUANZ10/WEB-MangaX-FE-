import React from "react";
import { Link } from "react-router-dom";
import "./loginStyle.css";

export default function LoginComponent() {
  return (
    <div className="login_content">
      <div className="input_screen">
        <ul className="form">
          <li>
            <p
              className="label text_email_or_username"
              placeholder="Tên đăng nhập hoặc email"
            >
              Tên đăng nhập hoặc email
            </p>
            <input id="login_username" />
          </li>

          <li>
            <p className="label text_password" placeholder="Mật khẩu">
              Mật khẩu
            </p>
            <input className="password" type="password" id="login_password" />
          </li>
        </ul>
      </div>
      <p className="forgot">
        <Link to="#">Quên mật khẩu?</Link>
      </p>
      <div className="button_click">
        <button
          className="button_yes text_button_login"
          placeholder="Đăng nhập"
        >
          Đăng nhập
        </button>
      </div>
      <div className="other_login">
        <div className="title">
          <p className="text_or" placeholder="Hoặc">
            Hoặc
          </p>
        </div>
        <div className="list">
          <div className="item">
            <img
              className="item_icon"
              src="https://cmangax.com/assets/img/icon/login_google.png"
              alt=""
            />
            <text
              className="text_login_with_google"
              placeholder="Đăng nhập với Google"
            >
              Đăng nhập với Google
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}
