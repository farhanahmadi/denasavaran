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
            src="/assets/images/online-reservation.png"
            alt="online-Reservation"
            width="80"
            height="80"
          />
          <p className={styles.topSectionP}>رزور وقت انلاین</p>
        </section>
        <section className={styles.footerDescriptionImg}>
          <Image
            src="/assets/images/Followup.png"
            alt="Follow-up"
            width="80"
            height="80"
          />
          <p className={styles.topSectionP}>پیگیری سفارشات</p>
        </section>
        <section className={styles.footerDescriptionImg}>
          <Image
            src="/assets/images/website.png"
            alt="Repairs"
            width="80"
            height="80"
          />
          <p className={styles.topSectionP}>مشاوره خودرویی</p>
        </section>
        <section className={styles.footerDescriptionImg}>
          <Image
            src="/assets/images/join.png"
            alt="join"
            width="80"
            height="80"
          />
          <p className={styles.topSectionP}>عضویت در باشگاه</p>
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
