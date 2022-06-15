import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/js/bootstrap.js';
import styles from "./NavbarComponent.module.css";
import { Nav, Navbar, Container, Offcanvas, Button } from "react-bootstrap";
import Link from "next/link";
import { Fragment } from "react"; // import Fragment from React
import DropDown from "../dropDown/DropDown";
import NavbarCartHover from "./navbarCartHover";

const NavbarComponent = () => {
  const router = useRouter();
  const [dropDownclass, setDropDownclass] = useState(false);
  const [active, setActive] = useState(false);

  const dropdownHandler = () => {
    setDropDownclass(true);
  };
  const dropdownHandlerRemove = () => {
    setDropDownclass(false);
  };

  const [name, setName] = useState("محصولات");
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />
      </Head>
      <div className={styles.mobile}>
        <div className={styles.fixedNav}>
          <a href="#Home">
            <span
              style={
                router.pathname == "/"
                  ? { display: "block" }
                  : { display: "none" }
              }
              className={styles.arrow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </span>
          </a>
          <ul className={styles.navbarList}>
            <li onClick={() => setActive("home")}>
              <Link href={"#"} passHref>
                <span
                  className={
                    active === "home" ? styles.active : styles.notActive
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>{" "}
                  خانه
                </span>
              </Link>
            </li>
            <li onClick={() => setActive("content")}>
              <Link href={"#"} passHref>
                <span
                  className={
                    active === "content" ? styles.active : styles.notActive
                  }
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>{" "}
                  آرشیو مطالب
                </span>
              </Link>
            </li>
            <li onClick={() => setActive("shop")}>
              <Link href={"#"} passHref>
                <span
                  className={
                    active === "shop" ? styles.active : styles.notActive
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  فروشگاه
                </span>
              </Link>
            </li>
            <li onClick={() => setActive("club")}>
              <Link href={"#"} passHref>
                <span
                  className={
                    active === "club" ? styles.active : styles.notActive
                  }
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  عضویت در باشگاه
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <Navbar
          id="mNavbar"
          bg="light"
          expand={false}
          className={styles.Navbar}
        >
          <Container fluid className={styles.containerFluid}>
            <Navbar.Brand id='Home' href="#" className={styles.textLogo}>
              <img src="/assets/images/navbarlogo.png" alt="Logo" />
            </Navbar.Brand>
          </Container>
          <section className={styles.mobileNavbarBottom}>
            <section className={styles.mobileSearchBar}>
              <input type="text" placeholder="جستجو" />
              <a
                name="searchBtn"
                className={styles.mobileSearchBtn}
                variant="danger"
              >
                <i class="fas fa-search"></i>
              </a>
            </section>
            <section className={styles.mobileUserBtn}>
              <a>
                <i class="fas fa-users"></i>
              </a>
              <section className={styles.line}></section>
              <a>
                <i class="fas fa-shopping-bag"></i>
              </a>
            </section>
          </section>
        </Navbar>
      </div>
      <div id="computer" className={styles.computer}>
        <nav className={styles.mainNav}>
          <section className={styles.topNav}>
            <section className={styles.rightTopNav}>
              <section className={styles.logo}>
                <img src="/assets/images/navbarlogo.png" alt="Logo" />
              </section>
              <section className={styles.searchBar}>
                <input type="text" placeholder="جستجو" />
                <a className={styles.searchBtn} variant="danger">
                  <i className="fas fa-search" style={{ color: "#fff" }}></i>
                </a>
              </section>
            </section>
            <section className={styles.leftTopNav}>
              <Link href={"/auth/login/"}>
                <span style={{ width: "30px", margin: "0px 2%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    style={{ stroke: "#424750" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
              </Link>
              <section className={styles.line}></section>
              <span className={styles.shppingBtn} variant="warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width={1.5}
                  style={{ stroke: "#424750" }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <section className={styles.cartHeader}>
                  <NavbarCartHover />
                </section>
              </span>
            </section>
          </section>
          <section className={styles.bottomNav}>
            <ul className={styles.navbarUl}>
              <li>
                <Link href="/">
                  <a>
                    <i class="fas fa-home"></i> خانه{" "}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a>
                    <i class="fas fa-archive"></i> آرشیو مطالب{" "}
                  </a>
                </Link>
              </li>
              <li
                id="shoppingBtn"
                onMouseEnter={dropdownHandler}
                onMouseLeave={dropdownHandlerRemove}
              >
                <Link href="/products/">
                  <a>
                    <i className="fas fa-shopping-cart"></i> فروشگاه
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Join_Us">
                  <a>
                    <i class="fas fa-plus-circle"></i> ثبت نام در باشگاه
                  </a>
                </Link>{" "}
              </li>
            </ul>
          </section>
          <section
            onMouseEnter={dropdownHandler}
            onMouseLeave={dropdownHandlerRemove}
            className={
              dropDownclass ? styles.dropdownBlock : styles.dropdownNone
            }
          >
            <DropDown />
          </section>
        </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
