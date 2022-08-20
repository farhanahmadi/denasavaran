import React from "react";
import * as shamsi from "shamsi-date-converter";
import Link from "next/link";
import Image from "next/image";

//import components
import { descreption } from "../function/TextLength";

//bootstarp
import { Card } from "react-bootstrap";

//import styles
import styles from "./blog.module.css";

export default function BlogsCart({item}) {
  return (
    <section key={item.id} className={styles.card}>
      <Card className={styles.cardMain}>
        <Image
          src={
            item.thumbnail ? item.thumbnail : "/assets/images/navbarlogo.png"
          }
          alt={item.title}
          width="288"
          height="240"
        />
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{item.title}</Card.Title>
          <hr />
          <Card.Text className={styles.cardBody}>
            {descreption(item.summery) + " ..."}
          </Card.Text>
          <p className={styles.writer}>
            {`نویسنده: ${item.author.first_name} ${item.author.last_name}`}
          </p>
          <p className={styles.date}>
            {shamsi.gregorianToJalali(item.created_at.split("-")).join("-")}
          </p>
          <section className={styles.badgeSection}>
            <p className={styles.badge}>{item.news_category.name}</p>
          </section>
          <Link
            href={`/blogs/${item.id}/${item.title.split(" ").join("-")}`}
            passHref
          >
            <a style={{textDecoration: 'none'}}>ادامه مطلب</a>
          </Link>
        </Card.Body>
      </Card>
    </section>
  );
}
