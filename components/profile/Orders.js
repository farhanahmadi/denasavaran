import React from "react";
import { Table } from "react-bootstrap";
import Layout from "./Layout";
import Link from "next/link";
//import styles
import styles from "./orders.module.css";

export default function Profile() {
  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.miniNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            // strokeWidth="2"
          >
            <path
              // strokeLinecap="round"
              // strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          پروفایل / لیست سفارشات
        </section>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">نام خریدار</th>
              <th scope="col">تاریخ</th>
              <th scope="col">مبلغ</th>
              <th scope="col">کد پیگیری</th>
              <th scope="col">جزئیات سفارش</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="ID">1</td>
              <td data-label="نام خریدار">فرحان احمدی</td>
              <td data-label="تاریخ">1400-03-25</td>
              <td data-label="مبلغ">26,000,000</td>
              <td data-label="کد پیگیری">100010010101001</td>
              <Link href={'#'} passHref><td data-label="جزئیات سفارش">مشاهده</td></Link>
            </tr>
            <tr>
              <td data-label="ID">2</td>
              <td data-label="نام خریدار">فرحان احمدی</td>
              <td data-label="تاریخ">1400-03-25</td>
              <td data-label="مبلغ">26,000,000</td>
              <td data-label="کد پیگیری">100010010101001</td>
              <Link href={'#'} passHref><td data-label="جزئیات سفارش">مشاهده</td></Link>
            </tr>
          </tbody>
        </table>
      </main>
    </Layout>
  );
}
