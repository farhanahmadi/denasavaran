import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/skeleton.css";
import "../styles/Sidebar.css";

//import context
import CartContextProvider from "../components/context/CartContextProvider";
import { SSRProvider } from "react-bootstrap";

//* import loader
import Loader from "../components/Layout/Loader";

function MyApp({ Component, pageProps }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <SSRProvider>
      <CartContextProvider>
        {!loader ? (
          <Component {...pageProps} />
        ) : (
          <Loader animation={startAnimation} />
        )}
      </CartContextProvider>
    </SSRProvider>
  );
}

export default MyApp;
