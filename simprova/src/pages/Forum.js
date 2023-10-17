import React, { useState } from "react";
import Posts from "../components/Postlist";
import Content from "../components/Content";
import "../App.css";

function Forum() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="App">
      <h1>Forum</h1>
      <div className="container">
        <div className="comp1">
          <Posts onPostClick={handlePostClick} />
        </div>
        <div className="comp2">
          {selectedPostId && <Content postId={selectedPostId} />}
        </div>
      </div>
    </div>
  );
}

export default Forum;
