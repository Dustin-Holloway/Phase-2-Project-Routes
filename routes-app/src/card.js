import react from "react";
import "./App.css";

export default function Card({ park }) {
  console.log(park.images[0].url);
  return (
    <div className="card">
      <img src={park.images[0].url} />
      <h3>{park.name}</h3>
    </div>
  );
}
