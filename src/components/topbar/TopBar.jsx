import React, { useContext } from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material"; 
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const TopBar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user } = useContext(AuthContext)
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="Logo">UVG+</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input className="searchInput" type="text" placeholder="Buscar amigos, publicaciones o videos" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarLink">Inicio</span>
                    <span className="topbarLink">Grupos</span>
                </div>
                <div className="topbarIcons">
                    
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarProfile">
                    
                    <h3 className="nameProfile">{user.username}</h3>
                    <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg"/>
                    </Link>
                </div>
                
               
            </div>
            
        </div>
    )
}
export default TopBar;