import classes from "./TeamMember.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const TeamMember = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.socials}>
        <a rel="noreferrer" target="_blank" href={props.instagram}>
          <FaInstagram />
        </a>
        <a rel="noreferrer" target="_blank" href={props.facebook}>
          {" "}
          <FaFacebookF />
        </a>
        <a rel="noreferrer" target="_blank" href={props.linkedin}>
          {" "}
          <FaLinkedinIn />
        </a>
      </div>
      <div className={classes.member}>
        <img className={classes.teamimg} src={props.img} alt={props.name} />
        <div className={classes.header}>
          <h4 className={classes.name}>{props.name}</h4>
          <p className={classes.post}>{props.post}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
