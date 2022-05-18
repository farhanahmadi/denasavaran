import React,{useState , useEffect} from "react";
import Image from "next/image";
import axios from "axios";

//import styles
import styles from "./blogsDetails.module.css";




import logo from "../../public/assets/images/card1.jpg";

const Blogs = () => {

  const [data , setData] = useState([]);
  useEffect(() =>{
    axios.get('http://45.159.113.83:802/api/v1/news/5/').then(response => setData(response.data));
  },[])
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <h1>چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن پایتون</h1>
        <hr />
        <p>
          کسب درامد از برنامه نویسی ارسال شده توسط هیبو 1401/02/20 30 بازدید
        </p>
      </section>
      <section className={styles.porster}>
        <Image src="/assets/images/Denalogo.jpg" width="1100" height="500" />
      </section>
      <section className={styles.main}>
        <h1>نحوه آپدیت پایتون در سیستم عامل‌های مختلف:</h1>
        <p>
        <div className="product-des" dangerouslySetInnerHTML={{ __html: data.title }}></div>
        <div className="product-des" dangerouslySetInnerHTML={{ __html: data.body }}></div>
        </p>
      </section>
    </div>
  );
};

export default Blogs;
