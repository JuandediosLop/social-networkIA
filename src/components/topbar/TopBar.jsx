import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material"; 

const TopBar = () => {
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="Logo">UVG+</span>
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
                    <span className="nameProfile">Nombre</span>
                    <img src="./img/person/1.jpeg" alt="" className="topbarImg"/>
                </div>
                
               
            </div>
            
        </div>
    )
}
export default TopBar;