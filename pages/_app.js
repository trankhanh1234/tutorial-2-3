import "bootstrap/dist/css/bootstrap.min.css";
/* The following line can be included in a src/App.scss */

import "../styles/customTheme.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
