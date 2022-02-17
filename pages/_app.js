import "../styles/globals.css";
// import store from "../src/redux/store";
// import { Provider } from "react-redux";
import { wrapper } from "../src/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
}

export default wrapper.withRedux(MyApp);
