"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./projectIntro.module.css";
import Image from "next/image";

export const BackButton = () => {
  return (
    <button onClick={() => {}} className={styles.bacbButton}>
      <FontAwesomeIcon icon={faChevronLeft} /> Back
    </button>
  );
};

const extractFirstWord = (string) => {
  return string.split(" ")[0];
};

export const ProjectIntro = ({ backgroundImage, title, tagline, tags }) => {
  return (
    <div className={styles.firstScreenWrapper}>
      <div className={styles.left}>
        <BackButton />
        <Image
          src={backgroundImage}
          alt="background-img"
          className={styles.firstScreenImg}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.firstScreenTitleContainer}>
          <h1 className={styles.firstScreenTitle}>
            <span className={styles.titleYellow}>
              {extractFirstWord(title)}
            </span>{" "}
            {title.substring(extractFirstWord(title).length)}
          </h1>
        </div>
        <div className={styles.taglineContainer}>
          <h3 className={styles.firstScreenTagline}>{tagline}</h3>
        </div>

        <div className={styles.tagsWrapper}>
          {tags.map((tag, index) => (
            <div className={styles.tagContainer} key={index}>
              <p className={styles.tag}>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
