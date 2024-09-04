import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/react-simple/">Home</NavLink>
      <NavLink to="/react-simple/users">Users</NavLink>
      <NavLink to="/react-simple/about">About</NavLink>
      <NavLink to="/react-simple/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
