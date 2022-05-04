import React from "react";
import "./profile.css"
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
const Profile = () => {
    return(
        <>
            {/* <ContainerLogin /> */}
            <TopBar /> 
            
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="./assets/post/3.jpeg" className="profileCoverImg" alt="" />
                            <img src="./assets/person/7.jpeg" className="profileUserImg" alt="" />
                        </div>
                        
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileinfoName">Safak Kocaoglu</h4>
                        <span className="profileInfoDesc">Hello my friends</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                    
                </div>
              
            </div>
        </>
    )
}

export default Profile;