import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  onDelete: () => void;
}

const PostInList = ({ post, onDelete }: Props) => {
  return (
    <li className="PostInList">
      <p className="title">{post.title}</p>
      <p className="thought">{post.thought}</p>
      <button className="close-btn" onClick={() => onDelete()}>
        X
      </button>
    </li>
  );
};

export default PostInList;
