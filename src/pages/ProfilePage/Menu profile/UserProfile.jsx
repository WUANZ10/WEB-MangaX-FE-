import React, { useEffect, useState } from "react";
import "./Menuprofile.css";
import { Pencil } from "lucide-react";
import axios from 'axios'
export default function UserProfile() {
  const [userInput, setUserInput] = useState({
    _id:'',
    avatar:'',
    username: "",
    introduce:''
  });
  const handleChange = (e) => {
    const {name,value}=e.target
    setUserInput((data)=>({
      ...data,
      [name]:value
    }))
  };

  const getUserData=async()=>{
    try{
      const userAPI=await axios.get('http://localhost:3001/api/user/data-user','67b48c0ff95f9f6eba206373')
      // console.log(userAPI.data.data)
      let {_id,username,avatar,introduce}=userAPI.data.data
      if(avatar===''){
        avatar='/User_Avatar.png'
      }
      setUserInput({
        _id,
        avatar,
        username,
        introduce
      })
    }catch(err){
      console.error('fail get user data',err.response || err.message)
    }
  }

  const updateUserData=async(e)=>{
    console.log(userInput)
    e.preventDefault()
    try{
      const userAPI=await axios.put('http://localhost:3001/api/user/update-user',userInput)
      console.log(userAPI)  
    }catch(err){
      console.error('fail to update data',err.response || err.message)
    }
  }
  useEffect(()=>{
    getUserData()
  },[])
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
      <form className="form-data-user" onSubmit={updateUserData}>
        <p>Tên hiển thị: </p>
        <input type="text" name="username" onChange={handleChange} value={userInput.username} />
        <p>Giới thiệu: </p>
        <textarea name="introduce" cols="70" rows="10" onChange={handleChange} value={userInput.introduce}></textarea>
        <button className="update-profile">Cập nhật</button>
      </form>
    </div>
  );
}
