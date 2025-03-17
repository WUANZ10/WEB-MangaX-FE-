import React, { useState, useEffect } from "react";
import { IoMdRemove } from "react-icons/io";
import "./modalStyle.css";

export default function ModalComponent({
  isOpen,
  closeModal,
  activeComponent
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

  return (
      <div className={`modal_container ${isOpen ? "show" : ""}`}>
        <div className="modal_content">

          <button className="modal_button" onClick={closeModal}>
            <IoMdRemove color="#fff" />
          </button>
        </div>
      </div>
  );
}