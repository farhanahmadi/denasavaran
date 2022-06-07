import React from "react";

//import components
import NavbarComponent from "../navbar/NavbarComponent";
import Footer from "../footer/Footer";
import styles from "./navbar.module.css"

const Layout = ({ children , profile }) => {
  return (
    <>
      <NavbarComponent />

      <div className={styles.container}>{children}</div>
      {!profile ?  <Footer /> : null}
    </>
  );
};

export default Layout;
