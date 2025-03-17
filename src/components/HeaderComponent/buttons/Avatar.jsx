import { useNavigate } from "react-router-dom"


export default function Avatar({ user }) {
    const nav = useNavigate();
    const handleClick = () => {
        nav(`/profile`)
    }
    return <button className="no-style" onClick={handleClick}><img src={user.avatar||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3ztWTGwSgvZJvsA49k950OqfYRhhssQqaw&s"} className="avatar"/></button>
}