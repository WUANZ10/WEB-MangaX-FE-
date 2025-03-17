import React, { useState, useEffect } from "react";
import LoginComponent from "../LoginComponent/LoginComponent";
import RegisterComponent from "../RegisterComponent/RegisterComponent";
import { IoMdRemove } from "react-icons/io";
import "./modalStyle.css";

export default function ModalComponent({
  isOpen,
  closeModal,
  activeComponent,
  onRegisterSuccess,
  onLoginSuccess,
}) {
  const [currentComponent, setCurrentComponent] = useState(activeComponent);
  const [activeItem, setActiveItem] = useState(activeComponent);

  useEffect(() => {
    setCurrentComponent(activeComponent);
    setActiveItem(activeComponent);
  }, [activeComponent]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentComponent(activeComponent);
      setActiveItem(activeComponent);
    }
  }, [isOpen, activeComponent]);

  const showLogin = () => {
    setCurrentComponent("login");
    setActiveItem("login");
  };

  const showRegister = () => {
    setCurrentComponent("register");
    setActiveItem("register");
  };

  return (
    <>
      <div className={`modal_container ${isOpen ? "show" : ""}`}>
        <div className="modal_content">
          <div className="login_register">
            <div className="menu">
              <div
                className={`item ${activeItem === "login" ? "active" : ""}`}
                onClick={showLogin}
              >
                <p className="text_button_login">Đăng nhập</p>
                <div className="line"></div>
              </div>
              <div
                className={`item ${activeItem === "register" ? "active" : ""}`}
                onClick={showRegister}
              >
                <p className="text_button_register">Đăng ký</p>
                <div className="line"></div>
              </div>
            </div>
            <div className="component_container">
              {currentComponent === "login" && (
                <LoginComponent onLoginSuccess={onLoginSuccess} />
              )}
              {currentComponent === "register" && (
                <RegisterComponent onRegisterSuccess={onRegisterSuccess} />
              )}
            </div>
          </div>

          <button className="modal_button" onClick={closeModal}>
            <IoMdRemove color="#fff" />
          </button>
        </div>
      </div>
    </>
  );
}
