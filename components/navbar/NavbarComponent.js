import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

//?import modules
import toast from "react-hot-toast";

//?import components
import NavbarCartHover from "./navbarCartHover";
import { cartContext } from "../context/CartContextProvider";
import { useAuth, useAuthActions } from "../context/AuthContextProvider";

//? import icons
import { HiChevronUp } from "react-icons/hi/index";
import { MdOutlineArticle, MdOutlineExitToApp } from "react-icons/md/index";
import { RiShoppingBasket2Line } from "react-icons/ri/index";
import { AiOutlineUsergroupAdd, AiOutlineHome } from "react-icons/ai/index";
import { BiUser } from "react-icons/bi/index";
import { CgProfile } from "react-icons/cg/index";
import axios from "axios";

//?import styles
import styles from "./NavbarComponent.module.css";

//?import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container } from "react-bootstrap";

const NavbarComponent = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [cartData, setCartData] = useState([]);

  const { state, dispatch } = useContext(cartContext);
  const { user } = useAuth();

  const userAction = useAuthActions();

  useEffect(() => {
    setCartData(state);
  }, [state]);

  const logout = () => {
    userAction({ type: "SIGNOUT" });
  };
  return (
    <>
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
              <HiChevronUp color="black" className={`icon ${styles.icons}`} />
            </span>
          </a>
          <ul className={styles.navbarList}>
            <li onClick={() => setActive("home")}>
              <Link href={"/"} passHref>
                <span
                  className={
                    active === "home" ? styles.active : styles.notActive
                  }
                >
                  <AiOutlineHome className={`icon ${styles.icons}`} /> خانه
                </span>
              </Link>
            </li>
            <li onClick={() => setActive("content")}>
              <Link href={"/blogs"} passHref>
                <span
                  className={
                    active === "content" ? styles.active : styles.notActive
                  }
                >
                  <MdOutlineArticle className={`icon ${styles.icons}`} /> وبلاگ
                </span>
              </Link>
            </li>
            <li onClick={() => setActive("shop")}>
              <Link href={"/products"} passHref>
                <span
                  className={
                    active === "shop" ? styles.active : styles.notActive
                  }
                >
                  <RiShoppingBasket2Line className={`icon ${styles.icons}`} />
                  فروشگاه
                </span>
              </Link>
            </li>
            <li onClick={() => setActive("club")}>
              <Link href={"/Join_Us"} passHref>
                <span
                  className={
                    active === "club" ? styles.active : styles.notActive
                  }
                >
                  <AiOutlineUsergroupAdd className={`icon ${styles.icons}`} />
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
            <Navbar.Brand id="Home" href="#" className={styles.textLogo}>
              <Image
                src="/assets/images/navbarlogo.png"
                alt="Logo"
                width="268"
                height="40"
              />
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
                <i className="fas fa-search"></i>
              </a>
            </section>
            <section className={styles.mobileUserBtn}>
              <a>
                <i className="fas fa-users"></i>
              </a>
              <section className={styles.line}></section>
              <a>
                <i className="fas fa-shopping-bag"></i>
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
                <Image
                  src="/assets/images/navbarlogo.png"
                  alt="Logo"
                  width="300"
                  height="44"
                />
              </section>
              <section className={styles.searchBar}>
                <input type="text" placeholder="جستجو" />
                <a className={styles.searchBtn} variant="danger">
                  <i className="fas fa-search" style={{ color: "#fff" }}></i>
                </a>
              </section>
            </section>
            <section className={styles.leftTopNav}>
              <Link href={user ? "#" : "/auth/login/"}>
                <span className={styles.user}>
                  <BiUser className={`icon ${styles.icons}`} />
                  {user ? (
                    <section className={styles.profileSection}>
                      <section className={styles.userDetails}>
                        <section className={styles.userImg}>
                          <img src="/assets/images/logo.jpg" alt="profile" />
                        </section>
                        <section className={styles.userDetailsText}>
                          <span className={styles.userName}>
                            {user.first_name
                              ? user.first_name + " " + user.last_name
                              : "کاربر جدید"}
                          </span>
                          <span className={styles.userEmail}>{user.email}</span>
                        </section>
                      </section>
                      <hr style={{ margin: "1rem 0 0 0 " }} />
                      <ul>
                        <li>
                          <Link href={`/profile`}>
                            <a>
                              <CgProfile
                                color="var(--lightBlack)"
                                className={styles.icon}
                              />{" "}
                              پروفایل{" "}
                            </a>
                          </Link>
                        </li>
                        <hr style={{ width: "80%", margin: "0 auto" }} />
                        <li onClick={logout}>
                          <MdOutlineExitToApp
                            color="var(--lightBlack)"
                            className={styles.icon}
                          />
                          خروج
                        </li>
                      </ul>
                    </section>
                  ) : null}
                </span>
              </Link>
              <section className={styles.line}></section>
              <span className={styles.shppingBtn} variant="warning">
                <RiShoppingBasket2Line className={`icon ${styles.icons}`} />
                {/* {cartData.products && cartData.products.length ? ( */}
                <section className={styles.cartHeader}>
                  <NavbarCartHover />
                </section>
                {/* ) : null} */}
                {/* {localStorage.getItem("userCartItems") (
                )} */}
              </span>
            </section>
          </section>
          <section className={styles.bottomNav}>
            <hr className={styles.Hrline} />
            <ul className={styles.navbarUl}>
              <li>
                <Link href="/">
                  <a>خانه</a>
                </Link>
              </li>
              <li>
                <Link href="/products/">
                  <a>فروشگاه</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a>وبلاگ</a>
                </Link>
              </li>
              <li>
                <Link href="/Join_Us">
                  <a>ثبت نام در باشگاه</a>
                </Link>{" "}
              </li>
            </ul>
          </section>
          {/* <section
            onMouseEnter={dropdownHandler}
            onMouseLeave={dropdownHandlerRemove}
            className={
              dropDownclass ? styles.dropdownBlock : styles.dropdownNone
            }
          >
            <DropDown categoriesList={categoriesList} />
          </section> */}
        </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
