import React, { useEffect, useState, useContext } from "react";
// import Online from "../online/Online";
import "./rightbar.css";
// import { Users } from "../../dummyData";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

const Rightbar = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const {user:currentUser, dispatch} = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data);
            } catch (error) {
                console.log(error);
            }
        }
        getFriends();
    }, [user]);

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put("/users/" + user._id+"/unfollow", { userId: currentUser._id });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await axios.put("/users/" + user._id+"/follow", { userId: currentUser._id });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
        }catch(err){
            console.log(err)
        }
        setFollowed(!followed)
        
    }
    const HomeRightBar = () => {
        return (
            <>
            <div className="birthdayContainer">
                    <img src={PF+"gift.png"} alt="" className="birthdayImg" />
                    <span className="birthdayText"> <b >No Hay</b> cumpleañeros</span>
                </div>
                <img src={PF+"ad.png"}  alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Amigos en linea</h4>
                <ul className="rightbarFriendList">
                    {/* {Users.map(u =>(
                        <Online key={u.id} user={u} />
                    ))} */}
                </ul>
            </>
        )
    }
    const ProfileRightBar = () => {
        return(
            <>
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "Dejar de seguir" : "Seguir"}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                <h4 className="rightbarTitle">User Infomation</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ?  "Married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    {friends.map((friend) => (
                        <Link to={"/profile/"+ friend.username} style={{textDecoration:"none", textAlign:"center", color:"#000"}}>
                            <div className="rightbarFollowing">
                                <img src={friend.profilePicture ? PF + friend.profilePicture :  PF+"person/noAvatar.png" } alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ) )}
                    
                    
                </div>
            </>
            )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
            {user ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}

export default Rightbar;