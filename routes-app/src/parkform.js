import React, { useState } from "react";
import styled from "styled-components";

export default function ParkForm() {
  const [userEmail, setUserEmail] = useState("");
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
  }
  return (
    <div className="form-div">
      <form onSubmit={handleSubscribe}>
        <label htmlFor="Subscribe">Subscribe</label>
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          type="text"
          id="userEmail"/>
        <Button>Subscribe</Button>
        {/* 
        <input></input>
        <input></input> */}
      </form>
    </div>
  );
}
