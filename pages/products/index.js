import axios from "axios";
import React, { useState } from "react";
import { BaseLink } from "../../components/BaseLink/BaseLink";
import Head from "next/head";
import queryString from "query-string";
import cookie from "cookie";

//*import components
import Layout from "../../components/Layout/Layout";
import Products from "../../components/products/index";

export default function index({ products, tags, categoriesList }) {
  const [filterStatus, setFilterStatus] = useState("");

  //? handle the filter component
  const filterHandler = (name) => {
    setFilterStatus(name);
  };

  return (
    <React.Fragment>
      <Head>
        <title>فروشگاه دناسواران ارومیه</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="فروشگاه آنلاین دناسواران ارومیه ، فروش انواع قطعات ماشین های ایرانی و خارجی و ماشین هارو توربوشارژ"
        />
      </Head>
      <Layout
        filterStatus={filterStatus}
        filterList={filterStatus === "tags" ? tags : categoriesList}
        filterHandler={filterHandler}
      >
        <Products
          products={products}
          tagsFilterSideBar={tags}
          categoriesFilterSideBar={categoriesList}
          filterHandler={filterHandler}
        />
      </Layout>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;

  const { token } = cookie.parse(req.headers.cookie || "");
  const products = await axios.get(
    `${BaseLink}/products/?${queryString.stringify(query)}`,
    {
      headers: {
        Authorization: "Token " + token,
      },
    }
  );
  const tags = await axios.get(`${BaseLink}/tags_w_p/`);
  const categoriesList = await axios.get(`${BaseLink}/categories-m2-wp/`);

  return {
    props: {
      products: products.data,
      tags: tags.data,
      categoriesList: categoriesList.data,
    },
  };
}
