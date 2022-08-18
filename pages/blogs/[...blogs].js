import axios from "axios";
import React from "react";
import Head from "next/head";

//import components
import Blogs from "../../components/blogs/Blogs";
import Layout from "../../components/Layout/Layout";
import { BaseLink } from "../../components/BaseLink/BaseLink";

const blogs = ({ Blog }) => {
  return (
    <Layout>
       <Head>
        <title>{Blog.title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content="فروشگاه آنلاین دناسواران ارومیه ، فروش انواع قطعات ماشین های ایرانی و خارجی و ماشین هارو توربوشارژ" />
      </Head>
      <Blogs Blog={Blog} />
    </Layout>
  );
};

export default blogs;

export async function getStaticPaths() {
  const { data } = await axios.get(`${BaseLink}/news/`);
  const paths = data.results.map((blog) => {
    return {
      params: {
        blogs: [`${blog.id}`, `${blog.title.split(" ").join("-")}`],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { blogs } = context.params;
  console.log(context.params);
  const Blog = await axios.get(`${BaseLink}/news/${blogs[0]}/`);

  return {
    props: { Blog: Blog.data },
  };
}
