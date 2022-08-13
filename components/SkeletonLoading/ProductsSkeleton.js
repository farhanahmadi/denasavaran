import React from "react";

//styles
import styles from "./products.module.css";

const ProductsSkeleton = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.cardMobile}>
        <section className={styles.imageText}>
          <section className={styles.image}></section>
          <section className={styles.textContainer}>
            <section className={styles.text}></section>
            <section className={styles.seller}></section>
          </section>
        </section>
        <section className={styles.priceContainer}>
          <section className={styles.mobilePrice}></section>
          <section className={styles.mobilePriceDiscount}></section>
        </section>
      </div>
    </div>
  );
};

export default ProductsSkeleton;
