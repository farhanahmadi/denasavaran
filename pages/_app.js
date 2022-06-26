import "../styles/globals.css";
import "../styles/skeleton.css";
import "../styles/Sidebar.css";

//import context
import CartContextProvider from "../components/context/CartContextProvider";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </SSRProvider>
  );
}

export default MyApp;
