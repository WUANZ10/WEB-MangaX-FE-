import React, { useState } from "react";

export default function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassWord = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordMatch(newPassword === confirmPassword);
  };

  const handleOnChangeConfirmPassWord = (e) => {
    const newRePassword = e.target.value;
    setConfirmPassword(newRePassword);
    setIsPasswordMatch(password === newRePassword);
  };

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email && password && confirmPassword && name && isPasswordMatch) {
      console.log("Register Success");
      console.log("Email: ", email);
      console.log("Password: ", password);
      console.log("Name: ", name);
    } else {
      console.log("Register Fail");
    }
  };

  return (
    <div className="register_content">
      <form onSubmit={handleRegister}>
        <div className="input_screen">
          <ul className="form">
            <li>
              <p className="label text_email">Email</p>
              <input
                id="reg_email"
                value={email}
                onChange={handleOnChangeEmail}
                required="required"
              />
            </li>
            <li>
              <p className="label text_password">Mật khẩu</p>
              <input
                className="password"
                type="password"
                id="reg_password"
                value={password}
                onChange={handleOnChangePassWord}
                required="required"
              />
            </li>
            <li>
              <p className="label text_repassword">Nhập lại mật khẩu</p>
              <input
                className={`password ${
                  !isPasswordMatch && confirmPassword ? "input-error" : ""
                }`}
                type="password"
                id="reg_re_password"
                value={confirmPassword}
                onChange={handleOnChangeConfirmPassWord}
                required="required"
              />
              {!isPasswordMatch && confirmPassword && (
                <p className="error-message">Passwords do not match</p>
              )}
            </li>
            <li>
              <p className="label text_profile_name">Tên hiển thị</p>
              <input
                id="reg_name"
                required="required"
                value={name}
                onChange={handleOnChangeName}
              />
            </li>
          </ul>
        </div>
        <div className="button_click">
          <button
            className="button_yes full text_button_register"
            type="submit"
            disabled={
              !email.length ||
              !password.length ||
              !confirmPassword.length ||
              !name.length ||
              !isPasswordMatch
            }
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
}
