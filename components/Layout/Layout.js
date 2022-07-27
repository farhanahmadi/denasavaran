import React, { useState } from "react";
import Filter from "../Filter/Filter";

//import components
import NavbarComponent from "../navbar/NavbarComponent";
import Footer from "../footer/Footer";
import styles from "./navbar.module.css";

const Layout = ({ children, profile, filterStatus , tags , categoriesList , filterHandler}) => {
  if (filterStatus) {
    return <Filter tags={tags} categories={categoriesList} filterHandler={filterHandler} />;
  }

  return (
    <>
      <NavbarComponent />
      <div className={styles.container}>{children}</div>
      {!profile ? <Footer /> : null}
    </>
  );
};

export default Layout;
