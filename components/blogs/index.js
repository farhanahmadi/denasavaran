import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//import components
import BlogSkeleton from "../SkeletonLoading/BlogSkeleton";
import SideBarFilter from "../Filter/SideBarFilter";
import BlogsCart from "./BlogsCart";


//import styles
import styles from "./blog.module.css";

const index = ({ BlogsList, BlogsCategoris, filterHandler }) => {
  const router = useRouter();

  const currentPage = Number(router.query.page);
  const pageCount = Math.round(BlogsList.count / 20);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  const paginationHandler = (event, page) => {
    router.query.page = page;
    router.push({ pathname: router.pathname, query: router.query }, undefined, {
      scroll: false,
    });
  };

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
              <BlogsCart key={item.id} item={item} />
            ))
          : BlogsList.results.map((item, index) => (
              <div key={item.id}>
                <BlogSkeleton />
              </div>
            ))}
        {pageCount ? (
          <div className={styles.pagination}>
            <Pagination
              count={pageCount}
              page={currentPage || 1}
              onChange={paginationHandler}
              color="primary"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default index;
