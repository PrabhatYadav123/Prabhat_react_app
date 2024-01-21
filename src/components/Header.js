import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <img src={LOGO_URL} alt="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
