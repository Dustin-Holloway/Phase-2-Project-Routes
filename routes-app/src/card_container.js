import react from "react";
import Card from "./card";
import "./App.css";
import { useEffect } from "react";

export default function CardContainer({
  parks,
  handleClick,
  loadMoreResults,
  setCurrentPage,
  currentPage,
  setParks,
}) {
  // function handleScroll() {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   )
  //     return;
  //   setCurrentPage(currentPage + 1);
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   const newResults = loadMoreResults();
  //   if (newResults.length > 0) {
  //     setParks([...parks, ...newResults]);
  //   }
  // }, [currentPage]);

  const park = parks.map((parkObj) => (
    <Card key={parkObj.id} park={parkObj} handleClick={handleClick} />
  ));

  return <div className="card-container">{park}</div>;
}
