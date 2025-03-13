import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query'

export default function UserPassword() {
  const [newPassword,setNewPassword]=useState({
    _id:'67b48c0ff95f9f6eba206373',
    oldpass:'',
    newpass:'',
    verifypass:''
  })
  const fetchChangePass=async(dataPass)=>{
    try{
      const response=await axios.put('http://localhost:3001/api/user/change-pass',dataPass)
      return response
    }catch(error){
      throw error
    }
  }
  const mutation=useMutation(fetchChangePass,{
    onSuccess:(data)=>{
      alert('Success Change Pass')
      console.log(data)
      setNewPassword((pre)=>({
        _id:pre._id,
        oldpass:'',
        newpass:'',
        verifypass:''
      }))
    },onError:(error)=>{
      alert('Fail Change Pass')
      console.log(error.messaage)
    }
  })  

  const handleChange=(e)=>{
    const {name,value}=e.target
    setNewPassword((data)=>({
      ...data,
      [name]:value
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(newPassword.newpass !== newPassword.verifypass){
      alert("xác nhận mật khẩu không trùng")
      return;
    }
    if(newPassword.newpass.length<8){
      alert("cần ít nhất 8 kí tự")
      return;
    }
    mutation.mutate(newPassword)
  }

  return (
    <div className='password-container'>
      <form onSubmit={handleSubmit}>
        <p>Mật khẩu cũ * </p>
        <input type="text" name="oldpass" value={newPassword.oldpass} onChange={handleChange} />
        <p>Mật khẩu mới *</p>
        <input type="text" name="newpass" value={newPassword.newpass} autoComplete='new-password' onChange={handleChange} />
        <p>Xác nhận lại mật khẩu mới *</p>
        <input type="text" name="verifypass" value={newPassword.verifypass} autoComplete='new-password' onChange={handleChange} />
        <button className="update-password">Cập nhật</button>
      </form>
    </div>
  )
}
