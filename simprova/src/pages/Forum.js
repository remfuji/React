import React, { useState } from "react";
import "../App.css";
import PostList from "../components/Postlist";
import Showpost from "../components/Showpost";

function Forum() {
  const [selectedPostId, setSelectedPostId] = useState(null);

 

  return (
    <div className="App">
      <h1>Forum</h1>
      <div className="container">
        <div className="comp1">
          <PostList onPostClick={setSelectedPostId} />
        </div>
        <div className="comp2">
           <Showpost postId={selectedPostId} />
        </div>
      </div>
    </div>
  );
}

export default Forum;
