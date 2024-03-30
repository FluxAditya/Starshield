// Import Next Components
import Head from "next/head";
import Link from "next/link";

// Importing Data
import { clients } from "../data/clientele";

// Importing Styles
import classes from "../styles/Home.module.css";

// React Icons
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiInstagram, } from "react-icons/si";

// Import Custom Components
import Social from "../components/Social";
import Button from "../components/Button";
import Projects from "../layouts/Home/Projects";
import Services from "../layouts/Home/Services";

// Defining Main Component
export default function Home() {
  return (
    <>
      <Head>
        <title>Geeky Vision | Home for Brand Creation</title>
        <meta
          name="description"
          content="Geeky Vision is your go-to media and web agency for expert Social Media Management, stunning Graphic Design and impressive Website Design. We blend geeky creativity with aesthetic finesse, delivering fun and engaging content that captivates your audience. Elevate your brand with our unique blend of expertise and creativity!"
        />
        {/* Social Media */}
        <meta property="og:title" content="Geeky Vision" />
        <meta
          property="og:url"
          content="https://www.instagram.com/geekyvision/"
        />
        <meta
          property="og:image"
          content="https://geekyvision.in/brand/brand-image.png"
        />
        {/* Twitter */}
        <meta name="twitter:title" content="Geeky Vision | Home for Brand Creation" />
        <meta
          name="twitter:description"
          content="Where Identities Are Woven into the timeless Fabric of Brands."
        />
        <meta
          name="twitter:image"
          content=""
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className={classes.home}>
        <div className={classes.home_first}>
          <div>
            <h1>What</h1>
            <h1 className="color-secondary">Makes us</h1>
            <h3 className="color-secondary margin-top-small">
              Different <span className="color-primary">from the World</span>!
            </h3>
          </div>
          <div className={classes.home_first_secondary}>
            <p className={classes.home_first_text + " margin-top-large"}>
              StarShield, a research-based company specializing in Nano Materials manufactures a range of Smart Paints & Coatings for surface protection, that too with Smart functionality like Protection from Heat, Water, Dust, Fire, Corrosion & Virus .StarShield Technologies, founded by educationally diverse individuals, aims to solve common issues using chemistry, biology, and nanomaterials.
            </p>
            <div className={classes.home_first_cta + " margin-bottom-medium"}>
              <Button
                isLink={true}
                href=""
                isIcon={true}
                theme="primary"
                text="Contacts"
                Icon={FiArrowUpRight}
                className="margin-right-medium"
              />
              <div className={classes.home_first_social}>
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
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2FStarshieldC"
                  theme="primary"
                  Icon={FaTwitter}
                />
                <Social
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2FStarshieldC"
                  theme="primary"
                  Icon={FaFacebook}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.home_second}>
          <img
            className={classes.home_second_img}
            src="/images/display/home.webp"
          />
          <Link href="">
            <div className={classes.home_second_cta + " " + classes.home_cta}>
              <h3 className="color-tertiary" style={{cursor:'pointer'}}>Contact Us!</h3>
            </div>
          </Link>
        </div>
        <div className={classes.home_third}>
          <h2 className={"color-secondary " + classes.home_third_text}>
          Exports in 45+ Countries <span className="color-tertiary">~ Presence in 6 Countries • </span>~Indo-European Technology{" "}
            <span className="color-tertiary">~In house Research & Testing Lab • </span>~Trust of 5000+{" "}
            <span className="color-tertiary">YouR Ideas • </span>
            Discuss <span className="color-tertiary">YouR Ideas • </span>
            Discuss <span className="color-tertiary">YouR Ideas • </span>
            Discuss <span className="color-tertiary">YouR Ideas • </span>
          </h2>
        </div>
        <Services />

        <div className={classes.home_fifth}>
          <div className={classes.home_fifth_container}>
            <h3 style={{color:'white',fontWeight:'normal',marginTop:15}}>
            Our dedicated Research and Development team specializes in creating innovative solutions for the paints and coatings industry. Through the fusion of technology and expertise, we develop unique nano-modified products tailored to meet customer needs on a large scale.
            </h3>
            <Link href="/">
              <div className={classes.home_fifth_cta + " " + classes.home_cta}>
                <h4 className="color-tertiary" style={{fontSize:26,fontWeight:'bold'}}>Research And Development</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.home_clientele}>
          <div className={classes.home_clientele_head}>
            <h2 className="color-tertiary">
            Market And<span className="color-secondary"> Research Report</span>.
            </h2>{" "}
          </div>
          <div className={classes.home_clientele_div + " margin-top-large"}>
            {clients.map((client, index) => {
              return (
                <div key={index} className={classes.home_clientele_item}>
                  <img
                    src={`/images/clients/${client.image}`}
                    className={client.invert && classes.invert}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Projects />
      </section>
    </>
  );
}
