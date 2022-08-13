import React, { useState } from "react";
import Filter from "../Filter/Filter";

//import components
import NavbarComponent from "../navbar/NavbarComponent";
import Footer from "../footer/Footer";
import styles from "./navbar.module.css";
import Jumbotron from "../jumbotron/Jumbotron";

const Layout = ({
  children,
  profile,
  filterStatus,
  blog,
  filterList,
  filterHandler,
}) => {
  if (filterStatus) {
    return (
      <Filter
        filterList={filterList}
        filterStatus={filterStatus}
        filterHandler={filterHandler}
        blog={blog}
      />
    );
  }

  return (
    <>
      <NavbarComponent />
      <Jumbotron />
      <div className={styles.container}>{children}</div>
      {!profile ? <Footer /> : null}
    </>
  );
};

export default Layout;
