import React from "react";
import styles from "./blog.module.css";
import Article from "./Article/article";
import allArticles from "../../../constants/all-articles";

const Blog = () => {
  return (
    <section id="blog" className={styles.blog}>
      <h2 className={styles.blogHeader}>
        {" "}
        My Tech <span className={styles.blogYellow}>Blog</span>{" "}
      </h2>
      <div className={styles.articlesWrapper}>
        {allArticles.map((article, index) => (
          <Article
            key={index}
            date={article.date}
            title={article.title}
            teaser={article.teaser}
            link={article.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
