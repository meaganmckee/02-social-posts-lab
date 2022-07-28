import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [thoughtPosts, setThoughtPosts] = useState<Post[]>([
    { title: "Grand Circus", thought: "Grand Circus is cool." },
    { title: "React", thought: "React give me power!" },
    { title: "Beatrice", thought: "Beatrice is great" },
  ]);

  const deleteAPost = (index: number): void => {
    setThoughtPosts((prev) => {
      const newPosts: Post[] = prev.slice(0);
      newPosts.splice(index, 1);
      return newPosts;
    });
  };

  const addAPost = (post: Post): void => {
    setThoughtPosts((prev) => {
      const newPosts: Post[] = prev.slice(0);
      newPosts.unshift(post);
      return newPosts;
    });
  };

  return (
    <main className="SocialPosts">
      <PostForm onAdd={addAPost} />
      <ul>
        {thoughtPosts.map((post, index) => (
          <PostInList post={post} onDelete={() => deleteAPost(index)} />
        ))}
      </ul>
    </main>
  );
};

export default SocialPosts;
