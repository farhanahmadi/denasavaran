import React, { useState, useEffect } from "react";
import * as shamsi from "shamsi-date-converter";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

//import components
import { descreption } from "../function/TextLength";
import BlogSkeleton from "../SkeletonLoading/BlogSkeleton";
import SideBarFilter from "../Filter/SideBarFilter";

//bootstarp
import { Card } from "react-bootstrap";

//import styles
import styles from "./blog.module.css";

const index = ({ BlogsList, BlogsCategoris, filterHandler }) => {
  const router = useRouter();

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

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);
  return (
    <div className={styles.container}>
      <SideBarFilter
        load={load}
        blog={true}
        BlogsCategoris={BlogsCategoris}
        filterHandler={filterHandler}
      />

      <div className={styles.cardContainer}>
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
                        <a>ادامه مطلب</a>
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
