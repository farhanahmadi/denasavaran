import React from "react";
import Layout from "./Layout";

//import styles
import styles from "./returned.module.css";

export default function Returned() {
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
          پروفایل / مرجوعی
        </section>
        <hr />
        <section className={styles.inputs}>
          <section className={styles.selectBox}>
            <select>
              <option hidden>انتخاب محصول</option>
              <option>ساعت هوشمند اپل</option>
              <option>ایفون 13 پرومکس</option>
            </select>
          </section>
          <section className={styles.textarea}>
            <label>توضیحات مرجوعی</label>
            <textarea
              rows={10}
              placeholder="توضیحات خود را وارد کنید"
            ></textarea>
          </section>
          <section className={styles.btn}>
            <button className={styles.submit}>ذخیره اطلاعات</button>
          </section>
        </section>
      </main>
    </Layout>
  );
}
