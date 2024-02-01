import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(UserContext);
  return (
    <div className="flex justify-between border border-black bg-slate-300 m-2 p-1 shadow-md box-border rounded-md hover:bg-green-200">
      <img src={LOGO_URL} alt="logo" className="w-24 mix-blend-multiply" />

      <div className="flex items-center text-white hover:text-black font-bold ">
        <ul className="flex m-2 p-2">
          <li className="px-1">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-1">
            <Link to="/">Home</Link>
          </li>

          <li className="px-1">
            <Link to="/about">About</Link>
          </li>

          <li className="px-1">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-1">Cart</li>
          <button
            className="login"
            onClick={() =>
              login === "Login" ? setLogin("Logout") : setLogin("Login")
            }
          >
            {login}
          </button>
          <li className="px-1">
            <Link to="/contact">{userName}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
