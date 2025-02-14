import React, { useState } from 'react'

export default function UserPassword() {
  const [password,setPassword]=useState({
    oldpass:'',
    newpass:'',
    verifypass:''
  })

  const handleChange=(e)=>{
    const [name,value]=e.target
    setPassword((data)=>({
      ...data,
      [name]:value
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <div className='password-container'>
      <form onSubmit={handleSubmit}>
        <p>Mật khẩu cũ</p>
        <input type="text" name="oldpass" value={password.oldpass} onChange={handleChange} />
        <p>Mật khẩu mới</p>
        <input type="text" name="newpass" value={password.newpass} onChange={handleChange} />
        <p>Xác nhận lại mật khẩu mới</p>
        <input type="text" name="verifynewpass" value={password.verifypass} onChange={handleChange} />
      </form>
    </div>
  )
}
