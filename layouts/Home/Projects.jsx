import { useState } from "react";

import { TfiWorld } from "react-icons/tfi";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Label from "../../components/Label";
import classes from "../../styles/Home.module.css";

// Importing Data
import { categories, projects } from "../../data/project";

const Projects = ({}) => {
  const [category, setCategory] = useState("design");

  const changeHandler = (tag, e) => {
    setCategory(tag);
  };

  return (
    <div className={classes.home_sixth} id="projects">
      <div className={classes.home_sixth_header}>
        <div>
          <h1
            className={
              "margin-bottom-large color-tertiary " + classes.home_sixth_head
            }
          >
            Certificate And <span className="color-secondary">Recognition</span>.
          </h1>
         
        </div>
      </div>
      <div className={classes.home_sixth_display + " margin-top-large"}>
        {projects[category].map((item, index) => {
          return (
            <Link
              href="/"
              className={
                index == 1
                  ? classes.home_sixth_two + " " + classes.home_sixth_item
                  : classes.home_sixth_item
              }
            >
              <div>
                <img
                  className={classes.home_sixth_img}
                  src={`/images/projects/${category}/${item.image}`}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
