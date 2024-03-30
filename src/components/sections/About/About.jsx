import classes from "./About.module.css";
import Text from "../../text/Text";
const About = (props) => {
  const text = ["About", "Geeky Vision ."];
  const data = [
    {
      title: "Web Development",
      description:
        "We work on a wide variety of tools including React JS and user friendly Wordpress & Wix for managing businesses! We have made a notable amount of websites either it be a Portfolio or an E-Commerce! ",
    },
    {
      title: "Digital Marketing",
      description:
        "We started this service recently, thus providing our clients with a one-stop solution for all of their business needs be it a Website, Social Media Management, or any other.",
    },
    {
      title: "Graphic Desigining",
      description:
        "We do create some eye-catching content used not only for social media but useful on the website to enhance the User experience & hence remember your brand. Attractive is the new normal!",
    },
  ];

  return (
    <div className={classes.about} id={props.id}>
      <Text
        left={false}
        text={text}
        color={classes.color}
        primary={classes.primary}
        secondary={classes.secondary}
      >
        <div className={classes.aboutDiv}>
          <p>
            Are you Geeky? If yes, then you are a Geeky Vision. Every geek has a
            passion for something. But there are some people out there who
            specialize in working with those passions.
          </p>
          <p>
            We at Geeky Vision follow our passion into reality. We started as a
            hobby and eventually turned into a business. We are a team of
            Developers and Digital Marketers whose focus is to be a part of our
            client’s growth, not as an agency but as a team member.
          </p>
          <p>
            We aim to make digital services affordable for all. With this aim in
            mind, we provide services like:
          </p>
          <div className={`${classes.data}`}>
            {data.map((item) => {
              return (
                <div className={classes.dataitem}>
                  <h3>{item.title}</h3>
                  <p className={classes.description}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Text>
    </div>
  );
};

export default About;
