import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import * as shamsi from "shamsi-date-converter";

//* import icons
import { BsArrowRight } from "react-icons/bs/index";

//import styles
import styles from "./orders.module.css";

export default function Profile({ userOrders }) {
  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.miniNav}>
          <BsArrowRight />
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
            {console.log(userOrders)}
            {userOrders.map((order) => (
              <tr key={order.id}>
                <td data-label="ID">1</td>
                <td data-label="نام خریدار">
                  {order.owner.first_name + " " + order.owner.last_name}
                </td>
                <td data-label="تاریخ">
                  {shamsi
                    .gregorianToJalali(order.payment_date.split("-"))
                    .join("-")}
                </td>
                <td data-label="مبلغ">{order.total_price}</td>
                <td data-label="کد پیگیری">{order.order_id}</td>
                <Link href={"#"} passHref>
                  <td data-label="جزئیات سفارش">مشاهده</td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}
