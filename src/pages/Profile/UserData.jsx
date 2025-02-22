import React, { useState } from 'react'

export default function UserData() {
    const [userData, setUserData] = useState({
        avt: '',
        name: '',
        introduce: ''
    })
    return (
        <div>UserData</div>
    )
}
