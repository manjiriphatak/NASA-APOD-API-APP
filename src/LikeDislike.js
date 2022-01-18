import React, { useState } from "react";
import "./App.css";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function LikeDislike() {
  const [like, setLike] = useState(false);

  function handleLike() {
    return setLike(function (prevState) {
      return !prevState;
    });
  }

  return (
    <div>
      <button className="likeButton" onClick={handleLike}>
        {like ? <FaHeart color="red" /> : <FaRegHeart color="grey" />}
      </button>
    </div>
  );
}
