import React from "react";
import { useRouter } from "next/router";

//import styles
import styles from "./layout.module.css";

export default function Layout({ children }) {
  const router = useRouter();
  console.log(router.pathname);
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
          <li className={styles.listItem}>
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            اطلاعات حساب کاربری
          </li>
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
      <div className={router.pathname == "/Profile" ? styles.childrenMain : styles.children}>{children}</div>
    </div>
  );
}
