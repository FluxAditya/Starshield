import classes from "../styles/components/Label.module.css";

const Label = ({ Icon, text, onClick, key, isSelected }) => {
  return (
    <div
      className={
        isSelected == true
          ? classes.label + " " + classes.selected
          : classes.label
      }
      onClick={onClick}
      key={key}
    >
      <div className={classes.label_icon}>{Icon}</div>
      <h5 className={`color-tertiary ${classes.label_text}`}>{text}</h5>
    </div>
  );
};

export default Label;
