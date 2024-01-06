import "./navbar.css";
import { Logo } from "../../assets/img";
import {navpaths} from '../../data'
// import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container navContainer">
        <a href="/" className="logo">
          <img src={Logo} alt="" />
        </a>

        <ul>
          {
            navpaths.map(({name, path}, id) => {
              return(
                <a href={path} key={id} >{name}</a>
              )
            })
          } 
        </ul>

        <a href="/" className="btn">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
