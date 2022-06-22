import React from "react";
import Link from "next/link";

//import styles
import styles from "./AboutUs.module.css";

const AboutUs = ({ categoriesList }) => {
  return (
    <div className={styles.container}>
      {console.log(categoriesList)}
      <section className={styles.categories}>
        <ul>
          {categoriesList.map((categories) => (
            <li key={categories.id}>
              <Link href={`/products?categories=${categories.id}`} passHref>
                <section className={styles.categoriesItem}>
                  <img src={categories.image} alt={categories.name} />
                  <span className={styles.categoriesName}>
                    {categories.name}
                  </span>
                </section>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
