import React from "react";
import { Col, Row } from "react-bootstrap";
import Infomation from "../molecules/Infomation";

function AppBar(props) {
  return (
    <Row className="mt-3">
      <Col md={4} lg={4}>
        <Infomation></Infomation>
      </Col>
      <Col md={8} lg={9}>
        <h2 className="fs-2  d-flex justify-content-flex-start">Giỏ hàng</h2>
      </Col>
    </Row>
  );
}

export default AppBar;
