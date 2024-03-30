import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";

import styles from "./Text.module.css";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Text(props) {
  const [open, set] = useState(true);
  const setHandler = () => {
    set((prev) => !prev);
  };

  return (
    // <div className={styles.container} onClick={() => set((state) => !state)}>
    <div className={styles.container} onClick={setHandler}>
      <div className={props.primary}>
        {props.left && <Trail open={open}>
          {props.text.map((item) => {
            return <span className={props.color}>{item}</span>;
          })}
        </Trail>}
        <div className={props.secondary}>{props.children}</div>
        {!props.left && <Trail open={open}>
          {props.text.map((item) => {
            return <span className={props.color}>{item}</span>;
          })}
        </Trail>}
      </div>
    </div>
  );
}