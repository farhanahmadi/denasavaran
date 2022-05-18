import React, { useEffect, useState } from "react";

//import styles
import styles from "./products.module.css";

//import components
import ProductsSkeleton from "../SkeletonLoading/ProductsSkeleton";

//bootstarp
import { Dropdown, DropdownButton, Card, Button } from "react-bootstrap";

const index = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [activeSort, setActiveSort] = useState("all");
  const [load, setLoad] = useState(false);
  const categoryHandler = (event) => {
    if (event.target.innerText !== "همه مقالات") {
      setActiveSort(event.target.innerText);
    } else {
      setActiveSort("all");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  return (
    <>
      <section className={styles.categoryContainer}>
        <ul className={styles.categoryUl}>
          <li>
            <i class="fas fa-sort-amount-down"></i> دسته بندی:
          </li>
          <li
            onClick={categoryHandler}
            className={`${styles.categoryLi} ${
              activeSort === "all" && styles.activeLi
            } `}
          >
            همه محصولات
          </li>
          <li
            onClick={categoryHandler}
            className={`${styles.categoryLi} ${
              activeSort === "موتوری" && styles.activeLi
            } `}
          >
            موتوری
          </li>
          <li
            onClick={categoryHandler}
            className={`${styles.categoryLi} ${
              activeSort === "بدنه" && styles.activeLi
            } `}
          >
            بدنه
          </li>
          <li
            onClick={categoryHandler}
            className={`${styles.categoryLi} ${
              activeSort === "برقی" && styles.activeLi
            } `}
          >
            برقی
          </li>
        </ul>
        <section className={styles.dropdown}>
          <DropdownButton
            className={styles.dropdownBtn}
            id="dropdown-basic-button"
            title="دسته بندی"
            dir="rtl"
            variant="Secondary"
          >
            <Dropdown.Item className={styles.dropdownItem} href="#/action-1">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "all" && styles.activeDropdowm
                } `}
              >
                همه محصولات
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-2">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "engin" && styles.activeDropdowm
                } `}
              >
                موتوری
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                برقی
              </li>
            </Dropdown.Item>
          </DropdownButton>
        </section>
      </section>
      <section className={styles.main}>
        {load
          ? data.map((item) => (
              <section className={styles.card}>
                <section className={styles.headImage}>
                  <img
                    className={styles.offertImage}
                    src="/assets/images/offerHead.svg"
                    alt="offer"
                  />
                </section>
                <section className={styles.image}>
                  <img
                    className={styles.productImage}
                    src="/assets/images/product.jpg"
                    alt="products"
                  />
                </section>
                <section className={styles.title}>
                  <h1 className={styles.titleText}>
                    صفحه کلاج اورجینال پژو والوو تقویت یافته
                  </h1>
                  <p className={styles.seller}>
                    فروشنده: لوازم یدکی یدچی{" "}
                    <i
                      style={{ color: "#18b4d1" }}
                      className="fas fa-store"
                    ></i>
                  </p>
                </section>
                <section className={styles.price}>
                  <h4 className={styles.mainPrice}>۱۲,۵۰۰,۰۰۰</h4>
                  <p className={styles.discountPercent}>۱۰%</p>
                </section>
                <p className={styles.priceBeforeDiscount}>۱۵,۵۰۰,۰۰۰</p>
              </section>
            ))
          : data.map((item) => <ProductsSkeleton />)}
      </section>
    </>
  );
};

export default index;
