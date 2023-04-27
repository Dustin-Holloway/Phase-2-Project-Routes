import react from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-container">
      <Link to="/gallery">
        <div className="image-container">
          <h1 className="trip">Let's plan a roadtrip!</h1>

          <img
            className="landing-image"
            src="https://cdn.shopify.com/s/files/1/0216/7573/7188/products/nationalpark-u_1800x1800.png?v=1677435572"
          />
        </div>
      </Link>
    </div>
  );
}
