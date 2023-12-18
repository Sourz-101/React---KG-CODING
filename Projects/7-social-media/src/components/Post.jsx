import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import {PostList} from "../store/post-list-store";

const Post = ({ post }) => {

  const {deletePost} = useContext(PostList);


  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
          <AiOutlineDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary me-2">{tag}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been seen by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
