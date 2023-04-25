import react from "react";

export default function Favorites({ myParks }) {
  const favoriteParks = myParks.map((park) => (
    <div>
      <li key={park.id}>{park.name}</li>
      <span></span>
    </div>
  ));

  return (
    <div>
      <div className="list">
        <h1>Favorite Parks</h1>
        <ul>{favoriteParks}</ul>
      </div>
    </div>
  );
}
