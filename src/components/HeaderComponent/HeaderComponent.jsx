import React, { useState } from "react";
import { Link } from "react-router";
import ModalComponent from "../ModalComponent/ModalComponent";
import "./headerStyle.css";
import { CiSearch } from "react-icons/ci";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("login");

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
              <input
                className="text_album_find"
                placeholder="Bạn muốn tìm truyện gì"
              />
              <button>
                <CiSearch style={{ fontSize: 24, cursor: "pointer" }} />
              </button>
              <div className="search_result" style={{ display: "none" }}></div>
            </div>
          </div>
          <div className="right">
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
