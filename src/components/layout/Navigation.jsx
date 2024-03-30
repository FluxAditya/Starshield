import { useState } from "react";
import classes from "./Navigation.module.css";
import { HiMenu, HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { TiPhoneOutline } from "react-icons/ti";

const Navigation = (props) => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav((prev) => !prev);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        {!nav && <HiMenu onClick={navHandler} />}
        {nav && <GrFormClose onClick={navHandler} />}
      </div>
      {!nav && (
        <div className={`${classes.logo} ${!nav ? classes.logoanimate : ""}`}>
          Geeky Vision
        </div>
      )}
      {nav && (
        <ul
          className={`${nav ? classes.navanimate : ""} ${classes.navigation}  `}
        >
          <a href="/#home">
            <li className={classes.listitem}>Home</li>
          </a>
          <a href="/#about">
            <li className={classes.listitem}>About</li>{" "}
          </a>
          <a href="/#portfolio">
            <li className={classes.listitem}>Portfolio</li>{" "}
          </a>
          <a href="/#contact">
            <li className={classes.listitem}>Contact</li>{" "}
          </a>
        </ul>
      )}
      <div className={classes.socials}>
        <a rel="noreferrer" target="_blank" href="https://wa.me/+918460149270">
          <TiPhoneOutline />
        </a>
        <a rel="noreferrer" target="_blank" href="mailto:visiongeeky@gmail.com">
          <HiOutlineMail />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/geekyvision/"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
