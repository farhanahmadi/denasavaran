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
  const [load, setLoad] = useState(false);


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
                      <p className={styles.badge}>{item.news_category.name}</p>
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
