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

export default function Home({ categoriesList, lastProducts, ssr }) {
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
              <Link href={`/products`}>
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
              <Link href={`/products`}>
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
              <Link href={`/products`}>
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
              <Link href={`/products`}>
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
  const botPattern =
    "(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
  const re = new RegExp(botPattern, "i");
  let userAgent = context.req.headers["user-agent"];
  let ssr = false;

  if (re.test(userAgent)) {
    ssr = true;
  }
  const categoriesList = await axios.get(`${BaseLink}/categories-m2-wp/`);
  const lastProducts = await axios.get(`${BaseLink}/last_products/`);

  return {
    props: {
      categoriesList: categoriesList.data,
      lastProducts: lastProducts.data,
      ssr,
    },
  };
}
