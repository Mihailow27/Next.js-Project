import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/dobromir.png"
          alt="An image showing Dobromir"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Dobromir</h1>
      <p>
        I am business Informatic Student at UNWE and programming student at
        Software University(Softuni). What you see is a small part of my Next.js
        training from Udemy!
      </p>
    </section>
  );
}

export default Hero;
