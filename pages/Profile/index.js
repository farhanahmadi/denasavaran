import React from "react";
import axios from "axios";

//import components
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/profile/Profile";
import { BaseLink } from "../../components/BaseLink/BaseLink";


export default function index() {
  return (
    <Layout page={"profile"}>
      <Profile  />
    </Layout>
  );
}
