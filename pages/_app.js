import '../styles/globals.css';
import '../styles/skeleton.css';
import "../styles/Sidebar.css";

//import context
import CartContextProvider from '../components/context/CartContextProvider';

function MyApp({ Component, pageProps }) {
  return <CartContextProvider><Component {...pageProps} /></CartContextProvider>
}

export default MyApp
