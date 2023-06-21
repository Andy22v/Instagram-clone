import { useState } from "react";
import "./Post.css";
import LikePost from "../icons/LikePost";
import Comment from "../icons/Comment";
import SendPhoto from "../icons/SendPhoto";
import SavePost from "../icons/SavePost";

const Post = ({ post }) => {
  const { isLike } = post;
  const [like, setLike] = useState(isLike);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div className="Post">
      <div className="post-user">
        <div className="post-img">
          <img src={post.userImage} alt={post.userName} />
        </div>
        <div className="post-info">
          <p className="post-username">{post?.userName}</p>
          <p className="post-location">{post?.location}</p>
        </div>
      </div>
      <div className="post-media">
        {post?.media?.map((media) => (
          <img src={media?.src} alt="" key={media?.id} />
        ))}
      </div>
      <div className="reactions-contain">
        <div className="post-reactions">
          <div onClick={() => toggleLike()} className="post-like">
            <LikePost fill={like && like ? "#FD1D1D" : "#262626"} />
          </div>
          <div className="post-comment">
            <Comment />
          </div>
          <div className="send-post">
            <SendPhoto />
          </div>
        </div>
        <div className="save-post">
          <SavePost />
        </div>
      </div>
    </div>
  );
};

export default Post;
