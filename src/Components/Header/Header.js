import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" />
        <h1>Tour Manager</h1>
        <ul>
          <li>Home</li>
          <li>Tourist places</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <input type="text" placeholder="Search a place" />
      </nav>
    </div>
  );
};

export default Header;
