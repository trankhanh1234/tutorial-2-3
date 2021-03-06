import React from "react";
import App from "next/app";
import Head from "next/head";
import Header from "../Atomic/organisms/Header";
import NavBreadcrumbs from "../Atomic/organisms/NavBreadcrumbs";
import AppBar from "../Atomic/organisms/AppBar";
import MenuList from "../Atomic/molecules/MenuList";

import "../styles/index.scss";
import { Col, Row } from "react-bootstrap";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Meete</title>
        </Head>
        <Header />
        <div className="container" style={{ paddingTop: "100px" }}>
          <Row>
            <NavBreadcrumbs></NavBreadcrumbs>
          </Row>
          <AppBar></AppBar>
          <Row className="mb-3 mt-4">
            <Col md={4} lg={3}>
              <MenuList></MenuList>
            </Col>
            <Col md={8} lg={9}>
              <Component {...pageProps} />
            </Col>
          </Row>
          <div className="mt-header-mes">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              className="bi bi-messenger"
              viewBox="0 0 16 16"
            >
              <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
            </svg>
          </div>
        </div>
      </>
    );
  }
}

export default MyApp;
