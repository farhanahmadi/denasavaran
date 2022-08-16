import React, { useState, useEffect, useCallback } from "react";
import Layout from "./Layout";

//* import modules
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";

//import styles
import styles from "./profile.module.css";

//* icons
import { AiOutlineWarning } from "react-icons/ai/index";

//import components
import { ProvincesNames } from "../cities/ProvincesNames";
import { cities } from "../cities/cities";
import { BaseLink } from "../BaseLink/BaseLink";
import { useAuth } from "../context/AuthContextProvider";

export default function Profile({ userInfo }) {
  const { user, token } = useAuth();
  const [formValues, setFormValues] = useState(null);
  const initialValues = {
    first_name: "",
    last_name: "",
    // avatar: "",
    email: "",
    state: "",
    city: "",
    address: "",
    plate: "",
    zip_code: "",
    phone_number: "",
  };

  const onSubmit = (values) => {
    axios
      .put(`${BaseLink}/user/${user.id}/`, values, {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then(({ data }) => console.log(data))
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().min(
      3,
      "نام وارد شده باید بیشتر از ۳ کاراکتر باشد"
    ),
    last_name: Yup.string().min(
      3,
      "نام خانوادگی وارد شده باید بیشتر از ۳ کاراکتر باشد"
    ),
    email: Yup.string()
      .required("ایمیل خود را وارد کنید")
      .email("ایمیل وارد شده صحیح نمیباشد"),
    phone_number: Yup.string()
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
  console.log(formik.errors);

  const [userCity, setUserCity] = useState("");

  // const userDataHandler = (event) => {
  //   setUserData({ ...userData, [event.target.name]: event.target.value });
  //   event.target.name == "city" && setUserCity(event.target.value);
  //   event.target.name == "state" && setUserCity("");
  // };

  useEffect(async () => {
    setFormValues(await user);
  }, [user]);

  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.alert}>
          <AiOutlineWarning
            style={{ margin: 0, color: "#F1C40F" }}
            className="icon"
          />
          برای بهتر مدیریت کردن سفارشات خود لطفا اطلاعات حساب خود را تکمیل کنید
        </section>
        <form onSubmit={formik.handleSubmit} className={styles.inputs}>
          <section className={styles.username}>
            <label>نام :</label>
            <input
              name="first_name"
              type="text"
              placeholder="نام "
              {...formik.getFieldProps("first_name")}
            />
          </section>
          <section className={styles.lastname}>
            <label>نام خانوادگی :</label>
            <input
              name="last_name"
              type="text"
              placeholder="نام خانوادگی "
              {...formik.getFieldProps("last_name")}
            />
          </section>
          <section className={styles.email}>
            <label>ایمیل :</label>
            <input
              name="email"
              type="text"
              placeholder="ایمیل "
              {...formik.getFieldProps("email")}
            />
          </section>
          {/* <section className={styles.state}>
            <label>استان</label>
            <select
              name="state"
              className={styles.selects}
              onChange={userDataHandler}
            >
              {userData.state ? (
                <option
                  hidden
                  value={
                    ProvincesNames.find(
                      (province) => province.id == userData.state
                    ).id
                  }
                >
                  {
                    ProvincesNames.find(
                      (province) => province.id == userData.state
                    ).name
                  }
                </option>
              ) : (
                <option hidden>انتخاب استان</option>
              )}
              {ProvincesNames.map((province) => (
                <option value={province.id}>{province.name}</option>
              ))}
            </select>
          </section>
          <section className={styles.city}>
            <label>شهر</label>
            <select
              name="city"
              className={styles.selects}
              onChange={userDataHandler}
            >
              {userData.city && userCity ? (
                <option
                  hidden
                  value={cities.find((city) => city.id == userData.city).id}
                >
                  {cities.find((city) => city.id == userData.city).name}
                </option>
              ) : (
                <option hidden>انتخاب شهر</option>
              )}
              {cities.map(
                (city) =>
                  city.province_id == userData.state && (
                    <option value={city.id}>{city.name}</option>
                  )
              )}
            </select>
          </section> */}
          <section className={styles.address}>
            <label>آدرس :</label>
            <input
              name="address"
              type="text"
              placeholder="آدرس"
              {...formik.getFieldProps("address")}
            />
          </section>
          <section className={styles.plate}>
            <label>پلاک :</label>
            <input
              name="plate"
              type="text"
              placeholder="پلاک"
              {...formik.getFieldProps("plate")}
            />
          </section>
          <section className={styles.zipcode}>
            <label>کد پستی :</label>
            <input
              name="zip_code"
              type="text"
              placeholder="کد پستی"
              {...formik.getFieldProps("zip_code")}
            />
          </section>
          <section className={styles.phone}>
            <label>شماره همراه :</label>
            <input
              name="phone_number"
              type="text"
              placeholder="شماره همراه"
              {...formik.getFieldProps("phone_number")}
            />
          </section>
          <br />
          <section className={styles.btn}>
            <button type="submit" className={styles.submit}>
              ذخیره اطلاعات
            </button>
          </section>
        </form>
      </main>
    </Layout>
  );
}
