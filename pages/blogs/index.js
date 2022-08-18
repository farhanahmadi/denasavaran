import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";

//import components
import Layout from "../../components/Layout/Layout";
import Blog from "../../components/blogs/index";
import { BaseLink } from "../../components/BaseLink/BaseLink";

export default function index({ BlogsList, BlogsCategoris }) {
  const [filterStatus, setFilterStatus] = useState("");

  //? handle the filter component
  const filterHandler = (name) => {
    setFilterStatus(name);
  };

  return (
    <React.Fragment>
      <Head>
        <title>وبلاگ دناسواران ارومیه</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="وبلاگ دناسواران ارومیه"
        />
      </Head>
      <Layout
        filterStatus={filterStatus}
        filterList={BlogsCategoris}
        filterHandler={filterHandler}
        blog={true}
      >
        <Blog
          BlogsList={BlogsList}
          BlogsCategoris={BlogsCategoris}
          filterHandler={filterHandler}
        />
      </Layout>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const BlogsList = await axios.get(`${BaseLink}/news/`);
  const BlogsCategoris = await axios.get(`${BaseLink}/news_categories/`);

  const { results } = BlogsCategoris.data;

  return {
    props: { BlogsList: BlogsList.data, BlogsCategoris: results },
  };
}
