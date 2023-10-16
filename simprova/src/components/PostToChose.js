import React, { useState, useEffect } from "react";

export default function Posts({ onPostClick }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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
