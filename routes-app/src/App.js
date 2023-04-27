import "./App.css";
import Header from "./header.js";
import ParkForm from "./parkform";
import TripForm from "./tripform";
import { Switch, Route } from "react-router-dom";
import CardContainer from "./card_container";
import { useState, useEffect } from "react";
import Favorites from "./favorites";
import Landing from "./landing";

function App() {
  const apiKey = process.env.REACT_APP_Token;

  const [parks, setParks] = useState([]);
  const [myParks, setMyParks] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isliked, setLiked] = useState(true);

  const loadMoreResults = () => {
    const itemsPerPage = 25;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredByState.slice(indexOfFirstItem, indexOfLastItem);
  };

  const [userInfo, setUserInfo] = useState([
    { userName: "", userEmail: "", parksList: [] },
  ]);

  const parkObject = {
    name: "",
    state: "",
    activities: "",
  };

  useEffect(() => {
    fetch("http://localhost:4000/profile")
      .then((r) => r.json())
      .then((data) => setUserInfo(data));
  }, []);

  const updateUserInfo = (data) => {
    setUserInfo([...userInfo, data]);
  };
  const addNewUser = (formData) => {
    fetch("http://localhost:4000/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => updateUserInfo(data));
  };

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?limit=1000&api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setParks(data.data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/parks")
      .then((res) => res.json())
      .then((data) => setMyParks(data));
  }, []);

  function handleClick(park) {
    setLiked(!isliked);

    fetch("http://localhost:4000/parks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: park.name,
        activities: park.activities,
        state: park.states,
        images: park.images,
        liked: isliked,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!myParks.includes(data)) {
          setMyParks([...myParks, data]);
        } else return;
      });
  }

  const filteredByState = [...parks].filter((park) =>
    park.states.toLowerCase().includes(search.toLowerCase())
  );

  function handleOnSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/Gallery">
          <Header className="header" />

          <input
            onChange={(e) => setSearch(e.target.value)}
            className="search"
            type="text"
            placeholder="Filter by State..."
            name="search"
            value={search}
          ></input>
          <CardContainer
            parks={loadMoreResults()}
            handleClick={handleClick}
            loadMoreResults={loadMoreResults}
            currentPage={currentPage}
            setParks={setParks}
            setCurrentPage={setCurrentPage}
          />
        </Route>

        <Route path="/Favorites">
          <Header className="header" />

          <Favorites
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            addNewUser={addNewUser}
            myParks={myParks}
            setMyParks={setMyParks}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
