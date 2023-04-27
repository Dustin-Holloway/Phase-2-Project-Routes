import React from "react";

export default function Park({ park }) {
  console.log(park.entranceFees);

  const activities = park.activities.map((item) => item.name);

  const filteredActivities = activities.slice(0, 4);
  const listItem = filteredActivities.map((item) => <li>{item}</li>);
  // const admissionPrice = park.entranceFees.map((item) => item.entranceFees);
  // console.log(admissionPrice);
  return (
    <div className="park-container">
      <h1>{park.fullName}</h1>
      <div className="img-container">
        <img src={park.images[1].url} alt={park.name} />
        <a href={park.url}>visitors center</a>
      </div>
      <h3>Location</h3>
      <ul className="activities">
        <li>{park.states}</li>
      </ul>
      <h3>Activities</h3>
      <ul className="activities">{listItem}</ul>
      {/* <h3>Admission</h3> */}
      {/* <ul className="activities">
        <li>Per Person: {park.entranceFees[2].cost}</li>
        <li>Private Vehicle: {park.entranceFees[1].cost}</li>
        <li>Motorcycle: {park.entranceFees[0].cost}</li> */}
      {/* </ul> */}
    </div>
  );
}
