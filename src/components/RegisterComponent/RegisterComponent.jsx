import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordMatch(e.target.value, rePassword);
  };

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
    checkPasswordMatch(password, e.target.value);
  };

  const checkPasswordMatch = (password, rePassword) => {
    setIsPasswordMatch(password === rePassword);
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
              <div className="div_password">
                <input
                  className="password"
                  type={showPassword ? "text" : "password"}
                  id="reg_password"
                  value={password}
                  onChange={handlePasswordChange}
                  required="required"
                />
                <span onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </li>
            <li>
              <p className="label text_repassword">Nhập lại mật khẩu</p>
              <div className="div_password">
                <input
                  className={`password ${
                    !isPasswordMatch && rePassword ? "input-error" : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  id="reg_re_password"
                  value={rePassword}
                  onChange={handleRePasswordChange}
                  required="required"
                />
                <span onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
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
