import React from "react";

export default function Park({ park }) {
  console.log(park);

  const activities = park.activities.map((item) => item.name);
  console.log(activities);

  const filteredActivities = activities.slice(0, 4);
  const listItem = filteredActivities.map((item) => <li>{item}</li>);

  return (
    <div className="park-container">
      <h1>{park.fullName}</h1>
      <div className="img-container">
        <img src={park.images[2].url} />
      </div>
      <h3>Activities</h3>
      <ul className="activities">{listItem}</ul>
      <h3>Reviews</h3>
    </div>
  );
}
