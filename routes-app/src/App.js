import "./App.css";
import Header from "./header.js";
import SubscribeForm from "./subscribeform";
import TripForm from "./tripform";
import { Switch, Route } from "react-router-dom";
import CardContainer from "./card_container";
import { useState, useEffect } from "react";
import Favorites from "./favorites";

function App() {
  const apiKey = process.env.REACT_APP_Token;

  const [parks, setParks] = useState([]);
  const [myParks, setMyParks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?park&api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setParks(data.data));
  }, []);

  function handleClick(park) {
    console.log(park);
    if (!myParks.includes(park)) {
      console.log("HEY");
      return setMyParks([...myParks, park]);
    } else {
      alert("It's already on your list");
    }
    // fetch("http://localhost:4000/posts", {
    //   method: "POST",
    //   headers: { "Content-type": "Application/json" },
    //   body: JSON.stringify({ name: park.name }),
    // })
    //   .then((res) => res.json())
    //   .then((park) => addToList(park));
  }

  function addToList(park) {
    if (!myParks.includes(park)) {
      console.log("HEY");
      return setMyParks([...myParks, park]);
    } else {
      alert("It's already on your list");
    }
  }

  const filteredByState = parks.filter((park) =>
    park.states.toLowerCase().includes(search.toLowerCase())
  );

  function handleOnSearch(e) {
    setSearch(search);
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
            onChange={(e) => setSearch(e.target.value)}
            className="search"
            type="text"
            placeholder="Filter by State..."
            name="search"
            value={search}
          ></input>
          {/* <button className="search-btn" onClick={(e) => handleOnSearch(e)}>
            Search
          </button> */}
          <CardContainer parks={filteredByState} handleClick={handleClick} />
        </Route>
        <Route exact path="/Form">
          <SubscribeForm />
          <TripForm />
        </Route>
        <Route path="/Favorites">
          <Favorites myParks={myParks} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
