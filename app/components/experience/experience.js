"use client";

import React, { useEffect, useState } from "react";
import LevelUp from "../../../public/images/experiences/level-up.png";
import { experiences } from "@/constants/all-experiences";
import styles from "./experience.module.css";
import Image from "next/image";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure code is executed client-side where window is defined
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(query);

      // Set the initial value
      setMatches(mediaQuery.matches);

      const handleChange = (event) => {
        setMatches(event.matches);
      };

      // Add event listener for changes
      mediaQuery.addEventListener("change", handleChange);

      // Cleanup function to remove the event listener
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [query]);

  return matches;
};

const ExperienceCard = ({ Company }) => {
  const experience = experiences.find((exp) => exp.company === Company);

  const [company, setCompany] = useState(experience.company);
  const [timeFrame, setTimeFrame] = useState(experience.timeFrame);
  const [responsibilities, setResponsibilities] = useState(
    experience.responsibilities
  );
  const [title, setTitle] = useState(experience.title);

  const isNarrowScreen = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      {isNarrowScreen ? (
        <div className={styles.experienceCard}>
          <div className={styles.cardRight}>
            <div className={styles.companyRow}>
              <h2>{company}</h2>
              <div className={styles.companyRoleContainer}>
                <h3>{title}</h3>
              </div>
              <div className={styles.timeFrameContainer}>
                <p className={styles.timeFrame}>{timeFrame}</p>
              </div>
            </div>

            <div className={styles.reponsibility}>
              <div className={styles.responsibilityContainer}>
                <p>{responsibilities}</p>
              </div>
            </div>
            <div className={styles.techTags}>
              {experience.techTags.map((tag, index) => (
                <div className={styles.techTagContainer} key={index}>
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.experienceCard}>
          <div className={styles.cardLeft}>
            <p>{timeFrame}</p>
          </div>
          <div className={styles.cardRight}>
            <div className={styles.companyRow}>
              <h2>{company}</h2>
              <div className={styles.companyRoleContainer}>
                <h3>{title}</h3>
              </div>
            </div>
            <div className={styles.reponsibility}>
              <div className={styles.responsibilityContainer}>
                <p>{responsibilities}</p>
              </div>
            </div>
            <div className={styles.techTags}>
              {experience.techTags.map((tag, index) => (
                <div className={styles.techTagContainer} key={index}>
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Experience = () => {
  return (
    <div className={styles.experienceContainer} id="experience">
      <div className={styles.experienceTextContainer}>
        <h2>
          Professional{" "}
          <span className={styles.experienceYellow}> Experience</span>
        </h2>
      </div>
      <div className={styles.leftRightContainer}>
        <div className={styles.experienceLeft}>
          {experiences.map((job, index) => (
            <ExperienceCard Company={job.company} key={job.id} />
          ))}
        </div>

        <div className={styles.experienceRight}>
          <div className={styles.levelUpImageContainer}>
            <Image
              src={LevelUp}
              alt="experience-img"
              className={styles.levelUpImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
