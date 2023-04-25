import "./App.css";
import Header from "./header.js";
import SubscribeForm from "./subscribeform";
import TripForm from "./tripform";
import { Switch, Route } from "react-router-dom";
import CardContainer from "./card_container";
import { useState, useEffect } from "react";
// import Favorites from "./components/favorites";

function App() {
  const apiKey = process.env.REACT_APP_Token;

  const [parks, setParks] = useState([]);
  const [myParks, setMyParks] = useState([]);

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?park&api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setParks(data.data));
  }, []);

  function handleClick(park) {
    console.log("clicked");

    if (!myParks.includes(park)) {
      setMyParks([...myParks, park]);
    } else {
      alert("It's already on your list");
    }

    addToList(park);
  }

  function addToList(park) {
    console.log(park);
    fetch("http://localhost:3000/Suggestions", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ name: park.name }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <Header className="header" />

      <Switch>
        <Route exact path="/">
          <h1>Routes on Routes</h1>
          <h3>Cahen, Dominick, Dustin</h3>
        </Route>
        <Route path="/Gallery">
          <input
            className="search"
            type="text"
            placeholder="search by state..."
          ></input>
          <button className="search_btn"> Search </button>
          <CardContainer parks={parks} handleClick={handleClick} />
        </Route>
        <Route exact path="/Form">
          <SubscribeForm />
          <TripForm />
        </Route>
        <Route path="/Favorites">{/* <Favorites myParks={myParks} /> */}</Route>
      </Switch>
    </div>
  );
}

export default App;
