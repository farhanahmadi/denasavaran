import React, { useState, useRef } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

//import components
import { BaseLink } from "../BaseLink/BaseLink";
import TextInputs from "./TextInputs";

import styles from "./JoinUs.module.css";

const JoinUs = () => {
  const carImgRef = useRef(null);
  const certificateImageRef = useRef(null);
  const initialValues = {
    name: "",
    lastName: "",
    age: "",
    phone: "",
    address: "",
    carType: "",
    certificateImage: "",
    carImage: "",
  };

  const [images, setImages] = useState({
    certificateImage: "",
    carImage: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("نام خود را وارد کنید")
      .min(3, "نام وارد شده باید بیشتر از 3 حرف باشد"),
    lastName: Yup.string()
      .required("نام خانوادگی خود را وارد کنید")
      .min(3, "نام خانوادگی وارد شده باید بیشتر از 3 حرف باشد"),
    age: Yup.number()
      .required("سن خود را وارد کنید")
      .min(18, "حداقل باید ۱۸ سال سن داشته باشید"),
    phone: Yup.string()
      .required("شماره خود را وارد کنید")
      .min(10, "شماره وارد شده صحیح نمیباشد")
      .max(11, "شماره وارد شده صحیح نمیباشد"),
    address: Yup.string().required("آدرس خود را وارد کنید"),
    carType: Yup.string().required("مدل ماشین را انتخاب کنید"),
    certificateImage: Yup.string().required("عکس ماشین خود را بارگذاری کنید"),
  });

  const onSubmit = (values) => {};

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const imageHandler = (event) => {
    if (event.target.name === "certificateImage") {
      setImages({
        ...images,
        certificateImage: URL.createObjectURL(event.target.files[0]),
      });
    } else {
      setImages({
        ...images,
        carImage: URL.createObjectURL(event.target.files[0]),
      });
    }
    console.log(formik.values);
  };

  return (
    <div>
      <div className={styles.container} dir="rtl">
        <div className={styles.formContainer} dir="rtl">
          <section className={styles.fromData}>
            <div className={styles.formLogo}>
              <img src={"/assets/images/navbarlogo.png"} alt="logo" />
            </div>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <section className={styles.row}>
                <TextInputs
                  label={"نام"}
                  name={"name"}
                  placeHolder={"نام ..."}
                  formik={formik}
                />
                <TextInputs
                  label={"نام خانوادگی"}
                  name={"lastName"}
                  placeHolder={"نام خانوادگی ..."}
                  formik={formik}
                />
              </section>
              <section className={styles.row}>
                <TextInputs
                  label={"سن"}
                  name={"age"}
                  type="number"
                  placeHolder={"سن ..."}
                  formik={formik}
                />
                <TextInputs
                  label={"شماره همراه"}
                  name={"phone"}
                  type="number"
                  placeHolder={"نام شماره همراه ..."}
                  formik={formik}
                />
              </section>
              <section className={styles.row}>
                <TextInputs
                  label={"آدرس"}
                  name={"address"}
                  placeHolder={"آدرس ..."}
                  formik={formik}
                />
                <section className={styles.selectSection}>
                  <label>انتخاب نوع ماشین</label>
                  <select {...formik.getFieldProps("carType")}>
                    <option>انتخاب نوع ماشین</option>
                    <option value="dena" key="dena">
                      دنا
                    </option>
                    <option value="dena+" key="dena+">
                      دنا پلاس
                    </option>
                    <option value="dena+turbo" key="dena+turbo">
                      دنا پلاس توربو
                    </option>
                  </select>
                  <div className={styles.error}>
                    {formik.errors.carType &&
                      formik.touched.carType &&
                      formik.errors.carType}
                  </div>
                </section>
              </section>
              <section className={styles.imageRow}>
                <section className={styles.imageBox}>
                  <img
                    onClick={() => carImgRef.current.click()}
                    src={images.carImage || "/assets/images/logo.jpg"}
                    alt=""
                  />
                  <button
                    onClick={() => setImages({ ...images, carImage: "" })}
                    className={styles.removeImg}
                  >
                    حذف عکس
                  </button>
                  <input
                    className={styles.fileInput}
                    name="carImage"
                    ref={carImgRef}
                    type="file"
                    onChange={imageHandler}
                  />
                </section>
                <section className={styles.imageBox}>
                  <img
                    src={images.certificateImage || "/assets/images/logo.jpg"}
                    alt=""
                    onClick={() => certificateImageRef.current.click()}
                  />
                  <button
                    onClick={() =>
                      setImages({ ...images, certificateImage: "" })
                    }
                    className={styles.removeImg}
                  >
                    حذف عکس
                  </button>
                  <input
                    className={styles.fileInput}
                    name="certificateImage"
                    ref={certificateImageRef}
                    type="file"
                    onChange={imageHandler}
                  />
                </section>
              </section>
              <section className={styles.submit}>
                <button type="submit">عضویت در باشگاه</button>
              </section>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
