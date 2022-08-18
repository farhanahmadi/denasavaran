import React from "react";
import Layout from "./Layout";

//import styles
import styles from "./returned.module.css";

//* import icons
import { BsArrowRight } from "react-icons/bs/index";

export default function Returned() {
  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.miniNav}>
          <BsArrowRight />
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
