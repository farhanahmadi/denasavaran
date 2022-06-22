import React, { useState, useEffect } from "react";
import * as shamsi from "shamsi-date-converter";
import Link from "next/link"

//import components
import { descreption } from "../function/TextLength";
import BlogSkeleton from "../SkeletonLoading/BlogSkeleton";

//bootstarp
import { Dropdown, DropdownButton, Card, Button } from "react-bootstrap";

//import styles
import styles from "./blog.module.css";

const index = ({ BlogsList }) => {
  const [activeSort, setActiveSort] = useState("all");
  const [isLoad, setIsLoad] = useState(true);
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
            همه مقالات
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
                همه مقالات
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
      <div className={styles.cardContainer}>
        {load
          ? activeSort === "all"
            ? BlogsList.results.map((item, index) => (
                <section key={index} className={styles.card}>
                  <Card className={styles.cardMain}>
                    <Card.Img
                      variant="top"
                      src={item.thumbnail}
                      className={styles.cardImg}
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
                        href={`/blogs/name=${item.title.split(" ").join("_")}?id=${item.id}`}
                        passHref
                      >
                        <Button
                          className={styles.detailsBtn}
                          variant="outline-danger"
                        >
                          ادامه مطلب
                        </Button>
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
                          <Button
                            className={styles.detailsBtn}
                            variant="danger"
                          >
                            ادامه مطلب
                          </Button>
                        </Card.Body>
                      </Card>
                    </section>
                  )
              )
          : data.map((item, index) => (
              <div key={index}>
                <BlogSkeleton />
              </div>
            ))}
      </div>
    </div>
  );
};

export default index;
