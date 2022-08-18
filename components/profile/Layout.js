import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//import styles
import styles from "./layout.module.css";

//* import icons
import { CgProfile } from "react-icons/cg/index";
import { BsBag, BsHeart } from "react-icons/bs/index";
import { TbTruckReturn } from "react-icons/tb/index";
import { MdExitToApp } from "react-icons/md/index";

//* context
import { useAuth , useAuthActions } from "../context/AuthContextProvider";

export default function Layout({ children }) {
  const router = useRouter();

  const {user} = useAuth();
  const userAction = useAuthActions();
  const logout = () => {
    userAction({ type: "SIGNOUT" });
  };

  return (
    <div className={styles.container}>
      <section
        className={
          router.pathname == "/profile" ? styles.sideBarMain : styles.sideBar
        }
      >
        <section className={styles.userDetails}>
          <section className={styles.image}>
            <img src="/assets/images/logo.jpg" alt="profile" />
          </section>
          <section className={styles.userDetailsText}>
            <span className={styles.name}>{user.first_name ? user.first_name + " " + user.last_name : "کاربر جدید"}</span>
            <span className={styles.phoneNumber}>{user.email}</span>
          </section>
        </section>
        <hr className={styles.line} />
        <ul className={styles.list}>
          <Link href={"/profile/personal-info"} passHref>
            <li className={styles.listItem}>
              <CgProfile className="icon" />
              اطلاعات حساب کاربری
            </li>
          </Link>
          <Link href={"/profile/orders"} passHref>
            <li className={styles.listItem}>
              <BsBag className="icon" />
              سفارش ها{" "}
            </li>
          </Link>
          <Link href={"/profile/Favorites"} passHref>
            <li className={styles.listItem}>
              <BsHeart className="icon" />
              علاقه مندی ها
            </li>
          </Link>
          <Link href={"/profile/returned"} passHref>
            <li className={styles.listItem}>
              <TbTruckReturn className="icon" />
              مرجوعی
            </li>
          </Link>
          <li onClick={logout} className={styles.listItem}>
            <MdExitToApp className="icon" />
            خروج
          </li>
        </ul>
      </section>
      <div
        className={
          router.pathname == "/profile" ? styles.childrenMain : styles.children
        }
      >
        {children}
      </div>
    </div>
  );
}
