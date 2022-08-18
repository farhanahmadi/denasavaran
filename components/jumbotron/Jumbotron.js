import React from "react";

//* import styles
import styles from "./jumbotron.module.css";

//* import icons
import { FaSearch } from "react-icons/fa/index";

export default function jumbotron() {
  return (
    <div className={styles.container}>
      <div className={styles.images}></div>
      <section className={styles.main}>
        <section className={styles.searchBar}>
          <h1>لوازم یدکی دنا سواران ارومیه ! قطعه رو جستجو کن:</h1>
          <section className={styles.input}>
            <input type="text" placeholder="جـسـتـجـو در تـمـام قـطـعـات" />
            <a href={'#'} className={styles.searchBtn} variant="danger">
              <FaSearch className={styles.searchIcon} />
            </a>
          </section>
          <section className={styles.subtext}>
            <p>بیش از ۱۵۰ برند لوازم یدکی و ۶۰,۰۰۰ محصول</p>
            <p>مطمئن ترین خرید لوازم یدکی خودرو به ضمانت اصالت قطعه</p>
          </section>
          <hr className={styles.line} />
        </section>
        <section className={styles.text}>
          <h1>وب سایت </h1>
          <h1>
            <span>دنـــــا</span> سواران ارومیه
          </h1>
        </section>
      </section>
    </div>
  );
}
