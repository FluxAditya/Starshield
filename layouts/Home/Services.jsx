import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { BsArrowUpRight } from "react-icons/bs";
import Label from "../../components/Label";

import classes from "../../styles/Home.module.css";
import { categories, services } from "../../data/services";

const ServiceBar = ({ text, image = "/images/projects/panda.png", key }) => {
  return (
    <>
      <div className={classes.service_bar} key={key}>
        <div>
          <h3 className={classes.service_bar_head}>
            {text}
            <span>•</span>
          </h3>
        </div>
        <div className={classes.service_bar_icon}>
          <BsArrowUpRight />
        </div>
        <div className={classes.service_bar_img}>
          <img src={image} />
        </div>
      </div>
    </>
  );
};

const Services = () => {
  const [category, setCategory] = useState("marketing");

  const changeHandler = (tag, e) => {
    setCategory(tag);
  };

  return (
    <div className={classes.home_fourth}>
      <div className={classes.home_fourth_prim + " margin-bottom-large"}>
        <div className={classes.home_fourth_left}>
          <h1 className={`color-tertiary margin-bottom-small`}>
            <span className="color-secondary">Product </span>Categories
            
          </h1>
          
        </div>
       
      </div>
      <div className={classes.home_fourth_sec}>
        {services[category].map((item, index) => {
          return (
            <ServiceBar
              key={index}
              text={item.name}
              image={`/images/projects/${item.image}.webp`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
