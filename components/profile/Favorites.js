import React from "react";
import { Table } from "react-bootstrap";
import Layout from "./Layout";
import Link from "next/link";
//import styles
import styles from "./favorites.module.css";

export default function Favorites() {
  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.miniNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            // strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          پروفایل / علاقه مندی ها
        </section>
        <section className={styles.List}>
          <section className={styles.listItem}>
            <section className={styles.image}>
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/dbf12462b752e214eefe83348e86f3116e8b4db0_1623130937.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                alt="name"
              />
            </section>
            <section className={styles.description}>
              <h3 className={styles.name}>
                کاور کی-دوو مدل Ares مناسب برای گوشی موبایل اپل IPhone 12/12pro
              </h3>
              <section className={styles.price}>
                <span>۳۱۹,۰۰۰ تومان</span>
              </section>
            </section>
            <section className={styles.btns}>
              <button className={styles.submit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  // strokeWidth="2"
                >
                  <path
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                اضافه به سبد خرید
              </button>
              <button className={styles.cancel}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  // strokeWidth="2"
                >
                  <path
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                حذف
              </button>
            </section>
          </section>
          <section className={styles.listItem}>
          <hr className={styles.line} />
            <section className={styles.image}>
              <img
                src="https://dkstatics-public.digikala.com/digikala-products/dbf12462b752e214eefe83348e86f3116e8b4db0_1623130937.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                alt="name"
              />
            </section>
            <section className={styles.description}>
              <h3 className={styles.name}>
                کاور کی-دوو مدل Ares مناسب برای گوشی موبایل اپل IPhone 12/12pro
              </h3>
              <section className={styles.price}>
                <span>۳۱۹,۰۰۰ تومان</span>
              </section>
            </section>
            <section className={styles.btns}>
              <button className={styles.submit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  // strokeWidth="2"
                >
                  <path
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                اضافه به سبد خرید
              </button>
              <button className={styles.cancel}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  // strokeWidth="2"
                >
                  <path
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                حذف
              </button>
            </section>
          </section>
        </section>
      </main>
    </Layout>
  );
}
