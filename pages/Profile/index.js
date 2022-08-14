import React from "react";
import axios from "axios";

//import components
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/profile/Profile";
import { BaseLink } from "../../components/BaseLink/BaseLink";


export default function index({ userInfo }) {
  return (
    <Layout page={"profile"}>
      {console.log(userInfo)}
      <Profile userInfo={userInfo} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const userInfo = await axios.get(`${BaseLink}/user/profile/`, {
    headers: {
      Authorization: "Token " + "1a43ce13cdd644d49671d1a0bcae55cde07c4d50",
    },
  });
  return {
    props: { userInfo: userInfo.data },
  };
}
