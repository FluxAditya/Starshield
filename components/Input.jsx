import classes from "../styles/components/Input.module.css";

const Input = ({ type, value, onChange, className, placeholder }) => {
  return (
    <div className={classes.input}>
      <input
        className={className}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
