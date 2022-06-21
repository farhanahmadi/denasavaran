import axios from 'axios'
import React from 'react'

//import components
import Blogs from '../../components/blogs/Blogs'
import Layout from '../../components/Layout/Layout'
import { BaseLink } from '../../components/BaseLink/BaseLink'


const blogs = ({Blog}) => {
  return (
    <Layout>
        <Blogs Blog={Blog} />
    </Layout>
  )
}

export default blogs


export async function getServerSideProps(context) {
  const { id } = context.query;
  const name = context.query.Details;
  const Blog = await axios.get(`${BaseLink}/news/${id}/`);

  return {
    props: { Blog: Blog.data },
  };
}
