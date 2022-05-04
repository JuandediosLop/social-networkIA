import React, { useState } from "react";
import "./post.css";
import { MoreVert, ThumbUpAlt } from "@mui/icons-material";
import { Users } from "../../dummyData"

const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [color, setColor] = useState("")

    const likeHandler = () =>{
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
        setColor(isLiked ? "" : "primary")
    }

    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u => u.id === post.userId)[0].profilePicture }alt="postProfile" className="postProfileImg" />
                        <span className="postUsername">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="postDate"> {post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post.desc}
                    </span>
                    <img src={post.photo} alt="PostImage" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpAlt onClick={likeHandler} className="likeIcon" color={color} />
                        <span className="postLikeCounter">A {like} personas les gusta</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} comentarios
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
