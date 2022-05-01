import { Bookmark, Group, HelpOutline, RssFeed, School, WorkOutline, Event, PlayCircleFilledOutlined, Chat } from "@mui/icons-material";
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Grupos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">BookMarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Preguntas</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Trabajos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Eventos</span>
                    </li>
                    <li className="sidebarListItem">
                        < School className="sidebarIcon" />
                        <span className="sidebarListItemText">Cursos</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="https://picsum.photos/id/236/200/200" alt="friend" className="sidebarFriendImg" />
                        <span className="sibedarFriendName">Oscar Martinez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://picsum.photos/id/237/200/200" alt="friend" className="sidebarFriendImg" />
                        <span className="sibedarFriendName">Ardany Palencia</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://picsum.photos/id/238/200/200" alt="friend" className="sidebarFriendImg" />
                        <span className="sibedarFriendName">Arale Zumeta</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://picsum.photos/id/239/200/200" alt="friend" className="sidebarFriendImg" />
                        <span className="sibedarFriendName">Erik Chavez</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://picsum.photos/id/240/200/200" alt="friend" className="sidebarFriendImg" />
                        <span className="sibedarFriendName">Obed Castro</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://picsum.photos/id/241/200/200" alt="friend" className="sidebarFriendImg" />
                        <span className="sibedarFriendName">Andres Valenzuela</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://picsum.photos/id/242/200/200" alt="friend" className="sidebarFriendImg" />
                        <span className="sibedarFriendName">Dayani Xam</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://picsum.photos/id/243/200/200" alt="friend" className="sidebarFriendImg" />
                        <span className="sibedarFriendName">Hesler Lopez</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;