import React from "react";
import Layout from "./Layout";

//import styles
import styles from "./PersonalInfo.module.css";

export default function Profile() {
  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.miniNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          پروفایل / اطلاعات حساب کاربری
        </section>
        <hr />
        <section className={styles.alert}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          برای بهتر مدیریت کردن سفارشات خود لطفا اطلاعات حساب خود را تکمیل کنید
        </section>
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
          <section className={styles.btn}>
            <button className={styles.submit}>ذخیره اطلاعات</button>
          </section>
        </section>
      </main>
    </Layout>
  );
}
