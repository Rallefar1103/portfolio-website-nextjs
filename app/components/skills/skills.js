import React from "react";
import styles from "./skills.module.css";
import { allSkills } from "../../../constants/skills";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.skillsTitle}>
        <span className={styles.skillsYellow}>Skills</span> I Bring
      </h2>
      <div className={styles.skillsIntroContainer}>
        <p>
          Driven by an entrepreneurial passion for innovation, I specialize in
          full-stack development with a focus on architecting and building
          large-scale web and smartphone applications that align closely with
          business requirements and goals
        </p>
      </div>

      <div className={styles.skillCards}>
        {allSkills.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <Image
              src={skill.icon}
              alt={skill.title}
              className={styles.skillCardHeaderIcon}
            />
            <div className={styles.skillCardText}>
              <h2>{skill.title}</h2>

              <p>{skill.description}</p>
              <div className={styles.whiteHorizontalBar}></div>
              <h3> Proficient Tech Stack </h3>
              <div className={styles.skillsTechStack}>
                {skill.tech.map((tech, index) => (
                  <div className={styles.skillsTechStackIconContainer}>
                    <Image
                      src={tech}
                      alt="ts"
                      key={index}
                      className={styles.techStackIcon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 
      <div className="project-management-card">
        <div className="pm-logo-title-container">
          <img
            src={ProjectManIcon}
            alt="project-management"
            className="project-man-img"
          />
          <div className="pm-text-container">
            <h2>Product Management</h2>
            <p>
              I thrive when I can blend my technical expertise with business
              acumen and steer a project from conception to launch by assisting
              and managing the team through all phases of the product
              development lifecycle.
            </p>
          </div>
        </div>

        <div className="pm-white-horizontal-bar"></div>
        <div className="pm-tech-stack-list">
          {projectManagementSkills.map((tech, index) => (
            <div className="pm-icon-text-container" key={index}>
              <img src={tech.icon} alt="ts" className="pm-tech-icon" />
              <p> {tech.description} </p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
