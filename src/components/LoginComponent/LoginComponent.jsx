import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import userService from "../../services/userService";
import { showSuccessToast, showErrorToast } from "../../config/toastConfig";
import "./loginStyle.css";

export default function LoginComponent({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const mutation = useMutationHooks((data) => userService.loginUser(data));
  const { isLoading } = mutation;

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    mutation.mutate(
      { email, password },
      {
        onSuccess: (response) => {
          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
          showSuccessToast("Đăng nhập thành công!");
          onLoginSuccess();
          navigate("/profile");
        },
        onError: (error) => {
          showErrorToast(`Đăng nhập thất bại: ${error.message}`);
        },
      }
    );
  };

  return (
    <div className="login_content">
      <form onSubmit={handleLogin}>
        <div className="input_screen">
          <ul className="form">
            <li>
              <p className="label text_email_or_username">Email</p>
              <input
                id="login_username"
                type="email"
                value={email}
                onChange={handleOnChangeEmail}
                required
              />
            </li>

            <li>
              <p className="label text_password">Mật khẩu</p>
              <input
                id="login_password"
                type="password"
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
