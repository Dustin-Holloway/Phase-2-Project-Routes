import react from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/Form">
          <li>Form</li>
        </Link>
        <Link to="/Favorites">
          <li>Favorites</li>
        </Link>
      </ul>
    </div>
  );
}
export default Header;
