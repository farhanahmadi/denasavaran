import React, { useState, useEffect,useCallback } from "react";
import Layout from "./Layout";
import axios from "axios";

//import styles
import styles from "./profile.module.css";

//import components
import { ProvincesNames } from "../cities/ProvincesNames";
import { cities } from "../cities/cities";
import { BaseLink } from "../BaseLink/BaseLink";

export default function Profile({ userInfo }) {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    avatar: "",
    email: "",
    state: "",
    city: "",
    address: "",
    plate: "",
    zip_code: "",
    phone_number: "",
  });
  const [userCity , setUserCity] = useState('');

  useEffect(() => {
    setUserData({
      ...userData,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      avatar: userInfo.avatar,
      email: userInfo.email,
      state: userInfo.state,
      city: userInfo.city,
      address: userInfo.address,
      plate: userInfo.plate,
      zip_code: userInfo.zip_code,
      phone_number: userInfo.phone_number,
    });
    setUserCity(userInfo.state);
  }, []);

  const userDataHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value});
    event.target.name == 'city' && setUserCity(event.target.value);
    event.target.name == 'state' && setUserCity('');
  };

  const submit = () => {
    if (userData.first_name === '' || userData.last_name === '' || userData.phone_number === '') {
      alert("error")
    }else{
     if (userData.state !== '' && userCity == '' ) {
        alert('error');
     }else{
      const formdata = new FormData();
      // formdata.append('avatar' , userData.avatar);
      formdata.append("first_name", userData.first_name);
      formdata.append("last_name", userData.last_name);
      formdata.append("email", userData.email);
      formdata.append("state", userData.state);
      formdata.append("city", userData.city);
      formdata.append("address", userData.address);
      formdata.append("plate", userData.plate);
      formdata.append("zip_code", userData.zip_code);
      formdata.append("phone_number", userData.phone_number);
      fetch(`${BaseLink}/user/${userInfo.id}/`, {
        method: "PUT",
        body: formdata,
        headers: {
          Authorization: "Token " + "1a43ce13cdd644d49671d1a0bcae55cde07c4d50",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    };
     }
  }

  return (
    <Layout>
      <main className={styles.mainBar}>
        <section className={styles.alert}>
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          برای بهتر مدیریت کردن سفارشات خود لطفا اطلاعات حساب خود را تکمیل کنید
        </section>
        <section className={styles.inputs}>
          <section className={styles.username}>
            <label>نام :</label>
            <input
              name="first_name"
              type="text"
              placeholder="نام "
              value={userData.first_name}
              onChange={userDataHandler}
            />
          </section>
          <section className={styles.lastname}>
            <label>نام خانوادگی :</label>
            <input
              name="last_name"
              type="text"
              placeholder="نام خانوادگی "
              value={userData.last_name}
              onChange={userDataHandler}
            />
          </section>
          <section className={styles.email}>
            <label>ایمیل :</label>
            <input
              name="email"
              type="text"
              placeholder="ایمیل "
              value={userData.email}
              onChange={userDataHandler}
            />
          </section>
          <section className={styles.state}>
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
          </section>
          <section className={styles.address}>
            <label>آدرس :</label>
            <input
              name="address"
              type="text"
              placeholder="آدرس"
              value={userData.address}
              onChange={userDataHandler}
            />
          </section>
          <section className={styles.plate}>
            <label>پلاک :</label>
            <input
              name="plate"
              type="text"
              placeholder="پلاک"
              value={userData.plate}
              onChange={userDataHandler}
            />
          </section>
          <section className={styles.zipcode}>
            <label>کد پستی :</label>
            <input
              name="zip_code"
              type="text"
              placeholder="کد پستی"
              value={userData.zip_code}
              onChange={userDataHandler}
            />
          </section>
          <section className={styles.phone}>
            <label>شماره همراه :</label>
            <input
              name="phone_number"
              type="text"
              placeholder="شماره همراه"
              value={userData.phone_number}
              onChange={userDataHandler}
            />
          </section>
          <br />
          <section className={styles.btn}>
            <button onClick={submit} className={styles.submit}>ذخیره اطلاعات</button>
          </section>
        </section>
      </main>
    </Layout>
  );
}
