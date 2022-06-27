import React,{useState , useEffect} from "react";
import Layout from "./Layout";

//import styles
import styles from "./profile.module.css";

export default function Profile({userInfo}) {

  const [userData , setUserData] = useState({
    first_name: '',
    last_name: '',
    avatar: '',
    email: '',
    state: '',
    city: '',
    address: '',
    plate: '',
    zip_code: '',
    phone_number: ''
  });

  useEffect(() =>{
    setUserData({...userData , 
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    avatar: userInfo.avatar,
    email: userInfo.email,
    state: userInfo.state,
    city: userInfo.city,
    address: userInfo.address,
    plate: userInfo.plate,
    zip_code: userInfo.zip_code,
    phone_number: userInfo.phone_number
    });
  },[])

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
            <input name="name" type="text" placeholder="نام " value={userData.first_name} />
          </section>
          <section className={styles.lastname}>
            <label>نام خانوادگی :</label>
            <input name="lastName" type="text" placeholder="نام خانوادگی " value={userData.last_name} />
          </section>
          <section className={styles.email}>
            <label>ایمیل :</label>
            <input name="email" type="text" placeholder="ایمیل " value={userData.email} />
          </section>
          <section className={styles.state}>
            <label>استان</label>
            <select className={styles.selects}>
              <option>استان</option>
            </select>
          </section>
          <section className={styles.city}>
            <label>شهر</label>
            <select className={styles.selects}>
              <option>شهر</option>
            </select>
          </section>
          <section className={styles.address}>
            <label>آدرس :</label>
            <input name="address" type="text" placeholder="آدرس" value={userData.address} />
          </section>
          <section className={styles.plate}>
            <label>پلاک :</label>
            <input name="plate" type="text" placeholder="پلاک" value={userData.plate} />
          </section>
          <section className={styles.zipcode}>
            <label>کد پستی :</label>
            <input name="zipcode" type="text" placeholder="کد پستی" value={userData.zip_code} />
          </section>
          <section className={styles.phone}>
            <label>شماره همراه :</label>
            <input name="phone" type="text" placeholder="شماره همراه" value={userData.phone_number} />
          </section>
          <br />
          <section className={styles.btn}>
            <button className={styles.submit}>ذخیره اطلاعات</button>
          </section>
        </section>
      </main>
    </Layout>
  );
}
