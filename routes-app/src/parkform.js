import React, { useState } from "react";
import { ButtonMod } from "./styles/button.styles";


export default function ParkForm({userInfo, setUserInfo, addNewUser, formData, setFormData}) {
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const [addReview, setAddReview] = useState("");

 
  const handleSubscribe = (e) => {
    e.preventDefault();
    addNewUser(formData)
  }

  const handleAddToTrip = (e) => {
    e.preventDefault();

  }

  const [isClicked, setIsClicked] = useState(true)
  const handleIsClicked = () => {
    setIsClicked(!isClicked)
  }


  return (
    <div className="form-div">
      <h1>Subscribe for Updates</h1>
      <form onSubmit={handleSubscribe}>
        <label htmlFor="Subscribe">Your Name</label>
        <input
          onChange={handleChange}
          value={formData.userName}
          type="text"
          id="userName"
          name="userName"
        />
        <label htmlFor="Subscribe">Your Email</label>
        <input
          onChange={handleChange}
          value={formData.userEmail}
          type="text"
          id="userEmail"
          name="userEmail"
        />
        <ButtonMod>Subscribe</ButtonMod>
        <h2>Add Park to Trip</h2>
        <form onSubmit={handleAddToTrip} />
        <input 
          onChange={handleIsClicked}
          value={!isClicked}
          type="checkbox"
          className="checkbox"
          />
       
      </form>
    </div>
  );
}
