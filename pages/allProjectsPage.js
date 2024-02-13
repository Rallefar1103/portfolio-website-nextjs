"use client";
import "@/app/globals.css";
import styles from "./allProjectsPage.module.css";
import { allProjects } from "@/constants/all-projects";
import IntroProfilePic from "@/public/images/intro/profile.jpeg";
import { BackButton } from "@/app/components/project-details-page/project-intro/projectIntro";
import Image from "next/image";

const AllProjectsPage = () => {
  return (
    <section id="allProjects" className={styles.allProjects}>
      <div className={styles.introContainer}>
        <BackButton className={styles.allProjectsBackBtn} />
        <div className={styles.containerLeft}>
          <div className={styles.profilePicContainer}>
            <Image
              src={IntroProfilePic}
              alt="intro-profile-pic"
              className={styles.profilePicture}
            />
          </div>
        </div>
        <div className={styles.containerRight}>
          <div className={styles.textContainer}>
            <h2>Rasmus Henriksen</h2>
            <h3>Full-Stack Software Engineer</h3>
          </div>
          <div className={styles.buttonsContainer}>
            <a
              href="mailto:rasmus.henriksen@live.dk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className={styles.getInTouchBtn}>
                Get in touch
              </button>
            </a>
            <a
              href="https://github.com/Rallefar1103?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className={styles.getInTouchBtn}>
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.allProjectsGrid}>
        {allProjects.map((project, index) => (
          <div className={styles.projectContainer} key={index}>
            <div className={styles.projectImgContainer}>
              <Image
                src={project.image}
                alt="project"
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectInfoContainer}>
              <h3>{project.name}</h3>
              <p>{project.type}</p>
              <a href={project.githubUrl}>
                <button type="button">GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjectsPage;
