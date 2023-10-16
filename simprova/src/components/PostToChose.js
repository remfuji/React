import React, { useState, useEffect } from "react";

export default function Posts({ onPostClick }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
    }
    fetchData();
  }, []);

  const handlePostClick = (postId) => {
    onPostClick(postId);
  };

  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div>Post: {post.id}</div>
          <button onClick={() => handlePostClick(post.id)}>Visualizza</button>
        </div>
      ))}
    </>
  );
}
