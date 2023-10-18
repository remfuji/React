import React, { useState, useEffect } from "react";

export default function PostList({ onPostClick }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
    }
    fetchData();
  }, []);

 

  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div>Post: {post.id}</div>
          <button onClick={() => onPostClick(post.id)}>Visualizza</button>
        </div>
      ))}
    </>
  );
}
