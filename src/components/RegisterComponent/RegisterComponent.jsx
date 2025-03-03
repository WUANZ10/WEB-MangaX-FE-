import React, { useState } from "react";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import userService from "../../services/userService";

export default function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  
  const mutation = useMutationHooks((data) => userService.registerUser(data));
  const { isLoading, isError, error, isSuccess, data } = mutation;

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassWord = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeConfirmPassWord = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOnChangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password, confirmPassword, username });
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
                type="email"
                value={email}
                onChange={handleOnChangeEmail}
                required="required"
              />
            </li>
            <li>
              <p className="label text_password">Mật khẩu</p>
              <input
                id="reg_password"
                type="password"
                value={password}
                onChange={handleOnChangePassWord}
                required="required"
              />
            </li>
            <li>
              <p className="label text_repassword">Nhập lại mật khẩu</p>
              <input
                className={`password ${
                  confirmPassword && password !== confirmPassword
                    ? "input_error"
                    : ""
                }`}
                type="password"
                id="reg_re_password"
                value={confirmPassword}
                onChange={handleOnChangeConfirmPassWord}
                required="required"
              />
            </li>
            <li>
              <p className="label text_profile_name">Tên hiển thị</p>
              <input
                id="reg_name"
                required="required"
                value={username}
                onChange={handleOnChangeUserName}
              />
            </li>
          </ul>
        </div>
        <LoadingComponent isLoading={isLoading}>
          <div className="button_click">
            <button
              className="button_yes full text_button_register"
              type="submit"
              disabled={
                !email.length ||
                !password.length ||
                !confirmPassword.length ||
                !username.length ||
                isLoading
              }
            >
              Đăng ký
            </button>
          </div>
        </LoadingComponent>
        {isError && (
          <div className="error_message">Đăng ký thất bại: {error.message}</div>
        )}
        {isSuccess && (
          <div className="success_message">
            Đăng ký thành công: {data.message}
          </div>
        )}
      </form>
    </div>
  );
}
