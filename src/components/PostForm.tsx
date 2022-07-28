import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onAdd: (post: Post) => void;
}

const PostForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onAdd({ title, thought });
  };

  return (
    <form className="PostForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="thought">Thought</label>
      <input
        type="text"
        name="thought"
        id="thought"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default PostForm;
