import React from "react";
import Link from "next/link";
import Image from "next/image";

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
                    <Image
                      src={categories.image}
                      alt={categories.name}
                        width={100}
                        height={100}
                      />
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
