import React from "react";
import styles from "./footer.module.css";
import FooterImg from "../../../public/images/footer/team.jpg";
import GmailIcon from "../../../public/icons/gmail.png";
import ResumeIcon from "../../../public/images/footer/resume.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.footerTextContainer}>
          <h2>Let's Build Something Together!</h2>
          <p>
            I'm all about delivering high quality results and enhancing team
            dynamics with my expertise. If you're looking for a dedicated and
            skilled engineer to help move projects forward,{" "}
            <span className={styles.footerBoldWhite}>let's</span>{" "}
            <span className={styles.footerYellow}>talk.</span>
          </p>
        </div>
        <div className={styles.footerLinksContainer}>
          <div className={styles.iconLinkWrapper}>
            <Image src={GmailIcon} alt="mail" className={styles.footerIcon} />
            <a href="mailto:rasmus.henriksen@live.dk">
              rasmus.henriksen@live.dk
            </a>
          </div>
          <div className={styles.iconLinkWrapper}>
            <Image src={ResumeIcon} alt="mail" className={styles.footerIcon} />
            <a
              href="https://docs.google.com/document/d/1eMeADjtMZina68NxbSqDQ_3VnFKOah1D0EwkxJ9yvKE/export?format=pdf"
              download="Henriksen-Resume-24.pdf"
            >
              {" "}
              Download my resume
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerRight}>
        <div className={styles.footerImgContainer}>
          <Image src={FooterImg} alt="laptop" className={styles.teamworkImg} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
