import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginStyle.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login successful!");
  };

  return (
    <div className="login_content">
      <form onSubmit={handleSubmit}>
        <div className="input_screen">
          <ul className="form">
            <li>
              <p className="label text_email_or_username">
                Tên đăng nhập hoặc email
              </p>
              <input id="login_username" required="required" />
            </li>

            <li>
              <p className="label text_password">Mật khẩu</p>
              <div className="div_password">
                <input
                  className="password"
                  type={showPassword ? "text" : "password"}
                  id="login_password"
                  required="required"
                />
                <span onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <p className="forgot">
          <Link to="#">Quên mật khẩu?</Link>
        </p>
        <div className="button_click">
          <button className="button_yes text_button_login" type="submit">
            Đăng nhập
          </button>
        </div>
        <div className="other_login">
          <div className="title">
            <p className="text_or">Hoặc</p>
          </div>
          <div className="list">
            <div className="item">
              <img
                className="item_icon"
                src="https://cmangax.com/assets/img/icon/login_google.png"
                alt=""
              />
              <text className="text_login_with_google">
                Đăng nhập với Google
              </text>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
