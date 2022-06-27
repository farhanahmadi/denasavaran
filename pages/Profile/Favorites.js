import React from 'react'
import axios from 'axios'

//import components
import Layout from '../../components/Layout/Layout'
import Favorites from '../../components/profile/Favorites'
import { BaseLink } from "../../components/BaseLink/BaseLink";




export default function index ({userFavorites}) {
  return (
    <Layout profile={true}>
        <Favorites userFavorites={userFavorites} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const userFavorites = await axios.get(`${BaseLink}/marks/`, {
    headers: {
      Authorization: "Token " + "1a43ce13cdd644d49671d1a0bcae55cde07c4d50",
    },
  });
  return {
    props: { userFavorites: userFavorites.data },
  };
}
