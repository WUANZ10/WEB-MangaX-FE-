import React, { useState } from 'react'

export default function Email() {
  const [password,setPassword]=useState({
    mail:'',
    password:'',
    verifycode:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
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
        <p>Email</p>
        <input type="text" name="mail" value={password.mail} onChange={handleChange} />
        <p>Xác nhận mật khẩu </p>
        <input type="text" name="password" value={password.password} onChange={handleChange} />
        <p>Mã xác nhận</p>
        <input type="text" name="verifycode" value={password.verifycode} onChange={handleChange} />
        <button className="update-mail">Cập nhật</button>
      </form>
    </div>
  )
}
