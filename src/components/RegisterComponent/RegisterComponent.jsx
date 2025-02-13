import React from "react";

export default function RegisterComponent() {
  return (
    <div className="register_content">
      <div className="input_screen">
        <ul className="form">
          <li>
            <p className="label text_username" placeholder="Tên đăng nhập">
              Tên đăng nhập
            </p>
            <input id="reg_username" placeholder />
          </li>
          <li>
            <p className="label text_password" placeholder="Mật khẩu">
              Mật khẩu
            </p>
            <input
              className="password"
              type="password"
              id="reg_password"
              placeholder
            />
          </li>
          <li>
            <p
              className="label text_repassword"
              placeholder="Nhập lại mật khẩu"
            >
              Nhập lại mật khẩu
            </p>
            <input
              className="password"
              type="password"
              id="reg_re_password"
              placeholder
            />
          </li>
          <li>
            <p className="label text_profile_name" placeholder="Tên hiển thị">
              Tên hiển thị
            </p>
            <input id="reg_name" placeholder />
          </li>
        </ul>
      </div>
      <div className="button_click">
        <button
          className="button_yes full text_button_register"
          placeholder="Đăng ký"
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
}
