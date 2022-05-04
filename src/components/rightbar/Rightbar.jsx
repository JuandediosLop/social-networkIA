import React from "react";
import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";

const Rightbar = ({profile}) => {

    const HomeRightBar = () => {
        return (
            <>
            <div className="birthdayContainer">
                    <img src="./assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"> <b >Random 1</b> y otros 3 amigos cumplen años hoy</span>
                </div>
                <img src="./assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Amigos en linea</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u =>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }
    const ProfileRightBar = () => {
        return(
            <>
                <h4 className="rightbarTitle">User Infomation</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Guatemala</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Escuintla</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="./assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="./assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="./assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="./assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="./assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="./assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
            )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightBar />
            </div>
        </div>
    )
}

export default Rightbar;