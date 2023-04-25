import react from "react";
import Card from "./card";
import "./App.css";

export default function CardContainer({ parks }) {
  console.log(parks);

  const park = parks.map((parkObj) => <Card park={parkObj} />);

  return <div className="card-container">{park}</div>;
}
