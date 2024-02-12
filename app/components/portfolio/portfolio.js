import React from "react";
import styles from "./portfolio.module.css";
import { allProjects } from "../../../constants/all-projects";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.portfolioTitle}>
        <span className={styles.portfolioYellow}>Portfolio</span>
      </h2>
      <p className={styles.portfolioIntro}>
        Selection of my 20+ software projects in web, mobile, open source
        contributions etc. To see more of my projects press the{" "}
        <span className={styles.projectsPurple}>See more projects</span> button
        below.
      </p>

      <div className={styles.projectsGrid}>
        {allProjects.slice(0, 6).map((project, index) => (
          <div className={styles.projectContainer} key={index}>
            <div className={styles.projectImageContainer}>
              <Image
                src={project.image}
                alt="project"
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectInfoContainer}>
              <h3>{project.name}</h3>
              <p>{project.type}</p>

              <Link href={`/projects/${project.id}`}>
                <button type="button">Learn more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link href={`/all-projects`}>
        <button type="button" className={styles.allProjectsContainer}>
          See more projects
        </button>
      </Link>
    </section>
  );
};

export default Portfolio;
