import Image from "next/image";
import styles from "./oneMockup.module.css";

const OneMockupView = ({ challenge, challengeDescription, image }) => {
  return (
    <div className={styles.projectMockupsOne}>
      <div className={styles.mockupsLeft}>
        <div className={styles.mockupTextContainer}>
          <p className={styles.theChallenge}>THE CHALLENGE</p>
          <h2>{challenge}</h2>
          <p className={styles.challengeDescribed}>{challengeDescription}</p>
        </div>
      </div>

      <div className={styles.mockupRight}>
        <Image src={image} alt="mockup-img" className={styles.mockupOneImage} />
      </div>
    </div>
  );
};

export default OneMockupView;
