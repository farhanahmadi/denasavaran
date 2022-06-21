import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as shamsi from "shamsi-date-converter";

//import styles
import styles from "./blogsDetails.module.css";

const Blogs = ({ Blog }) => {
  return (
    <div className={styles.container}>
      {console.log(Blog)}
      <section className={styles.title}>
        <h1>{Blog.title}</h1>
        <hr />
        <section className={styles.miniTitle}>
          <p>
            نویسنده : {Blog.author.first_name}
            {Blog.author.last_name}
          </p>
          <span> - </span>
          <p>
            تاریخ :{" "}
            {shamsi.gregorianToJalali(Blog.created_at.split("-")).join("-")}
          </p>
          <span> - </span>
          <p>دسته بندی : {Blog.news_category.name}</p>
        </section>
      </section>
      <section className={styles.porster}>
        <Image
          src={Blog.title_image}
          alt={Blog.title}
          width="1100"
          height="500"
        />
      </section>
      <section className={styles.main}>
        <div
          className="product-des"
          dangerouslySetInnerHTML={{ __html: Blog.body }}
        ></div>
      </section>
    </div>
  );
};

export default Blogs;
