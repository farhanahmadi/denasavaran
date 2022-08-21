import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

//import components
import { BaseLink } from "../BaseLink/BaseLink";
import TextInputs from "../auth/TextInputs";

import styles from "./JoinUs.module.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { Form, Button, Col, Row } from "react-bootstrap";

const JoinUs = () => {
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

  // const [data, setData] = useState({
  //   name: "",
  //   lastName: "",
  //   age: "",
  //   phone: "",
  //   address: "",
  //   carType: "",
  //   certificateImage: "",
  //   carImage: "",
  // });

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
      .min(10 , "شماره وارد شده صحیح نمیباشد").max(11 , "شماره وارد شده صحیح نمیباشد"),
    address: Yup.string().required("آدرس خود را وارد کنید"),
    carType: Yup.string().required("مدل ماشین را انتخاب کنید"),
    certificateImage: Yup.string().required("عکس ماشین خود را بارگذاری کنید"),
  });

  const onSubmit = (values) => {
    
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  console.log(formik.errors);

  const dataHandler = (event) => {
    if (event.target.name !== "carType") {
      setData({ ...data, [event.target.name]: event.target.value });
    } else {
      setData({ ...data, carType: event.target.value });
    }
  };

  const imageHandler = (event) => {
    if (event.target.name === "certificateImage") {
      setData({ ...data, certificateImage: event.target.files[0] });
    } else {
      setData({ ...data, carImage: event.target.files[0] });
    }
  };

  const sendData = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("first_name", data.name);
    formdata.append("last_name", data.lastName);
    formdata.append("age", data.age);
    formdata.append("address", data.address);
    formdata.append("phone_number", data.phone);
    formdata.append("car", data.carType);
    formdata.append("license_cart", data.certificateImage);
    formdata.append("car_image", data.carImage);

    fetch(`${BaseLink}/members/`, {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error.message));
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
                <TextInputs label={"نام"}  name={"name"}  placeHolder={"نام ..."} formik={formik}  />
                <TextInputs label={"نام خانوادگی"}  name={"lastName"}  placeHolder={"نام خانوادگی ..."} formik={formik}  />
              </section>
              <section className={styles.row}>
                <TextInputs label={"سن"}  name={"age"} type="number" placeHolder={"سن ..."} formik={formik}  />
                <TextInputs label={"شماره همراه"}  name={"phone"} type="number"  placeHolder={"نام شماره همراه ..."} formik={formik}  />
              </section>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
