import React, { useState } from "react";

const LikeDislike = () => {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);

  const handleLikes = (e) => {
    e.preventDefault();
    setLike(like++);
  };

  const handleDislikes = (e) => {
    e.preventDefault();
    setDislike(dislike++);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-3">
      <button onClick={handleLikes}>Like</button>
      <button onClick={handleDislikes}>Dislike</button>
      <p>Likes: {like}</p>
      <p>Dislikes: {dislike}</p>
    </div>
  );
};

export default LikeDislike;
