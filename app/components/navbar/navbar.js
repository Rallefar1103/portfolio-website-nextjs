"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import GmailIcon from "../../../public/icons/gmail.png";
import MenuIcon from "../../../public/icons/menu.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({ to, children }) => {
    return (
      <Link
        activeClass={styles.active}
        href={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={styles.desktopMenuListItem}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.desktopMenu}>
        <NavLink to="intro">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="experience">Experience</NavLink>
        <NavLink to="skills">Skills</NavLink>
        <NavLink to="works">Portfolio</NavLink>
        <NavLink to="articles">Articles</NavLink>
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
          <NavLink to="works">Portfolio</NavLink>
          <NavLink to="articles">Blog</NavLink>
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
