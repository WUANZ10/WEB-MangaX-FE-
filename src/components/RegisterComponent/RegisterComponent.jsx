import React, { useState } from "react";

export default function RegisterComponent() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordMatch(newPassword === rePassword);
  };

  const handleRePasswordChange = (e) => {
    const newRePassword = e.target.value;
    setRePassword(newRePassword);
    setIsPasswordMatch(password === newRePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPasswordMatch) {
      console.log("Registration successful!");
    } else {
      console.log("Passwords do not match!");
    }
  };

  return (
    <div className="register_content">
      <form onSubmit={handleSubmit}>
        <div className="input_screen">
          <ul className="form">
            <li>
              <p className="label text_username">Tên đăng nhập</p>
              <input id="reg_username" placeholder required="required" />
            </li>
            <li>
              <p className="label text_password">Mật khẩu</p>
              <input
                className="password"
                type="password"
                id="reg_password"
                value={password}
                onChange={handlePasswordChange}
                required="required"
              />
            </li>
            <li>
              <p className="label text_repassword">Nhập lại mật khẩu</p>
              <input
                className={`password ${
                  !isPasswordMatch && rePassword ? "input-error" : ""
                }`}
                type="password"
                id="reg_re_password"
                value={rePassword}
                onChange={handleRePasswordChange}
                required="required"
              />
            </li>
            <li>
              <p className="label text_profile_name">Tên hiển thị</p>
              <input id="reg_name" required="required" />
            </li>
          </ul>
        </div>
        <div className="button_click">
          <button
            className="button_yes full text_button_register"
            type="submit"
            disabled={!isPasswordMatch}
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
}
