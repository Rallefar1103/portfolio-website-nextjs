"use client";

import React, { useEffect, useState } from "react";
import styles from "./article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
  const { date, title, teaser, link } = props;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const teaserText = truncateText(teaser, 200);

  return (
    <>
      <div className={styles.article}>
        <div className={styles.articleRight}>
          <a href={link}>
            <h3 className={styles.articleTitle}>{title}</h3>
            <p className={styles.articleDate}>{date}</p>
            <p className={styles.articleTeaser}>{teaserText}</p>
            <div className={styles.articleLink}>
              Read Article{" "}
              <FontAwesomeIcon
                className={styles.articleIcon}
                icon={faChevronRight}
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Article;
