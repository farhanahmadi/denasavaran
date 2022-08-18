import React from "react";
import Link from "next/link";

//import styles
import styles from "./AboutUs.module.css";

const AboutUs = ({ categoriesList }) => {
  return (
    <div className={styles.container}>
      <section className={styles.categories}>
        <ul>
          {categoriesList.map((categories) => (
            <li key={categories.id}>
              <Link
                href={{
                  pathname: "/products",
                  query: { categories: categories.id },
                }}
                passHref
              >
                <a
                  style={{ textDecoration: "none", color: "var(--lightBlack)" }}
                >
                  <section className={styles.categoriesItem}>
                    <img src={categories.image} alt={categories.name} />
                    <span className={styles.categoriesName}>
                      {categories.name}
                    </span>
                  </section>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
