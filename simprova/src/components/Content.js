import React, { useState, useEffect } from "react";

export default function Content({ postId }) {
  const [postDetails, setPostDetails] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPostDetails() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();
      setPostDetails(data);
    }

    async function fetchComments() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      const data = await response.json();
      setComments(data);
    }

    if (postId) {
      fetchPostDetails();
      fetchComments();
    }
  }, [postId]);

  return (
    <>
      <h2>Dettagli del post: {postDetails.id}</h2>
      <div>Title: {postDetails.title}</div>
      <div>Body: {postDetails.body}</div>
      <h3>Commenti:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.email}</strong><br /><strong>Dice:</strong> {comment.body}
          </li>
        ))}
      </ul>
    </>
  );
}

