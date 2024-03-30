import Link from "next/link";
import classes from "../styles/components/Button.module.css";

const Button = ({ isLink, href, text, isIcon, Icon, theme, className }) => {
  let main = (
    <span className={classes.btn_content + " " + className}>
      <span>{text}</span>
    </span>
  );

  if (isIcon) {
    main = (
      <span className={classes.btn_content}>
        <span className={classes.btn_text}>{text}</span>
        <span className={classes.btn_icon}>
          <Icon />
        </span>
      </span>
    );
  }

  return (
    <div className={classes.btn + " " + classes[theme]}>
      {isLink && <Link href={href}>{main}</Link>}
    </div>
  );
};

export default Button;
