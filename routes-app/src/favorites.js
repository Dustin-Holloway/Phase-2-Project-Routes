import react from "react";

export default function Favorites({ myParks }) {
  console.log(myParks);

  const favoriteParks = myParks.map((park) => (
    <div>
      {" "}
      <li key={park.id}>{park.name}</li>
      <span></span>
    </div>
  ));

  return (
    <div>
      <div>
        <ul className="list">{favoriteParks}</ul>
      </div>
    </div>
  );
}
