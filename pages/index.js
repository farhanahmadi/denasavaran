import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

// import components
import Layout from "../components/Layout/Layout";
import AboutUs from "../components/aboutUs/AboutUs";
import LastContents from "../components/LastContents/LastContents";
import { BaseLink } from "../components/BaseLink/BaseLink";
import Link from "next/link";

export default function Home({ categoriesList, lastProducts }) {
  return (
    <Layout page={"home"}>
      <div className={styles.container}>
        <Head>
          <title>فروشگاه آنلاین دناسواران ارومیه</title>
          <meta
            name="description"
            content="وب سایت رسمی دناسواران ارومیه ، فروش محصولات ماشین های ایرانی و خارجی (ماشین های توربو شارژ)"
          />
        </Head>

        <main className={styles.main}>
          <AboutUs categoriesList={categoriesList} />
          <LastContents lastProducts={lastProducts} />
          <div className={styles.posters}>
            <section className={styles.denaTools}>
              <Link href={`#`}>
                <a>
                  <Image
                    src="/assets/images/denaTools.jpg"
                    alt="denaToolsPoster"
                    width={900}
                    height={320}
                  />
                </a>
              </Link>
            </section>
            <section className={styles.peugeotTools}>
              <Link href={`#`}>
                <a>
                  <Image
                    src="/assets/images/peugeotTools.jpg"
                    alt="peugeotToolsPoster"
                    width={900}
                    height={320}
                  />
                </a>
              </Link>
            </section>
          </div>
          <LastContents lastProducts={lastProducts} />

          <div className={styles.posters}>
            <section className={styles.denaTools}>
              <Link href={`#`}>
                <a>
                  <Image
                    src="/assets/images/carClutch.jpg"
                    alt="carClutchPoster"
                    width={900}
                    height={320}
                  />
                </a>
              </Link>
            </section>
            <section className={styles.peugeotTools}>
              <Link href={`#`}>
                <a>
                  <Image
                    src="/assets/images/carOil.jpg"
                    alt="carOilPoster"
                    width={900}
                    height={320}
                  />
                </a>
              </Link>
            </section>
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const categoriesList = await axios.get(`${BaseLink}/categories-m2-wp/`);
  const lastProducts = await axios.get(`${BaseLink}/last_products/`);

  return {
    props: {
      categoriesList: categoriesList.data,
      lastProducts: lastProducts.data,
    },
  };
}
