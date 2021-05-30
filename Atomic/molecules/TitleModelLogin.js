import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
function TitleModelLogin(props) {
  return (
    <Row>
      <Col xs={1} className="d-flex">
        <Button variant="light">
          <X></X>
        </Button>
      </Col>
      <Col xs={10}>
        <h4>{title}</h4>
        <h6>{subTittle}</h6>
      </Col>
      <Col xs={1} className="d-flex justify-content-flex-end">
        <Button variant="light">
          <X></X>
        </Button>
      </Col>
    </Row>
  );
}

export default TitleModelLogin;
