import React, { useState } from "react";

export default function LikeDislike() {
  const [like, setLike] = useState(false);

  function handleLike() {
    return setLike(function (prevState) {
      return !prevState;
    });
  }

  return (
    <div>
      <button onClick={handleLike}>{like ? "❤️" : "🤍"}</button>
    </div>
  );
}
