import react from "react";
import Card from "./card";
import "./App.css";
import { useEffect, useState } from "react";

export default function CardContainer({
  parks,
  handleClick,
  loadMoreResults,
  setCurrentPage,
  currentPage,
  setParks,
}) {
  const park = parks.map((parkObj) => (
    <Card key={parkObj.id} park={parkObj} handleClick={handleClick} />
  ));

  return <div className="card-container">{park}</div>;
}
