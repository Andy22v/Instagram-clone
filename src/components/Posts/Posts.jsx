import "./Posts.css";
import Post from "../Post";

const Posts = ({ posts }) => {
  return (
    <div className="Posts">
      <ul className="posts-list">
        {posts?.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
