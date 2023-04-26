import React, { useState } from "react";
import styled from "styled-components";

export default function ParkForm(userInfo, setUserInfo) {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [addReview, setAddReview] = useState("");
  const Button = styled.button
    `background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;`;

  function handleSubscribe(e) {
    e.preventDefault();
    console.log(e.target.userEmail.value);
    console.log(e.target.userName.value);
  }
  return (
    <div className="form-div">
      <h1>Subscribe for Updates</h1>
      <form onSubmit={handleSubscribe}>
        <label htmlFor="Subscribe">Your Name</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          id="userName"
        />
        <label htmlFor="Subscribe">Your Email</label>
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          type="text"
          id="userEmail"
        />
        <Button>Subscribe</Button>
        {/* 
        <input></input>
        <input></input> */}
      </form>
    </div>
  );
}
