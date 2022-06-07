import React from "react";
import { Table } from "react-bootstrap";
import Layout from "./Layout";
import Link from 'next/link'
//import styles
import styles from "./orders.module.css";

export default function Profile() {
  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.miniNav}>
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          پروفایل / لیست سفارشات
        </section>
        <section className={styles.table}>
          <table className={styles.mainTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>نام خریدار</th>
                <th>تاریخ</th>
                <th>کد پیگیری</th>
                <th>مبلغ</th>
                <th>جزئیات سفارش</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>فرحان</td>
                <td>1401/03/20</td>
                <td>1000100101101</td>
                <td>26,000,00</td>
                <td><Link href="#">مشاهده</Link></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </Layout>
  );
}
