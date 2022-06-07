import React from "react";

//import styles
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <section className={styles.sideBar}>
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
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            اطلاعات حساب کاربری
          </li>
          <li className={styles.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            سفارش ها{" "}
          </li>
          <li className={styles.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            علاقه مندی ها
          </li>
          <li className={styles.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            مرجوعی
          </li>
          <li className={styles.listItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            خروج
          </li>
        </ul>
      </section>
      <main className={styles.mainBar}>
        <section className={styles.inputs}>
          <section className={styles.username}>
            <label>نام :</label>
            <input name="name" type="text" placeholder="نام " />
          </section>
          <section className={styles.lastname}>
            <label>نام خانوادگی :</label>
            <input name="lastName" type="text" placeholder="نام خانوادگی " />
          </section>
          <section className={styles.email}>
            <label>ایمیل :</label>
            <input name="email" type="text" placeholder="ایمیل " />
          </section>
          <section className={styles.nationalcode}>
            <label>کد ملی</label>
            <input name="nationalcode" type="text" placeholder="کد ملی" />
          </section>
          <section className={styles.address}>
            <label>آدرس :</label>
            <input name="address" type="text" placeholder="آدرس" />
          </section>
          <section className={styles.plate}>
            <label>پلاک :</label>
            <input name="plate" type="text" placeholder="پلاک" />
          </section>
          <section className={styles.zipcode}>
            <label>کد پستی :</label>
            <input name="zipcode" type="text" placeholder="کد پستی" />
          </section>
          <section className={styles.phone}>
            <label>شماره همراه :</label>
            <input name="phone" type="text" placeholder="شماره همراه" />
          </section>
        </section>
      </main>
    </div>
  );
}
