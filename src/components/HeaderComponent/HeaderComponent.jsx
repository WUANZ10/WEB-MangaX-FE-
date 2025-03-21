import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalComponent from "../ModalComponent/ModalComponent";
import "./headerStyle.css";
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slides/userSlice";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("login");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const openModal = (component) => {
    setActiveComponent(component);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleRegisterSuccess = () => {
    setActiveComponent("login");
  };

  const handleLoginSuccess = () => {
    closeModal();
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("accessToken");
    navigate("/home");
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      navigate(`/home?search=${searchTerm}`);
    } else {
      navigate("/home");
    }
  }, [searchTerm, navigate]);

  return (
    <div id="main_header">
      <header className="main_header">
        <div className="div_module">
          <div className="left">
            <div className="logo">
              <Link to="/home" className="pc_display">
                <img
                  className="brand_logo_white"
                  alt="logo"
                  src="https://cmangax.com/assets/img/brand/cmanga/logo-white.png"
                />
              </Link>
            </div>
            <div className="search input_screen pc_display">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  className="text_album_find"
                  placeholder="Bạn muốn tìm truyện gì"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                  <CiSearch style={{ fontSize: 24, cursor: "pointer" }} />
                </button>
              </form>
              <div className="search_result" style={{ display: "none" }}></div>
            </div>
          </div>
          <div className="right">
            {user.isLoggedIn ? (
              <div className="user-info">
                <span>Xin chào, {user.name}</span>
                <button onClick={handleLogout}>Đăng xuất</button>
              </div>
            ) : (
              <div className="button_style">
                <button
                  className="pc_display text_button_register"
                  onClick={() => openModal("register")}
                >
                  Đăng ký
                </button>
                <div className="box">
                  <span className="border-line" />
                  <button
                    className="text_button_login"
                    onClick={() => openModal("login")}
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
            )}
            <ModalComponent
              isOpen={isOpen}
              closeModal={closeModal}
              activeComponent={activeComponent}
              onRegisterSuccess={handleRegisterSuccess}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
