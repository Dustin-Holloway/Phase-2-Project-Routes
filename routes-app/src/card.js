import react from "react";
import "./App.css";
import { useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

export default function Card({ park, handleClick }) {
  const [liked, setLiked] = useState(true);

  return (
    <div className="card">
      <span className="heart" onClick={(e) => setLiked(!liked)}>
        {liked ? <IoHeartOutline /> : <IoHeart />}
      </span>
      <img src={park.images[0].url} onClick={(e) => handleClick(park)} />
    </div>
  );
}
