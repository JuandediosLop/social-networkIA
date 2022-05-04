import { Group, HelpOutline, RssFeed, School, WorkOutline, Event, PlayCircleFilledOutlined, Chat } from "@mui/icons-material";
import React from "react";
import "./sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";

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
                    {Users.map(user => (
                        <CloseFriend key={user.id} user={user} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;