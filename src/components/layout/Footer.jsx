import classes from "./Footer.module.css";
import logo from "./logocrop.png";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = (props) => {
  const d = new Date();
  const n = d.getFullYear();
  return (
    <footer className={classes.footer} id={props.id}>
      <div className={classes.main}>
        <div>
          <div className={classes.footergroup}>
            <h3>Email</h3>
            <p>
              <a href="mailto:visiongeeky@gmail.com">visiongeeky@gmail.com</a>
            </p>
          </div>
          <div className={classes.footergroup}>
            <h3>Address</h3>
            <p>Surat, Gujarat | Patna, Bihar</p>
          </div>
          <div className={classes.footergroup}>
            <h3>Contact</h3>
            <p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://wa.me/+916203059082"
              >
                +91 62030 59082
              </a>
              |
              <a
                rel="noreferrer"
                target="_blank"
                href="https://wa.me/+918460149270"
              >
                +91 84601 49270
              </a>
            </p>
          </div>
          <div className={`${classes.footergroup} ${classes.socials}`}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/geekyvision"
            >
              <FaGithub className={classes.icon} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/geekyvision/"
            >
              <FaInstagram className={classes.icon} />
            </a>
          </div>
        </div>
        <div className={classes.secondary}>
          <img className={classes.logo} src={logo} alt="Geeky Vision" />
        </div>
      </div>
      <div className={classes.disclaimer}>
        <p>&copy; {n} | Developed & Maintained by Geeky Vision</p>
      </div>
    </footer>
  );
};
export default Footer;
