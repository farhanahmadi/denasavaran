import React from "react";
import styles from "./Footer.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <section className={styles.topSection} dir="rtl">
        <section className={styles.footerDescriptionImg}>
          <Image
            src="/assets/images/express-delivery.svg"
            alt="express-delivery"
            width="80"
            height="80"
          />
          <p className={styles.topSectionP}>ارسال سریع کالا</p>
        </section>
        <section className={styles.footerDescriptionImg}>
          <Image
            src="/assets/images/support.svg"
            alt="support"
            width="80"
            height="80"
          />
          <p className={styles.topSectionP}>پشتیبانی ۲۴ ساعته</p>
        </section>
        <section className={styles.footerDescriptionImg}>
          <Image
            src="/assets/images/days-return.svg"
            alt="days-return"
            width="80"
            height="80"
          />
          <p className={styles.topSectionP}>هفت رو ضمانت بازگشت کالا</p>
        </section>
        <section className={styles.footerDescriptionImg}>
          <Image
            src="/assets/images/original-products.svg"
            alt="original-products"
            width="80"
            height="80"
          />
          <p className={styles.topSectionP}>ضمانت اصالت کالا</p>
        </section>
      </section>
      <section className={styles.betweenSection}>
        <hr />
      </section>
      <section className={styles.endSection} dir="rtl">
        <section className={styles.articleLinksSection}>
          <section className={styles.articleLinks}>
            <h3>تیتر مطالب</h3>
            <ul>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
            </ul>
          </section>
          <section className={styles.articleLinks}>
            <h3>تیتر مطالب</h3>
            <ul>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
            </ul>
          </section>
          <section className={styles.articleLinks}>
            <h3>تیتر مطالب</h3>
            <ul>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
              <li>متن تست میباشد</li>
            </ul>
          </section>
        </section>
        <section className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder=" جــســتــجــو در ســایــت"
          />
          <a variant="danger" className={styles.searchBarBtn}>
            <i className="fas fa-search" style={{ color: "#fff" }}></i>
          </a>
          <p className={styles.searchInputP}>
            شبکه های اجتماعی دنا سواران ارومیه
          </p>
          <ul className={styles.iconsUl}>
            <li>
              <a>
                <img src="/assets/svg/telegram.svg" alt="telegram" />
              </a>
            </li>
            <li>
              <a>
                <img src="/assets/svg/instagram.svg" alt="instagram" />
              </a>
            </li>
            <li>
              <a>
                <img src="/assets/svg/aparat.svg" alt="aparat" />
              </a>
            </li>
            <li>
              <a>
                <img src="/assets/svg/youtube.svg" alt="youtube" />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Footer;
