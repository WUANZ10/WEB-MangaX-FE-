import React, { useEffect, useState } from "react";
import "./Menuprofile.css";
import { Pencil } from "lucide-react";
import axios from 'axios'
import { useMutation, useQuery } from "react-query";
import { showErrorToast, showSuccessToast } from "../../../config/toastConfig";
export default function UserProfile() {
  const [usertoken,setUserToken]=useState('')
  const [userInput, setUserInput] = useState({
    _id: '67b48c0ff95f9f6eba206373',
    avatar: '',
    username: "",
    introduce: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInput((data) => ({
      ...data,
      [name]: value
    }))
  };
  const fetchUserById = async (userId) => {
    const response = await axios.post('http://localhost:3001/api/user/data-user', userId)
    return response.data.data
  }
  const fetchUpdateUser = async (userInput) => {
    if (userInput.username.length > 15) {
      throw new Error('Ko được quá 15 từ')
    }
    const response = await axios.put(`http://localhost:3001/api/user/updateUser/${userInput._id}`, 
    userInput,
    {
      headers:{
        Authorization: `Bearer ${usertoken}`
      },
  })
    return response.data.data
  }

  const mutation = useMutation(fetchUpdateUser, {
    onSuccess: (data) => {
      showSuccessToast('Update thành công')
      console.log(data)
    },
    onError: (error) => {
      showErrorToast(`Update thất bại: ${error.message}`);
    }
  })

  const SubmitUpdate = (e) => {
    e.preventDefault()
    mutation.mutate(userInput)
  }

  const { data: user, isLoading, error: getError } = useQuery(
    ['user', userInput._id],
    () => fetchUserById(userInput._id),
    {
      enabled: userInput._id !== '',
      onSuccess: (user) => {
        const token=localStorage.getItem('accessToken')
        if(token){
          setUserToken(token)
        }
      },
      staleTime: 1000 * 60 * 5  // trong vòng 2p ko refetch lại khi đổi tab
    } 
  )

  if (getError) {
    alert('Error user data')
  }

  useEffect(() => {
    if (user) {
      if (user.avatar === '') {
        user.avatar = '/User_Avatar.png'
      }
      setUserInput((pre) => ({
        ...pre,
        avatar: user.avatar,
        username: user.username,
        introduce: user.introduce
      }))     // ...pre để ko bị ghi đè trước khi gửi dữ liệu
    }
  }, [user])

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
      <form className="form-data-user" onSubmit={SubmitUpdate}>
        <p>Tên hiển thị: </p>
        <input type="text" name="username" onChange={handleChange} value={userInput.username} />
        <p>Giới thiệu: </p>
        <textarea name="introduce" cols="70" rows="10" onChange={handleChange} value={userInput.introduce}></textarea>
        <button className="update-profile">Cập nhật</button>
      </form>
    </div>
  );
}
