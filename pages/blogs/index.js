import React from "react";
import axios from "axios";

//import components
import Layout from "../../components/Layout/Layout";
import Blog from "../../components/blogs/index";
import { BaseLink } from "../../components/BaseLink/BaseLink";

export default function index({BlogsList}) {
  return (
    <Layout>
      <Blog BlogsList={BlogsList} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const BlogsList = await axios.get(`${BaseLink}/news/`);

  return {
    props: { BlogsList: BlogsList.data },
    revalidate: 3600,
  };
}
