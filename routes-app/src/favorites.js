import react from "react";
import Park from "./park";
import { useState } from "react";
import TripForm from "./tripform";
import ParkForm from "./parkform";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default function Favorites({
  myParks,
  renderPark,
  userInfo,
  setUserInfo,
  addNewUser,
  handleDelete,
  showPark,
  setShowPark,
  formData,
  setFormData,
}) {
  const [renderedPark, setRenderedPark] = useState("");

  function renderPark(park) {
    setRenderedPark(park);
    if (showPark) {
      setShowPark(!showPark);
    } else {
      setShowPark(!showPark);
    }
  }

  const favoriteParks = myParks.map((park) => {
    const parkName = park.name.replace(/\s/g, "");
    return (
      <li key={park.id} onClick={(e) => renderPark(park)}>
        <Link className="links" to={`/Favorites/${parkName}`}>
          {park.name}
        </Link>
        <button onClick={(e) => handleDelete(park)}>Remove</button>
      </li>
    );
  });

  return (
    <div className="">
      <Switch>
        <Route path={favoriteParks.name}>
          <div className="list">
            <h1>Favorite Parks</h1>
            <ul>{favoriteParks}</ul>
          </div>
          {showPark ? <Park park={renderedPark} /> : null}
        </Route>
      </Switch>

      <div className="">
        {/* <TripForm /> */}
        <ParkForm
          addNewUser={addNewUser}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}
