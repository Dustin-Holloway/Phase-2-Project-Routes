import react from "react";
import "./App.css";
import { useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

export default function Card({ park, handleClick, postPark }) {
  const [liked, setLiked] = useState(true);

  function handleLiked(park) {
    setLiked(!liked);
    handleClick(park);
  }

  return (
    <div className="card">
      <span className="heart" onClick={(e) => handleLiked(park)}>
        {liked ? <IoHeartOutline /> : <IoHeart />}
      </span>
      <img src={park.images[0].url} />
      <h4 className="park-name">{park.name}</h4>
    </div>
  );
}
