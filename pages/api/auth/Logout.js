import cookie from "cookie";

export default function handler (req, res) {
    res.setHeader("Set-Cookie", [
        cookie.serialize("token", "", {
          maxAge: -1,
          path: "/",
        }),
      ]);
    
      res.writeHead(302, { Location: "/" });
      res.end();
  };
  
