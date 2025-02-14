import React, { useState } from "react";
import "./Menuprofile.css";
import { Pencil } from "lucide-react";
export default function UserProfile() {
  const [userData, setUserData] = useState({
    name: "",
    introduce: "",
  });
  const handleChange = (e) => {
    const {name,value}=e.target
    setUserData((data)=>({
      ...data,
      [name]:value
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData.name + userData.introduce);
    // ...
  };

  return (
    <div className="user-container">
      <img
        className="background-profile"
        src="/profile-background.jpg"
        alt="background"
      />
      <div className="user-data">
        <img className="user-avt" src="/logo512.png" alt="avt" />
        <p className="change-avt">
          Đổi ảnh đại diện{" "}
          <span className="icon-change">
            <Pencil />
          </span>
        </p>
      </div>
      <form className="form-data-user" onSubmit={""}>
        <p>Tên hiển thị: </p>
        <input type="text" name="name" onChange={handleChange} value={userData.name} />
        <p>Giới thiệu: </p>
        <input type="text" name="introduce" onChange={handleChange} value={userData.introduce} />
        <button className="update-profile">Cập nhật</button>
      </form>
    </div>
  );
}
