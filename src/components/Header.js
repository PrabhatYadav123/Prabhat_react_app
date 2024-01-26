import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <img src={LOGO_URL} alt="logo" />
      <div className="nav-items">
        <ul>
          <li>Online Statue {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              login === "Login" ? setLogin("Logout") : setLogin("Login")
            }
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
