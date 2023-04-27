import react from "react";
import Park from "./park";
import { useState } from "react";
import TripForm from "./tripform";
import ParkForm from "./parkform";

<<<<<<< HEAD
export default function Favorites({ myParks, renderPark, userInfo, setUserInfo, addNewUser }) {
=======

export default function Favorites({ myParks, renderPark, userInfo, setUserInfo }) {

>>>>>>> 2ba80cbbc7d2c4f39132b30ba6a43e3829e3e739
  const [showPark, setShowPark] = useState(false);
  const [renderedPark, setRenderedPark] = useState("");

  function renderPark(park) {
    setRenderedPark(park);
    if (!showPark) {
      setShowPark(!showPark);
    }
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

      <div className="">
        <TripForm />
        <ParkForm addNewUser={addNewUser} userInfo={userInfo} setUserInfo={setUserInfo} />
      </div>
    </div>
  );
}
