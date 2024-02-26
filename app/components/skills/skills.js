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
          large-scale applications that align closely with business requirements
          and goals
        </p>
      </div>

      <div className={styles.skillCards}>
        {allSkills.map((skill, index) => (
          <div className={styles.skillCard} key={skill.title}>
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
                  <div
                    className={styles.skillsTechStackIconContainer}
                    key={index}
                  >
                    <Image
                      src={tech}
                      alt="ts"
                      height={50}
                      width={50}
                      className={styles.techStackIcon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
