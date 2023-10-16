import React, { useState, useEffect } from "react";

export default function Content({ postId }) {
  const [postDetails, setPostDetails] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPostDetails() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post details');
        }
        const data = await response.json();
        setPostDetails(data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    }

    async function fetchComments() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }

    if (postId) {
      fetchPostDetails();
      fetchComments();
    }
  }, [postId]);

  return (
    <>
      {postDetails ? (
        <div>
          <h2>Dettagli del post: {postDetails.id}</h2>
          <div>Title: {postDetails.title}</div>
          <div>Body: {postDetails.body}</div>

          <h3>Commenti:</h3>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.email}</strong><br/><strong>Dice:</strong> {comment.body}
                </li>
              ))}
            </ul>
          ) : (
            <div>Nessun commento disponibile.</div>
          )}
        </div>
      ) : (
        <div>Seleziona un post per visualizzare i dettagli e i commenti.</div>
      )}
    </>
  );
}

