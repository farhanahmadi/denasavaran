import React from "react";

//styles
import styles from "./products.module.css";

const ProductsSkeleton = () => {
  return (
    <div className={styles.card}>
      <section className={styles.cardImage}></section>
      <section className={styles.cardBody}>
        <section className={styles.title}></section>
        <section className={styles.body}></section>
      </section>
      <section className={styles.priceParent}>
        <section className={styles.price}></section>
        <section className={styles.button}></section>
      </section>
    </div>
  );
};

export default ProductsSkeleton;
