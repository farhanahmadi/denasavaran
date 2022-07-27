import React, { useState, useEffect } from "react";
import * as shamsi from "shamsi-date-converter";
import Link from "next/link";
import Image from "next/image";

//import components
import { descreption } from "../function/TextLength";
import BlogSkeleton from "../SkeletonLoading/BlogSkeleton";

//bootstarp
import { Dropdown, DropdownButton, Card, Button } from "react-bootstrap";

//import styles
import styles from "./blog.module.css";

const index = ({ BlogsList }) => {
  const [activeSort, setActiveSort] = useState("all");
  const [load, setLoad] = useState(false);

  const data = [
    {
      image: "/assets/images/card1.jpg",
      name: "لورم ایپسان",
      body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در",
      writer: "فرحان احمدی",
      date: "1400-2-20",
      category: "موتوری",
    },
    {
      image: "/assets/images/card1.jpg",
      name: "لورم ایپسان",
      body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در",
      writer: "فرحان احمدی",
      date: "1400-2-20",
      category: "موتوری",
    },
    {
      image: "/assets/images/card1.jpg",
      name: "لورم ایپسان",
      body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در",
      writer: "فرحان احمدی",
      date: "1400-2-20",
      category: "بدنه",
    },
    {
      image: "/assets/images/card1.jpg",
      name: "لورم ایپسان",
      body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در",
      writer: "فرحان احمدی",
      date: "1400-2-20",
      category: "بدنه",
    },
    {
      image: "/assets/images/card1.jpg",
      name: "لورم ایپسان",
      body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در",
      writer: "فرحان احمدی",
      date: "1400-2-20",
      category: "بدنه",
    },
    {
      image: "/assets/images/card1.jpg",
      name: "لورم ایپسان",
      body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در",
      writer: "فرحان احمدی",
      date: "1400-2-20",
      category: "برقی",
    },
    {
      image: "/assets/images/card1.jpg",
      name: "لورم ایپسان",
      body: "اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در",
      writer: "فرحان احمدی",
      date: "1400-2-20",
      category: "برقی",
    },
  ];

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
          {/* {tags.map((tag) => (
            <li key={tag.id}>
              <label className={styles.Filtercontainer}>
                {tag.name}
                <input
                  value={tag.id}
                  type="checkbox"
                  onClick={tagHandler}
                  checked={
                    tagsState.indexOf(tag.id.toString()) >= 0 ? true : false
                  }
                />
                <span className={styles.checkmark}></span>
              </label>
            </li>
          ))} */}
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
          {/* {categories.map((category) => (
            <li key={category.id}>
              <label className={styles.Filtercontainer}>
                {category.name}
                <input
                  value={category.id}
                  type="checkbox"
                  onClick={filterCategoryHandler}
                  checked={
                    categoriesState.indexOf(category.id.toString()) >= 0
                      ? true
                      : false
                  }
                />
                <span className={styles.checkmark}></span>
              </label>
            </li>
          ))} */}
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

      <div className={styles.cardContainer}>
        {console.log(BlogsList)}
        {load
          ? activeSort === "all"
            ? BlogsList.results.map((item, index) => (
                <section key={index} className={styles.card}>
                  <Card className={styles.cardMain}>
                    <Image
                      src={
                        item.thumbnail
                          ? item.thumbnail
                          : "/assets/images/navbarlogo.png"
                      }
                      alt={item.title}
                      width="288"
                      height="240"
                    />
                    <Card.Body>
                      <Card.Title className={styles.cardTitle}>
                        {item.title}
                      </Card.Title>
                      <hr />
                      <Card.Text className={styles.cardBody}>
                        {descreption(item.summery) + " ..."}
                      </Card.Text>
                      <p className={styles.writer}>
                        {`نویسنده: ${item.author.first_name} ${item.author.last_name}`}
                      </p>
                      <p className={styles.date}>
                        {shamsi
                          .gregorianToJalali(item.created_at.split("-"))
                          .join("-")}
                      </p>
                      <section className={styles.badgeSection}>
                        <p className={styles.badge}>
                          {item.news_category.name}
                        </p>
                      </section>
                      <Link
                        href={`/blogs/${item.id}/${item.title
                          .split(" ")
                          .join("-")}`}
                        passHref
                      >
                        <a>
                          ادامه مطلب
                        </a>
                      </Link>
                    </Card.Body>
                  </Card>
                </section>
              ))
            : data.map(
                (item, index) =>
                  item.category === activeSort && (
                    <section key={index} className={styles.card}>
                      <Card className={styles.cardMain}>
                        <Card.Img
                          variant="top"
                          src={item.image}
                          className={styles.cardImg}
                        />
                        <Card.Body>
                          <Card.Title className={styles.cardTitle}>
                            {item.name}
                          </Card.Title>
                          <Card.Text className={styles.cardBody}>
                            {descreption(item.body) + " ..."}
                          </Card.Text>
                          <p className={styles.writer}>
                            {`نویسنده: ${item.writer}`}
                          </p>
                          <p className={styles.date}>{item.date}</p>
                          <section className={styles.badgeSection}>
                            <p className={styles.badge}>{item.category}</p>
                          </section>
                          <Link href={`/blogs/${item.id}`}>
                            <a>ادامه مطلب</a>
                          </Link>
                        </Card.Body>
                      </Card>
                    </section>
                  )
              )
          : BlogsList.results.map((item, index) => (
              <div key={index}>
                <BlogSkeleton />
              </div>
            ))}
      </div>
    </div>
  );
};

export default index;
