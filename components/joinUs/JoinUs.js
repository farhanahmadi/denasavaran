import React, { useState } from "react";
import axios from "axios";

//import components
import { BaseLink } from "../BaseLink/BaseLink";

import styles from "./JoinUs.module.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { Form, Button, Col, Row } from "react-bootstrap";

const JoinUs = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    age: "",
    phone: "",
    address: "",
    carType: "",
    certificateImage: "",
    carImage: "",
  });

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
      {console.log(data)}
      <div className={styles.container} dir="rtl">
        <div className={styles.formContainer} dir="rtl">
          <section className={styles.fromData}>
            <div className={styles.formLogo}>
              <img src={"/assets/images/navbarlogo.png"} alt="logo" />
            </div>
            <hr />
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className={styles.formDataLabel}>نام</Form.Label>
                  <Form.Control
                    name="name"
                    value={data.name}
                    className={styles.formDataInput}
                    type="text"
                    placeholder="برای مثال (علی)"
                    onChange={dataHandler}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className={styles.formDataLabel}>
                    نام خانوادگی
                  </Form.Label>
                  <Form.Control
                    name="lastName"
                    value={data.lastName}
                    className={styles.formDataInput}
                    type="text"
                    placeholder="برای مثال (احمدی)"
                    onChange={dataHandler}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className={styles.formDataLabel}>سن</Form.Label>
                  <Form.Control
                    name="age"
                    value={data.age}
                    className={styles.formDataInput}
                    type="number"
                    placeholder="برای مثال (۱۸)"
                    onChange={dataHandler}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label className={styles.formDataLabel}>
                    شماره موبایل
                  </Form.Label>
                  <Form.Control
                    name="phone"
                    value={data.phone}
                    className={styles.formDataInput}
                    type="number"
                    placeholder="برای مثال (۰۹۱۲۳۴۵۶۷۸۹)"
                    onChange={dataHandler}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label className={styles.formDataLabel}>آدرس</Form.Label>
                <Form.Control
                  name="address"
                  value={data.address}
                  className={styles.formDataInput}
                  placeholder="برای مثال (ارومیه ، ۸ شهریور ، کوچه ۸ ، پلاک ۸ )  "
                  onChange={dataHandler}
                />
              </Form.Group>

              <Form.Group
                style={{ padding: "0" }}
                as={Col}
                controlId="formGridState"
              >
                <Form.Label className={styles.formDataLabel}>
                  انتخاب ماشین
                </Form.Label>
                <Form.Select
                  name="carType"
                  defaultValue="نوع ماشین ..."
                  onChange={dataHandler}
                >
                  <option>انتخاب ...</option>
                  <option>دنا</option>
                  <option>دنا پلاس</option>
                  <option>دنا پلاس توربو</option>
                </Form.Select>
              </Form.Group>
              <br />
              <Row className="mb-3">
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label className={styles.formDataLabel}>
                    انتخاب عکس گواهی نامه
                  </Form.Label>
                  <Form.Control
                    name="certificateImage"
                    type="file"
                    size="sm"
                    onChange={imageHandler}
                  />
                </Form.Group>

                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label className={styles.formDataLabel}>
                    انتخاب عکس ماشین
                  </Form.Label>
                  <Form.Control
                    name="carImage"
                    type="file"
                    size="sm"
                    onChange={imageHandler}
                  />
                </Form.Group>
              </Row>
              <Button onClick={sendData} variant="danger" type="submit">
                ثبت اطلاعات
              </Button>
            </Form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
