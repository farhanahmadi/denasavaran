import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/skeleton.css";
import "../styles/Sidebar.css";

//import context
import { SSRProvider } from "react-bootstrap";
import CartContextProvider from "../components/context/CartContextProvider";
import FilterContextProvider from "../components/context/FilterContextProvider";
import AuthContextProvider from "../components/context/AuthContextProvider";

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
      <AuthContextProvider>
        <CartContextProvider>
          <FilterContextProvider>
            {!loader ? (
              <Component {...pageProps} />
            ) : (
              <Loader animation={startAnimation} />
            )}
          </FilterContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </SSRProvider>
  );
}

export default MyApp;
