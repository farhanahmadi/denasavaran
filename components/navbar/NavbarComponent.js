import React, { useState } from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/js/bootstrap.js';
import styles from "./NavbarComponent.module.css";
import { Nav, Navbar, Container, Offcanvas, Button } from "react-bootstrap";
import Link from "next/link";
import { Fragment } from "react"; // import Fragment from React
import DropDown from "../dropDown/DropDown";
import NavbarCartHover from "./navbarCartHover";

const NavbarComponent = () => {
  const [dropDownclass, setDropDownclass] = useState(false);

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
        <Navbar
          id="mNavbar"
          bg="light"
          expand={false}
          className={styles.Navbar}
        >
          <Container fluid className={styles.containerFluid}>
            <Navbar.Brand href="#" className={styles.textLogo}>
              <img src="/assets/images/navbarlogo.png" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className={styles.navbarBtnToggle}
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header
                closeButton
                className={styles.navbarTop}
              ></Offcanvas.Header>
              {/* <Offcanvas.Header  className={styles.responsiveLogo}>
                        
                    </Offcanvas.Header> */}

              <hr className={styles.navHr} />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className={styles.mobileNavbarItems} href="#home">
                    <i class="fas fa-home"></i> خانه{" "}
                  </Nav.Link>
                  <Nav.Link className={styles.mobileNavbarItems} href="#link">
                    <i class="fas fa-car"></i> درباره ما
                  </Nav.Link>
                  <Nav.Link className={styles.mobileNavbarItems} href="#link">
                    <i class="fas fa-hands-helping"></i> درخواست مشاوره
                  </Nav.Link>
                  <Nav.Link className={styles.mobileNavbarItems} href="#link">
                    <i class="fas fa-phone"></i> تماس با ما
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
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
                <span style={{ width: "30px" , margin: '0px 2%' }}>
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
                    <i className="fas fa-shopping-cart"></i> محصولات
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
