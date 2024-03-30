import classes from "../styles/components/Social.module.css";
import Link from "next/link";

const Social = ({ Icon, theme, href }) => {
  return (
    <div className={classes.social + " " + classes[theme]}>
      <Link href={href}>
        <Icon />
      </Link>
    </div>
  );
};

export default Social;
