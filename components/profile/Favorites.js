import React from "react";
import { Table } from "react-bootstrap";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image"

//import styles
import styles from "./favorites.module.css";

export default function Favorites({ userFavorites }) {
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
          {userFavorites.map((fav) => (
            <section className={styles.listItem}>
              <section className={styles.image}>
                <Image
                  src={fav.product.thumbnail}
                  alt={fav.product.name}
                  width="150"
                  height="150"
                />
              </section>
              <section className={styles.description}>
                <h3 className={styles.name}>
                  {fav.product.name}
                </h3>
                <section className={styles.price}>
                  <span>{fav.product.discount_percent ? fav.product.price_after_discount : fav.product.price} تومان</span>
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
          ))}
        </section>
      </main>
    </Layout>
  );
}
