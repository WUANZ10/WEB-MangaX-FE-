import React, { useState } from "react";
import "./Menuprofile.css";
import { Pencil } from "lucide-react";
import axios from 'axios'
export default function UserProfile() {
  const [userInput, setUserInput] = useState({
    avatar:'/logo512.png',
    name: "",
    introduce:''
  });
  const handleChange = (e) => {
    const {name,value}=e.target
    setUserInput((data)=>({
      ...data,
      [name]:value
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput.name + userInput.introduce);
    // ...
  };
  const [userData,setUserData]=useState({
    avatar:'',
    name:'',
    introduce:''
  })
  const getUserData=async()=>{
    try{
      const user=await axios.get('')
      console.log(user)
    }catch(err){
      console.error('fail get user data',err.response || err.message)
    }
  }

  return (
    <div className="user-container">
      <img
        className="background-profile"
        src="/profile-background.jpg"
        alt="background"
      />
      <div className="user-data">
        <img className="user-avt" src={userInput.avatar} alt="avt" />
        <p className="change-avt">
          Đổi ảnh đại diện{" "}
          <span className="icon-change">
            <Pencil />
          </span>
        </p>
      </div>
      <form className="form-data-user" onSubmit={handleSubmit}>
        <p>Tên hiển thị: </p>
        <input type="text" name="name" onChange={handleChange} value={userInput.name} />
        <p>Giới thiệu: </p>
        <textarea name="introduce" cols="70" rows="10" onChange={handleChange} value={userInput.introduce}></textarea>
        <button className="update-profile">Cập nhật</button>
      </form>
    </div>
  );
}
