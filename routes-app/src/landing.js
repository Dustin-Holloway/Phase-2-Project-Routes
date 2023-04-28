import react from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-container">
      {/* <h3 href="href="https://www.etsy.com/listing/480697697/national-parks-usa-push-pin-map-national?click_key=555db37ef6711ced1d49dfd41e905a462bf21f3e%3A480697697&click_sum=e608a00f&external=1&rec_type=ss&ref=pla_similar_listing_top-1&pro=1&frs=1&sts=1" ">copyright</h3> */}

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
