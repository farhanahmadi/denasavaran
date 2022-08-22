import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";

//* import icons
import { BsArrowRight } from "react-icons/bs/index";
import { BsBag } from "react-icons/bs/index";
import { HiOutlineTrash } from "react-icons/hi/index";

//import styles
import styles from "./favorites.module.css";

export default function Favorites({ userFavorites }) {
  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.miniNav}>
          <BsArrowRight className="icon" />
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
                <h3 className={styles.name}>{fav.product.name}</h3>
                <section className={styles.price}>
                  <span>
                    {fav.product.discount_percent
                      ? fav.product.price_after_discount
                      : fav.product.price}{" "}
                    تومان
                  </span>
                </section>
              </section>
              <section className={styles.btns}>
                <button className={styles.submit}>
                  <BsBag className="icon" />
                  اضافه به سبد خرید
                </button>
                <button className={styles.cancel}>
                  <HiOutlineTrash />
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
