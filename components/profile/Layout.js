import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//import styles
import styles from "./layout.module.css";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <section
        className={
          router.pathname == "/Profile" ? styles.sideBarMain : styles.sideBar
        }
      >
        <section className={styles.userDetails}>
          <section className={styles.image}>
            <img src="/assets/images/logo.jpg" alt="profile" />
          </section>
          <section className={styles.userDetailsText}>
            <span className={styles.name}>فرحان احمدی</span>
            <span className={styles.phoneNumber}>۰۹۳۳۴۹۹۸۰۳۳</span>
          </section>
        </section>
        <hr className={styles.line} />
        <ul className={styles.list}>
          <Link href={"/Profile/personal-info"} passHref>
            <li className={styles.listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                style={{
                  width: "25px",
                  height: "25px",
                  stroke: "black",
                }}
              >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              اطلاعات حساب کاربری
            </li>
          </Link>
          <Link href={"/Profile/orders"} passHref>
            <li className={styles.listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                // strokeWidth="2"
              >
                <path
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              سفارش ها{" "}
            </li>
          </Link>
          <Link href={"/Profile/Favorites"} passHref>
            <li className={styles.listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                // strokeWidth="2"
              >
                <path
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              علاقه مندی ها
            </li>
          </Link>
          <Link href={"/Profile/returned"} passHref>
            <li className={styles.listItem}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                // strokeWidth="2"
              >
                <path
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              مرجوعی
            </li>
          </Link>
          <li className={styles.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              // strokeWidth="2"
            >
              <path
                // strokeLinecap="round"
                // strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            خروج
          </li>
        </ul>
      </section>
      <div
        className={
          router.pathname == "/Profile" ? styles.childrenMain : styles.children
        }
      >
        {children}
      </div>
    </div>
  );
}
