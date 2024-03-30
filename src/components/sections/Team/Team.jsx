import React from "react";
import classes from "./Team.module.css";
import Text from "../../text/Text";
import TeamMember from "./TeamMember";

// Images
import harsh from "./harsh.JPG";
import himanshu from "./hima.jpg";
export default function Team() {
  const text = ["We Are", "Geeky Vision."];
  return (
    <div className={classes.team}>
      <Text
        left={false}
        text={text}
        color={classes.color}
        primary={classes.primary}
        secondary={classes.secondary} 
      >
        <div className={classes.teamDiv}>
          <div>
          <TeamMember
            post="Founder | Developer"
            instagram="https://www.instagram.com/hima_khaitan/"
            linkedin="https://www.linkedin.com/in/himanshu-khaitan/"
            facebook="https://www.facebook.com/himanshu.khaitan.98/"
            name="Himanshu Khaitan"
            img={himanshu}
          />
          </div>
         <div>
         <TeamMember
            post="Founder | Digital Marketer"
            instagram="https://www.instagram.com/discretestylee/"
            linkedin="https://www.linkedin.com/in/harsh-khaitan-568050131/"
            facebook="https://www.facebook.com/khaitanh"
            name="Harsh Khaitan"
            img={harsh}
          />
         </div>
         
        </div>
      </Text>
    </div>
  );
}
