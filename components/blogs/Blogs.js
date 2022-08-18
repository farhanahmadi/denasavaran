import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as shamsi from "shamsi-date-converter";

//* import components
import BlogsCart from "./BlogsCart";

//import styles
import styles from "./blogsDetails.module.css";

const Blogs = ({ Blog }) => {
 
  return (
    <React.Fragment>
      <div className={styles.container}>
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
            src={
              Blog.title_image
                ? Blog.title_image
                : "/assets/images/navbarlogo.png"
            }
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
      <div className={styles.relatedBlogs}>
        <section className={styles.relatedBlogsHeader}>
          <h2>پست های مشابه</h2>
          <hr />
        </section>
       {/* <BlogsCart /> */}
      </div>
    </React.Fragment>
  );
};

export default Blogs;
