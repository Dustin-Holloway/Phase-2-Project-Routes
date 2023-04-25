import react from "react";
import Card from "./card";
import "./App.css";

export default function CardContainer({ parks, handleClick }) {
  const park = parks.map((parkObj) => (
    <Card key={parkObj.id} park={parkObj} handleClick={handleClick} />
  ));

  return <div className="card-container">{park}</div>;
}
