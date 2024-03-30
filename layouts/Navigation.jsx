import classes from "../styles/layouts/Navigation.module.css";

// Importing Next Components
import Image from "next/image";
import Link from "next/link";

const Navigation = ({}) => {
  return (
    <section className={classes.nav}>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Home</h4>
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>About us</h4>
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Products</h4>
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Shop</h4>
        </Link>
      </div>
  
      <div className={classes.nav_item}>
        <Link href='/' className={classes.nav_logo}>
          <Image  width='60' height='60' src='/brand/Starshield.png' />
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Partner with us </h4>
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Get Support</h4>
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>English </h4>
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Icon</h4>
        </Link>
      </div>
    </section>
  );
};

export default Navigation;
