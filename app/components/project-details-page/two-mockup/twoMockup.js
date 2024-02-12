import Image from "next/image";
import styles from "./twoMockup.module.css";

const TwoMockupView = ({ solution, solutionDescription, imageTwo }) => {
  return (
    <>
      <div className={styles.projectMockupsTwo}>
        <div className={styles.mockupsTwoLeft}>
          <Image
            src={imageTwo}
            alt="mockup-img"
            className={styles.mockupTwoImage}
          />
        </div>

        <div className={styles.mockupsTwoRight}>
          <div className={styles.mockupsTwoTextContainer}>
            <p className={styles.theSolution}>THE SOLUTION</p>
            <h2>{solution}</h2>
            <p className={styles.solutionDescribed}>{solutionDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoMockupView;
