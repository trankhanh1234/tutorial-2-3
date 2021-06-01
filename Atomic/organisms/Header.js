import React from "react";

import HeaderNavLeft from "../molecules/HeaderNavLeft";
import HeaderNavRight from "../molecules/HeaderNavRight";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";

function Header() {
  const [y, setY] = React.useState(0);
  const [header, setHeader] = React.useState("");
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (window.scrollY > y) {
      if (window.scrollY >= 150) {
        setHeader("none");
      }
    } else {
      setHeader("block");
    }
    setY(window.scrollY);
  };

  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [y]);

  return (
    <header>
      <Navbar
        bg="white"
        variant="light"
        className="header mt-header-header"
        style={{ display: header, position: "fixed" }}
      >
        <Container fluid>
          <Row className="flex-grow-1 undefined">
            <Col sm={8} className="d-flex align-items-center">
              <HeaderNavLeft></HeaderNavLeft>
            </Col>
            <Col sm={4} md={4} className="d-flex align-items-center">
              <HeaderNavRight></HeaderNavRight>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
