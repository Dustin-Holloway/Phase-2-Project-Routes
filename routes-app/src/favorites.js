import react from "react";
import Park from "./park";
import { useState } from "react";
import TripForm from "./tripform";
import ParkForm from "./parkform";

export default function Favorites({ myParks, renderPark, userInfo, setUserInfo }) {
  const [showPark, setShowPark] = useState(false);

  function renderPark(e) {
    console.log("park name:", { myParks });
    setShowPark(!showPark);
  }

  const favoriteParks = myParks.map((park) => (
    <div>
      <li key={park.id} onClick={renderPark}>
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
      {showPark ? <Park park={myParks} key={myParks.id} /> : null}
      <div className="">
        <TripForm />
        <ParkForm userInfo={userInfo} setUserInfo={setUserInfo} />
      </div>
    </div>
  );
}
