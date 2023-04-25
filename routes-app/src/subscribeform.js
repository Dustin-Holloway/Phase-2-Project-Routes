import react, { useState } from "react";

export default function SubscribeForm() {
  const [userEmail, setUserEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.userEmail.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Subscribe">Subscribe</label>
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          type="text"
          id="userEmail"
        />
        {/* <input></input>
        <input></input>
        <input></input> */}
      </form>
    </div>
  );
}
