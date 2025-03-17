import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutationHooks } from "../../hooks/useMutationHook";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import userService from "../../services/userService";
import { showSuccessToast, showErrorToast } from "../../config/toastConfig";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlice";

import "./loginStyle.css";

export default function LoginComponent({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          const { access_token } = response.data;
          localStorage.setItem("accessToken", access_token);

          const decoded = jwtDecode(access_token);
          console.log(decoded)
          const userInfo = {
            name: decoded.payload?.username,
            email: decoded.payload?.email,
            access_token: access_token,
            isLoggedIn: true,
          };

          dispatch(updateUser(userInfo));
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          showSuccessToast("Đăng nhập thành công!");
          onLoginSuccess();
          navigate("/home");
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
