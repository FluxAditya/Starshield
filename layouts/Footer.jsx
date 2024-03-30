import classes from "../styles/layouts/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Social from "../components/Social";
import Input from "../components/Input";
import { useState } from "react";

import { FaTwitter, FaLinkedinIn, FaRegGrinWink, FaYoutube, FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const Footer = ({}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const currentDate = new Date();

  async function mailHandler() {

    if (email.trim() === "") {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: email,
      });
      console.log(res);
      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setEmail("");
      
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  }

  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footer_main}>
          <h3 className="color-tertiary">
            Keep In <span className="color-secondary">Touch</span>
          </h3>
          <Image
  src="/brand/logo-full.webp"
  alt="Geeky Vision Logo"
  width={180}
  height={180}
  style={{ marginTop: '20px',marginBottom:'20px' }} // Adjust the value as needed
/>

          <p className={`color-grey + ${classes.footer_text}`}>
          Empowering Everyday Life with Chemistry, Microbiology, and Nanotechnology
          </p>
          <div className={classes.footer_social + " margin-top-medium"}>
            <Social
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FStarshieldC"
              theme="primary"
              Icon={FaTwitter}
            />
            <Social
              href=""
              theme="primary"
              Icon={SiInstagram}
            />
            <Social
              href="https://www.youtube.com/c/StarShield?app=desktop"
              theme="primary"
              Icon={FaYoutube}
            />
             <Social
              href="https://www.facebook.com/starshieldtechnologies/"
              theme="primary"
              Icon={FaFacebook}
            />
          </div>
        </div>
        <div className={classes.footer_secondary}>
          <div className={classes.footer_item}>
            <Link href="">
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                FAQs
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href="">
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Company
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href="#projects">
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Projects
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href="https://www.youtube.com/c/StarShield?app=desktop">
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Youtube
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FStarshieldC">
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Twitter
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href="https://www.facebook.com/starshieldtechnologies/">
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Facebook
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href="">
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Instagram
              </h5>
            </Link>
          </div>
        </div>
        <div className={classes.footer_tertiary}>
          <h2 className={"color-tertiary " + classes.footer_tertiary_heading}>
            Our Branches
          </h2>
          <p className="color-grey margin-top-large">
            We send out our best strategies in a juciy weekly newsletter. Only
            Value.
          </p>
          <Input
            value={email}
            type="email"
            onChange={handleEmailChange}
            className="margin-top-small"
            placeholder={"Your Email Address"}
          />
          <div
            className={classes.submitButton + " margin-top-small"}
            onClick={mailHandler}
          >
            {loading && "Loading..."}
            {!loading && (
              <>
                <div>See you in your inbox</div>
                <div>
                  <FaRegGrinWink />
                </div>
              </>
            )}
          </div>
        </div>
      </footer>
      <div className={classes.copyright}>
  <div className={classes.copyrightsub}>
    <p className={classes.copyright_text}>
      StarShield Technologies . All Rights Reserved
    </p>
  </div>
</div>

    </>
  );
};

export default Footer;
