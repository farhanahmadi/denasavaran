// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { BaseLink } from "../../components/BaseLink/BaseLink";

export default async function handler(req, res) {
  const data = await axios.get(`${BaseLink}/set_user`, {
    headers: {
      Authorization: "Token " + "0321e4bed72ecc0e55911cb42cff158fb8984ea7",
    },
  });
  res.status(200).json({ userDara: data.data.user_data });
}
