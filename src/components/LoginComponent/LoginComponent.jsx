import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginStyle.css";
import * as userService from "../../services/userService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutationHooks((data) => userService.loginUser(data));
  const { isLoading, isError, error, isSuccess, data } = mutation;

  console.log(mutation)
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <div className="login_content">
      <form onSubmit={handleLogin}>
        <div className="input_screen">
          <ul className="form">
            <li>
              <p className="label text_email_or_username">
                Tên đăng nhập hoặc email
              </p>
              <input
                id="login_username"
                value={email}
                onChange={handleOnChangeEmail}
                required
              />
            </li>

            <li>
              <p className="label text_password">Mật khẩu</p>
              <input
                type="password"
                id="login_password"
                value={password}
                onChange={handleOnChangePassword}
                required
              />
            </li>
          </ul>
        </div>
        <p className="forgot">
          <Link to="#">Quên mật khẩu?</Link>
        </p>
        <LoadingComponent isLoading={isLoading}>
          <div className="button_click">
            <button
              className="button_yes text_button_login"
              type="submit"
              disabled={!email.length || !password.length || isLoading}
            >
              Đăng nhập
            </button>
          </div>
        </LoadingComponent>
        {isError && (
          <div className="error_message">
            Đăng nhập thất bại: {error.message}
          </div>
        )}
        {isSuccess && (
          <div className="success_message">
            Đăng nhập thành công: {data.message}
          </div>
        )}
        <div className="other_login">
          <div className="title">
            <p className="text_or">Hoặc</p>
          </div>
          <div className="list">
            <div className="item">
              <img
                className="item_icon"
                src="https://cmangax.com/assets/img/icon/login_google.png"
                alt="Google Icon"
              />
              <span className="text_login_with_google">
                Đăng nhập với Google
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
