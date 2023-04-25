import react from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
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
        <Link to="/Favoties">
          <li>Favorites</li>
        </Link>
      </ul>
    </div>
  );
}
export default Header;
