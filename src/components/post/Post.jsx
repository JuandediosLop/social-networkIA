import React from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";

const Post = () => {
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="https://i.picsum.photos/id/782/200/200.jpg?hmac=Nr26GoCvc_dj_OlbYWA8FscuVWhRo7Qa-f4z6gfbSOU" alt="postProfile" className="postProfileImg" />
                        <span className="postUsername">Nombre apellido</span>
                        <span className="postDate"> 5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hola este es mi primer Post en UVG+!!!
                    </span>
                    <img src="./img/post/10.jpeg" alt="PostImage" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="./img/like.png" alt="" />
                        <img className="likeIcon" src="./img/heart.png" alt="" />
                        <span className="postLikeCounter">A 32 personas les gusta</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            9 comentarios
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
