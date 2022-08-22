import React from "react";
import { BaseLink } from "../../components/BaseLink/BaseLink";
import axios from "axios";
import Head from "next/head";

//import components
import Layout from "../../components/Layout/Layout";
import Details from "../../components/products/Details";

export default function index({ productDetails }) {
  return (
    <Layout>
      <Head>
        <title>{productDetails.name}</title>
        <meta name="description" content={productDetails.description} />
      </Head>
      <Details productDetails={productDetails} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const name = context.query.Details;
  const productDetails = await axios.get(`${BaseLink}/product/r/${id}/`);

  return {
    props: { productDetails: productDetails.data },
  };
}
