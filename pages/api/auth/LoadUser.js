import cookie from "cookie";
import axios from "axios";
import { BaseLink } from "../../../components/BaseLink/BaseLink";

export default async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || "");
  if (cookies.token) {
    const { data } = await axios.get(`${BaseLink}/set_user`, {
      headers: {
        Authorization: "Token " + cookies.token || "",
      },
    });
    if (data) {
      res.status(200).json({ userData: data.user_data, token: cookies.token });
    }
  } else {
    res.status(200).json({ userData: "" });
  }
}
