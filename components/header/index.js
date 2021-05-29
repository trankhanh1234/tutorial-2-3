import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeaderNavLeft = () => {
  const location = {
    note: "Hồ Chí Minh",
    menu: [{ text: "Hà Nội", icon: "" }, { text: "Hồ Chí Minh" }],
  };
  return (
    <Row>
      <Col col-1></Col>
      <Col col-2>
        <img src="https://www.meete.co/img/meete_logo.svg" alt="..." />
      </Col>
      <Col col-3> Hồ chí minh</Col>
      <Col col-6>
        <input></input>
      </Col>
    </Row>
  );
};

const HeaderNavRight = () => {
  const location = {
    note: "Hồ Chí Minh",
    menu: [{ text: "Hà Nội", icon: "" }, { text: "Hồ Chí Minh" }],
  };
  return (
    <Row>
      <Col col-4 className="d-flex flex-row">
        <Row>
          <Col>giỏ hàng</Col>
          <Col>giỏ hàng</Col>
        </Row>
      </Col>
      <Col col-5>giỏ hàng</Col>
    </Row>
  );
};

function index(props) {
  return (
    <div>
      <Nav className="navbar navbar-light bg-white header mt-header-header">
        <Container className="container-fluid">
          <Row className="flex-grow-1 undefined">
            <Col sm={8} md={8}>
              <HeaderNavLeft></HeaderNavLeft>
            </Col>
            <Col sm={4} md={4}>
              <HeaderNavRight></HeaderNavRight>
            </Col>
          </Row>
        </Container>
      </Nav>
    </div>
  );
}

export default index;
