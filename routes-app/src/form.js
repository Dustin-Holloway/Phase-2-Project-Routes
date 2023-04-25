import react from "react";
import "./App.css";

export default function Form() {
  return (
    <div>
      <form className="form-div">
        <input type="text" placeholder="Park..."></input>
        <input type="text" placeholder="State..."></input>
        <input type="text"></input>
        <textarea></textarea>
      </form>
    </div>
  );
}
