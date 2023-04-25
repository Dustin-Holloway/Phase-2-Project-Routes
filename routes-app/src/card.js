import react from "react";
import "./App.css";

export default function Card({ park, handleClick }) {
  return (
    <div className="card" onClick={(e) => handleClick(park)}>
      <img src={park.images[0].url} />
      <h3 className="name">{park.name}</h3>
    </div>
  );
}
