import cookie from "cookie";

export default function handler (req, res) {
  const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "development" ? false : false,
    domain: process.env.NODE_ENV === "development" ? "localhost" : "denasavaran-urmia.ir",
    path: "/",
  };
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", req.body.token, cookieOptions)
  );
  res.status(200).json({ token: true });
};
