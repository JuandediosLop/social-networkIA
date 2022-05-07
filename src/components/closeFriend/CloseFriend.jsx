import React from "react";
import "./closeFriend.css";

const CloseFriend = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            <img src={PF+user.profilePicture} alt="friend" className="sidebarFriendImg" />
            <span className="sibedarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriend;