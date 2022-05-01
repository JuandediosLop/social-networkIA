import React from "react";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

const Home = () => {
    return (
        <>
            {/* <ContainerLogin /> */}
            <TopBar /> 
            
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar/>
            </div>
        </>
    )
}

export default Home;