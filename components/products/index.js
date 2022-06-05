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
    <div className={styles.container}>
      <section className={load ? styles.sideBar : styles.skeletonSidebar}>
        <br />
        <div className={styles.filterText}>
          <i
            style={{ color: "#EF233C" }}
            className="fas fa-sort-amount-down"
          ></i>{" "}
          فیلتر بر اساس نوع ماشین
        </div>
        <ul className={styles.carFilter}>
          <li>
            <label className={styles.Filtercontainer}>
              دنا
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
          <li>
            <label className={styles.Filtercontainer}>
              پژو
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
          <li>
            <label className={styles.Filtercontainer}>
              رانا
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
          <li>
            <label className={styles.Filtercontainer}>
              سمند
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
          <li>
            <label className={styles.Filtercontainer}>
              پراید
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
        </ul>
        {/* ////////////// */}
        <div className={styles.filterText}>
          <i
            style={{ color: "#EF233C" }}
            className="fas fa-sort-amount-down"
          ></i>{" "}
          فیلتر بر اساس نوع قطعه
        </div>
        <ul className={styles.carFilter}>
          <li>
            <label className={styles.Filtercontainer}>
              قطعات برقی
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
          <li>
            <label className={styles.Filtercontainer}>
              روغن موتور
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
          <li>
            <label className={styles.Filtercontainer}>
              قطعات موتوری
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
          <li>
            <label className={styles.Filtercontainer}>
              بدنه
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
          <li>
            <label className={styles.Filtercontainer}>
              لوازم نگهداری
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
        </ul>
      </section>
      <section className={styles.categoryContainer}>
        <section className={styles.dropdown}>
          <DropdownButton
            className={styles.dropdownBtn}
            id="dropdown-basic-button"
            title="نوع ماشین"
            dir="rtl"
            variant="Secondary"
          >
            <Dropdown.Item className={styles.dropdownItem} href="#/action-1">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "all" && styles.activeDropdowm
                } `}
              >
                دنا
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-2">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "engin" && styles.activeDropdowm
                } `}
              >
                پژو
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                رانا
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                سمند
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                پراید
              </li>
            </Dropdown.Item>
          </DropdownButton>
          {/* //////////////////// */}
          <DropdownButton
            className={styles.dropdownBtn}
            id="dropdown-basic-button"
            title="نوع قطعه"
            dir="rtl"
            variant="Secondary"
          >
            <Dropdown.Item className={styles.dropdownItem} href="#/action-1">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "all" && styles.activeDropdowm
                } `}
              >
                قطعات برقی
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-2">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "engin" && styles.activeDropdowm
                } `}
              >
                روغن موتور
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                قطعات موتوری
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                بدنه
              </li>
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem} href="#/action-3">
              <li
                className={`${styles.categoryDropdown} ${
                  activeSort === "electronic" && styles.activeDropdowm
                } `}
              >
                لوازم نگهداری
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
    </div>
  );
};

export default index;
