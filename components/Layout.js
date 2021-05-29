import Head from "next/head";
import { Children } from "react";
import Header from "./header/index";
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>tutoria 2 + 3</title>
      </Head>
      <Header>nav</Header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
