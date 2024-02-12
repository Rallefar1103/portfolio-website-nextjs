import React from "react";
import styles from "./intro.module.css";

import LinkedinIcon from "../../../public/icons/linkedin.png";
import GitHubIcon from "../../../public/icons/github.png";
import MediumIcon from "../../../public/icons/medium.png";
import ProfilePic from "../../../public/images/intro/profile.jpeg";
import Image from "next/image";

const Intro = () => {
  return (
    <section id="intro" className={styles.intro}>
      <div className={styles.introLeft}>
        <div className={styles.introTextContainer}>
          <h1>
            Hi! 👋 <br /> I'm <span className={styles.name}>Rasmus</span>
          </h1>
          <h2>Full-Stack Software Engineer</h2>
          <p className={styles.introDescription}>
            with a M.S. degree in Computer Science from UCLA and five years of
            professional experience working as a software engineer including two
            years as a tech-startup founder.
          </p>
        </div>

        <div className={styles.introSocialLinks}>
          <a
            href="https://www.linkedin.com/in/rasmus-henriksen-a5b660109/"
            rel="noopener noreferrer"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin"
              className={styles.socialImg}
            />
          </a>
          <a
            href="https://github.com/Rallefar1103?tab=repositories"
            rel="noopener noreferrer"
          >
            <Image src={GitHubIcon} alt="GitHub" className={styles.socialImg} />
          </a>
          <a
            href="https://medium.com/me/stories/public"
            rel="noopener noreferrer"
          >
            <Image src={MediumIcon} alt="Medium" className={styles.socialImg} />
          </a>
        </div>
      </div>
      <div className={styles.introRight}>
        <div className={styles.profilePictureContainer}>
          <Image
            src={ProfilePic}
            alt="Profile"
            className={styles.profilePicture}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
