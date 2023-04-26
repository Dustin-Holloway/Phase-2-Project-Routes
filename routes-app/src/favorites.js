import react from "react";
import Park from "./park";
import { useState } from "react";

export default function Favorites({ myParks }) {
  const [showPark, setShowPark] = useState(false);
  const [renderedPark, setRenderedPark] = useState("");

  function renderPark(park) {
    setRenderedPark(park);

    setShowPark(showPark);
  }

  const favoriteParks = myParks.map((park) => (
    <div>
      <li key={park.id} onClick={(e) => renderPark(park)}>
        {park.name}
      </li>
      <span></span>
    </div>
  ));

  return (
    <div className="">
      <div className="list">
        <h1>Favorite Parks</h1>
        <ul>{favoriteParks}</ul>
      </div>
      {showPark ? <Park park={renderedPark} /> : null}
    </div>
  );
}
