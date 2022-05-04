import React from "react";
import "./closeFriend.css";

const CloseFriend = ({user}) => {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="friend" className="sidebarFriendImg" />
            <span className="sibedarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend;