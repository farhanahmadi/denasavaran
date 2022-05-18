import React from "react";

//styles
import styles from "./blog.module.css";

const BlogSkeleton = () => {
  return (
    <div className={styles.card}>
      <section className={styles.cardImage}></section>
      <section className={styles.cardBody}>
        <section className={styles.title}></section>
        <hr />
        <section className={styles.body}></section>
        <section className={styles.body2}></section>
        <section className={styles.writer}></section>
        <section className={styles.date}></section>
        <section className={styles.categoryParent}>
          <section className={styles.category}></section>
        </section>
      </section>
        <section className={styles.button}></section>
    </div>
  );
};

export default BlogSkeleton;
