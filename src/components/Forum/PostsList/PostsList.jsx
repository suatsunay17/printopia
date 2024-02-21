import PostCard from "../PostCard/PostCard";
import "./PostsList.scss";

const PostsList = ({posts}) => {
  return (
    <div className="forum-posts">
      <h2>Forum Posts</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostsList;
