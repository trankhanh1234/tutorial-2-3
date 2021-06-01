import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenuList from "../molecules/MenuList";
import AppBar from "../organisms/AppBar";
import CardVoucher from "../organisms/CardVoucher";
import NavBreadcrumbs from "../organisms/NavBreadcrumbs";
import Navigation from "../organisms/Navigation";

function Main(props) {
  return (
    <Container>
      <Row className="my-3">
        <NavBreadcrumbs></NavBreadcrumbs>
      </Row>
      <AppBar></AppBar>
      <Row className="mb-3 mt-4">
        <Col md={4} lg={3}>
          <MenuList></MenuList>
        </Col>
        <Col md={8} lg={9}>
          <div className="bg-white rounded">
            <div className="mt-card-deal">
              <div className="d-flex flex-column align-items-center w-100 p-3">
                <CardVoucher></CardVoucher>
              </div>
            </div>
            <Navigation></Navigation>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
