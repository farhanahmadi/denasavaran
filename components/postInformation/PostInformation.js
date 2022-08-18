import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

//import styles
import styles from "./postInformation.module.css";

//import context
import { cartContext } from "../context/CartContextProvider";

//* import modules
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";

//*import components
import { ProvincesNames } from "../cities/ProvincesNames";
import { cities } from "../cities/cities";
import { BaseLink } from "../BaseLink/BaseLink";
import { useAuth } from "../context/AuthContextProvider";
import InputsComponent from "../profile/InputsComponent";

import { persianNumber } from "../function/PersianNumber";

//*import icons
import { MdOutlineShoppingCart, MdOutlinePayment } from "react-icons/md/index";
import { HiOutlineTruck } from "react-icons/hi/index";

export default function PostInformation() {
  const router = useRouter();
  const { state, dispatch } = useContext(cartContext);
  const { user, token } = useAuth();
  const [formValues, setFormValues] = useState(null);
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    state: "",
    city: "",
    address: "",
    plate: "",
    zip_code: "",
    phone_number: "",
  };

  const onSubmit = (values) => {
    dispatch({ type: "CHECKOUT" });
    toast.success("با تشکر از خرید شما");
    router.push("/");
  };

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .required("نام خود را وارد کنید")
      .min(3, "نام وارد شده باید بیشتر از ۳ کاراکتر باشد"),
    last_name: Yup.string()
      .required("نام خانوادگی خود را وارد کنید")
      .min(3, "نام خانوادگی وارد شده باید بیشتر از ۳ کاراکتر باشد"),
    email: Yup.string()
      .required("ایمیل خود را وارد کنید")
      .email("ایمیل وارد شده صحیح نمیباشد"),
    state: Yup.string().required("استان خود را انتخاب کنید"),
    city: Yup.string().required(" شهر خود را انتخاب کنید"),
    address: Yup.string()
      .required("آدرس خود را وارد کنید")
      .min(10, "آدرس وارد شده صحیح نمیباشد"),
    zip_code: Yup.string().required("کد پستی خود را وارد کنید"),
    phone_number: Yup.string()
      .required("شماره همراه خود را وارد کنید")
      .min(10, "شماره وارد شده صحیح نمیباشد")
      .max(11, "شماره وارد شده صحیح نمیباشد"),
  });

  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  useEffect(async () => {
    setFormValues(await user);
  }, [user]);

  return (
    <div className={styles.container}>
      <section className={styles.status}>
        <h1 className={styles.name}>دنــا ســواران ارومــیه</h1>
        <section className={styles.details}>
          <span className={styles.cart}>
            <MdOutlineShoppingCart color="var(--red)" size={20} />
            <h5 className={styles.statusH5}>سبد خرید</h5>
          </span>
          <span className={styles.post}>
            <HiOutlineTruck color="var(--red)" size={30} />
            <h5 className={styles.statusH5}>اطلاعات ارسال</h5>
          </span>
          <span className={styles.payment}>
            <MdOutlinePayment color="var(--deepgray)" size={20} />
            <h5 className={styles.statusH5}>پرداخت</h5>
          </span>
        </section>
      </section>
      <form onSubmit={formik.handleSubmit} className={styles.userDetails}>
        <section className={styles.inputs}>
          <InputsComponent
            className={"username"}
            label={"نام"}
            formik={formik}
            name={"first_name"}
            placeholder={"نام ..."}
          />
          <InputsComponent
            className={"lastname"}
            label={"نام خانوادگی"}
            formik={formik}
            name={"last_name"}
            placeholder={"نام خانوادگی ..."}
          />
          <InputsComponent
            className={"email"}
            label={"ایمیل"}
            formik={formik}
            name={"email"}
            placeholder={"ایمیل ..."}
          />
          <section className={styles.state}>
            <label>استان</label>
            <select
              name="state"
              className={styles.selects}
              {...formik.getFieldProps("state")}
            >
              {formik.values.state ? (
                <option
                  hidden
                  value={
                    ProvincesNames.find(
                      (province) => province.id == formik.values.state
                    ).id
                  }
                >
                  {
                    ProvincesNames.find(
                      (province) => province.id == formik.values.state
                    ).name
                  }
                </option>
              ) : (
                <option hidden>انتخاب استان</option>
              )}
              {ProvincesNames.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </section>
          <section className={styles.city}>
            <label>شهر</label>
            <select
              name="city"
              className={styles.selects}
              {...formik.getFieldProps("city")}
            >
              {formik.values.city ? (
                <option
                  hidden
                  value={
                    cities.find((city) => city.id == formik.values.city).id
                  }
                >
                  {cities.find((city) => city.id == formik.values.city).name}
                </option>
              ) : (
                <option hidden>انتخاب شهر</option>
              )}
              {cities.map(
                (city) =>
                  city.province_id == formik.values.state && (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  )
              )}
            </select>
          </section>
          <InputsComponent
            className={"address"}
            label={"آدرس"}
            formik={formik}
            name={"address"}
            placeholder={"آدرس..."}
          />
          <InputsComponent
            className={"plate"}
            label={"پلاک"}
            formik={formik}
            name={"plate"}
            placeholder={"پلاک..."}
          />
          <InputsComponent
            className={"zipcode"}
            label={"کد پستی"}
            formik={formik}
            name={"zip_code"}
            placeholder={"کد پستی ..."}
          />
          <InputsComponent
            className={"phone"}
            label={"شماره همراه"}
            formik={formik}
            name={"phone_number"}
            placeholder={"شماره همراه ..."}
          />
        </section>
        <hr className={styles.line} />
        <section className={styles.paymentDetails}>
          <section className={styles.ContinueShopping}>
            <section className={styles.quantitySection}>
              <span className={styles.paymentQuantityText}>تعداد کالاها :</span>
              <span className={styles.paymentQuantityNumber}>
                {persianNumber(
                  state.products.reduce(
                    (total, products) => total + products.quantity,
                    0
                  )
                )}
              </span>
            </section>
            <section className={styles.toalSection}>
              <span className={styles.totalText}>جمع سبد خرید :</span>
              <span className={styles.totalNumber}>
                {persianNumber(
                  state.products.reduce(
                    (total, products) =>
                      total +
                      products.quantity *
                        (products.discount_percent
                          ? products.price_after_discount
                          : products.price),
                    0
                  )
                )}{" "}
                تومان
              </span>
            </section>
            <p className={styles.sendPrice}>
              هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه
              می‌شود
            </p>
            <section className={styles.buyBtnSection}>
              <button type="submit" className={styles.buyBtn}>
                پرداخت
              </button>
            </section>
          </section>
          <hr className={styles.line} />
          <section className={styles.freeSend}>
            <section className={styles.freeSendHeader}>
              <h2>ارسال رایگان</h2>
              <p>برای سفارش‌ بالای ۵۰۰ هزار تومان</p>
            </section>
            <section className={styles.freeSendImg}>
              <img src="/assets/images/sendCar.svg" alt="send" />
            </section>
          </section>
        </section>
        <section className={styles.fixedCart}>
          <section className={styles.fixedPriceSection}>
            <span className={styles.fixedPriceText}>جمع سبد خرید</span>
            <span className={styles.fixedPriceNumber}>
              {" "}
              {persianNumber(
                state.products.reduce(
                  (total, products) =>
                    total +
                    products.quantity *
                      (products.discount_percent
                        ? products.price_after_discount
                        : products.price),
                  0
                )
              )}{" "}
              تومان
            </span>
          </section>
          <section className={styles.fixedBuyBtnSection}>
            <button type="submit" className={styles.fixedbuyBtn}>
              پرداخت
            </button>
          </section>
        </section>
        <br />
      </form>
    </div>
  );
}
