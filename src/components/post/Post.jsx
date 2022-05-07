import React, { useState, useEffect, useContext } from "react";
import "./post.css";
import { MoreVert, ThumbUpAlt } from "@mui/icons-material";
import axios from "axios";
import {format} from "timeago.js"
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Post = ({post}) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false)
    const [color, setColor] = useState("")
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({})
    const {user:currentUser} = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data);
        }
       fetchUser();
    }, [post.userId]); 

    const likeHandler = () =>{
        try{
            axios.put('/posts/'+post._id+'/like', {userId: currentUser._id})
        }catch(err){
            console.log(err)
        }
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
        setColor(isLiked ? "" : "primary")
    }

    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}  >
                            <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png" } alt="postProfile" className="postProfileImg" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate"> {format(post.createdAt)}</span>
                        
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post.desc}
                    </span>
                    <img src={PF+post.img} alt="" className="postImg" />
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
