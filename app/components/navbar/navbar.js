"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import GmailIcon from "../../../public/icons/gmail.png";
import MenuIcon from "../../../public/icons/menu.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ to, children }) => {
    return (
      <button
        onClick={() => scrollToSection(to)}
        className={styles.desktopMenuListItem}
      >
        {children}
      </button>
    );
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.desktopMenu}>
        <NavLink to="intro">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="experience">Experience</NavLink>
        <NavLink to="skills">Skills</NavLink>
        <NavLink to="portfolio">Portfolio</NavLink>
        <NavLink to="blog">Articles</NavLink>
      </div>
      <button className={styles.hamburgerBtn} onClick={toggleMobileMenu}>
        <Image src={MenuIcon} alt="Menu" className={styles.menuIcon} />
      </button>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeMenu} onClick={toggleMobileMenu}>
            X
          </button>
          <NavLink to="intro">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="blog">Blog</NavLink>
        </div>
      )}
      <a href="mailto:rasmus.henriksen@live.dk" rel="noopener noreferrer">
        <div className={styles.emailBtnWrapper}>
          <button className={styles.emailBtn}>
            <Image
              src={GmailIcon}
              alt="Email"
              className={styles.emailLinkIcon}
            />
          </button>
          <p>Contact Me</p>
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
