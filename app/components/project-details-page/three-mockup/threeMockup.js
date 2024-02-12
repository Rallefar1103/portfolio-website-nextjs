import Image from "next/image";
import styles from "./threeMockup.module.css";
const ThreeMockupView = ({ extraText, imageThree }) => {
  return (
    <>
      <div className={styles.projectMockupsThree}>
        <div className={styles.left}>
          <div className={styles.mockupTextContainer}>
            <h2>{extraText}</h2>
          </div>
        </div>

        <div className={styles.right}>
          <Image
            src={imageThree}
            alt="mockup-img"
            className={styles.mockupImage}
          />
        </div>
      </div>
    </>
  );
};

export default ThreeMockupView;
