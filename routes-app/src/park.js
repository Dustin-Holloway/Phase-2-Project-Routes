import React from "react";

export default function Park({ park }) {
  const activities = park.activities.map((item) => item.name);

  const filteredActivities = activities.slice(0, 4);
  const listItem = filteredActivities.map((item) => <li>{item}</li>);

  return (
    <div className="park-container">
      <h1>{park.name}</h1>
      <div className="img-container">
        <img src={park.images[1].url} alt={park.name} />
        <a href={park.url}>visitors center</a>
      </div>
      <h3>Location</h3>
      <ul className="activities">
        <li>{park.state}</li>
      </ul>
      <h3>Activities</h3>
      <ul className="activities">{listItem}</ul>
    </div>
  );
}
