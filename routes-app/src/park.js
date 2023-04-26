import React from "react";

export default function Park({ park }) {
  const parkObj = park[0];
  console.log(parkObj);

  const activities = parkObj.activities.map((item) => item);
  console.log(activities);
  const filteredActivities = activities.slice(0, 4);
  const listItem = filteredActivities.map((item) => <li>{item.name}</li>);

  return (
    <div className="park-container">
      <h1>{parkObj.fullName}</h1>
      <div className="img-container">
        <img src={parkObj.images[2].url} />
      </div>
      <h3>Activities</h3>
      <ul className="activities">{listItem}</ul>
      <h2>Reviews</h2>
    </div>
  );
}
