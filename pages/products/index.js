import axios from 'axios'
import React from 'react'
import { BaseLink } from '../../components/BaseLink/BaseLink'


//import components
import Layout from '../../components/Layout/Layout'
import Products from "../../components/products/index"



export default function index ({products , tags , categoriesList}) {
  return (
    <Layout>
        <Products products={products} tags={tags} categories={categoriesList} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const {page} = context.query;
  const {tags__in} = context.query;
  const {categories} = context.query;
  const products = await axios.get(`${BaseLink}/products/?${page ? `page= ${page}` : ''}${tags__in ? `&tag__in=${tags__in}` : ''}${categories ? `&categories= ${categories}` : ''}`);
  const tags = await axios.get(`${BaseLink}/tags_w_p/`);
  const categoriesList = await axios.get(`${BaseLink}/categories-m2-wp/`);



  return {
    props: {products: products.data , tags: tags.data , categoriesList: categoriesList.data}, 
  }
}
