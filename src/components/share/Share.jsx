import React from "react";
import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"

const Share = () => {
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="./img/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input type="text" placeholder="¿Qué tienes en mente Nombre?" className="shareInput"/>
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">

                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Foto o Video</span>
                        </div>

                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Ubicación</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Sentimiento/actividad</span>
                        </div>
                    </div>

                    <button className="shareButton">Compartir</button>

                </div>
            </div>
        </div>
    )
}

export default Share;