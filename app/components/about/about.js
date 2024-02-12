import React from "react";
import styles from "./about.module.css";
import AboutImage from "../../../public/images/about/profile-pic-2-no-bg.png";
import AbstractShapePNG from "../../../public/images/about/white-bg-2.png";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.aboutLeft}>
        <div className={styles.aboutImagesContainer}>
          <Image
            src={AbstractShapePNG}
            alt="abstract-shape"
            className={styles.abstractImage}
          />
          <Image
            src={AboutImage}
            alt="about-img"
            className={styles.aboutProfilePicture}
          />
        </div>
      </div>

      <div className={styles.aboutRight}>
        <div className={styles.aboutTextContainer}>
          <h2>
            About <span className={styles.aboutMeYellow}>Me</span>{" "}
          </h2>
          <p>
            As a tech enthusiast and creator at heart, I launched my first
            startup in 2017, and from there jumped into a Computer Science
            degree while working professionally as a software engineer for now
            three and a half years. With a Master's from UCLA under my belt, I'm
            geared up for the next big challenge, eager to learn more, and
            contribute with my skills to drive innovation{" "}
            <span className={styles.forwardYellow}>forward!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
