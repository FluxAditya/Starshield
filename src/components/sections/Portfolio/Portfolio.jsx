import React from "react";
import classes from "./Portfolio.module.css";
import Text from "../../text/Text";
import Pictures from "./Pictures";
const Portfolio = (props) => {
  const text = ["Our", "Digital", "Portfolio ."];
  return (
    <div className={classes.portfolio} id={props.id}>
      <Text
        left={true}
        text={text}
        color={classes.color}
        primary={classes.primary}
      >
        <div className={classes.portfolioText}>
          <p>
            Below is just a glimpse of work we do. Within a span of one year,
            we have completed some memorable projects personally as well as
            professionally. Happy Sharing those with you!
          </p>
          <button>
            <a href="https://msha.ke/geekyvision/#links" rel="noreferrer" target="_blank">
              Portfolio
            </a>
          </button>
        </div>
      </Text>
      <div className={classes.pictures}>
        <Pictures />
      </div>
    </div>
  );
};
export default Portfolio;
