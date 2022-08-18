import React, { useState, useEffect } from "react";
import Layout from "./Layout";

//* import modules
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";

//import styles
import styles from "./PersonalInfo.module.css";

//* import icons
import { BsArrowRight } from "react-icons/bs/index";
import { AiOutlineWarning } from "react-icons/ai/index";

//*import components
import { ProvincesNames } from "../cities/ProvincesNames";
import { cities } from "../cities/cities";
import { BaseLink } from "../BaseLink/BaseLink";
import { useAuth } from "../context/AuthContextProvider";
import InputsComponent from "./InputsComponent";

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
      .then(({ data }) => toast.success("اطلاعات با موفقیت ذخیره شد"))
      .catch(function (error) {
        if (error.response) {
          toast.error("مشکلی رخ داده لطفا دوباره سعی کنید");
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

  useEffect(async () => {
    setFormValues(await user);
  }, [user]);

  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.miniNav}>
          <BsArrowRight />
          پروفایل / اطلاعات حساب کاربری
        </section>
        <hr />
        <section className={styles.alert}>
          <AiOutlineWarning
            style={{ margin: 0, color: "#F1C40F" }}
            className="icon"
          />
          برای بهتر مدیریت کردن سفارشات خود لطفا اطلاعات حساب خود را تکمیل کنید
        </section>
        <form onSubmit={formik.handleSubmit} className={styles.inputs}>
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
