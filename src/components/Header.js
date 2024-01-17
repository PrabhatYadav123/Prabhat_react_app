import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="header">
      <img src={LOGO_URL} alt="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
