import Image from "next/image";
import styles from "./threeMockup.module.css";
const ThreeMockupView = ({ extraText, imageThree }) => {
  return (
    <>
      <div className={styles.projectMockupsThree}>
        <div className={styles.mockupsThreeLeft}>
          <div className={styles.mockupsThreeTextContainer}>
            <h2>{extraText}</h2>
          </div>
        </div>

        <div className={styles.mockupsThreeRight}>
          <Image
            src={imageThree}
            alt="mockup-img"
            className={styles.mockupThreeImage}
          />
        </div>
      </div>
    </>
  );
};

export default ThreeMockupView;
