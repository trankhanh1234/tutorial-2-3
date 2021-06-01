import React from "react";

import { Col, Form, Row, Button } from "react-bootstrap";

function StepCreateAccount({ nextStep }) {
  const [state, setState] = React.useState({
    fullname: "",
    fullnameError: false,
    name: "",
    nameError: false,
    password: "",
    passwordError: false,
    email: "",
    emailError: false,
    comfirmPass: "",
    comfirmPassError: false,
  });

  const [disable, setDisable] = React.useState(true);

  const mesErr = {
    fullnameError: "Họ không được để trống",
    nameError: "Tên không được để trống",
    passwordError: "Mật khẩu không hợp lệ",
    emailError: "Email không hợp lệ",
    comfirmPassError: "Mật khẩu không khớp",
  };

  const validateEmail = (email) => {
    const pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      setState({ ...state, emailError: false, email: email });
    } else {
      setState({ ...state, emailError: true, email: email });
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "fullname":
        if (value === "" || !value) {
          setState({ ...state, fullnameError: true, fullname: value });
        } else {
          setState({ ...state, fullnameError: false, fullname: value });
        }
        break;
      case "name":
        if (value === "" || !value) {
          setState({ ...state, nameError: true, name: value });
        } else {
          setState({ ...state, nameError: false, name: value });
        }
        break;
      case "password":
        if (value === "" || !value) {
          setState({ ...state, passwordError: true, password: value });
        } else if (value.length < 6) {
          setState({ ...state, passwordError: true, password: value });
        } else {
          setState({ ...state, passwordError: false, password: value });
        }
        break;
      case "email":
        validateEmail(value);
        break;
      case "comfirmPass":
        if (value === "" || !value) {
          setState({
            ...state,
            comfirmPassError: true,
            comfirmPass: value,
          });
        } else if (value !== state.password) {
          setState({
            ...state,
            comfirmPassError: true,
            comfirmPass: value,
          });
        } else {
          setState({
            ...state,
            comfirmPassError: false,
            comfirmPass: value,
          });
        }
        break;
      default:
        "";
    }
    handleButton();
  };
  const handleButton = () => {
    if (
      !!state.fullnameError &&
      !!state.passwordError &&
      !!state.nameError &&
      !!state.comfirmPassError &&
      !!state.emailError
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    console.log("disable", disable);
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="d-flex">
              Họ và tên đệm
              {state.fullnameError ? (
                <p className="text-danger">({mesErr.fullnameError})</p>
              ) : (
                ""
              )}
            </Form.Label>
            <Form.Control
              name="fullname"
              value={state.fullname}
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="d-flex">
              Mật khẩu{" "}
              {state.passwordError ? (
                <p className="text-danger">({mesErr.passwordError})</p>
              ) : (
                ""
              )}
            </Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={state.password}
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="d-flex">
              Tên{" "}
              {state.nameError ? (
                <p className="text-danger">({mesErr.nameError})</p>
              ) : (
                ""
              )}
            </Form.Label>
            <Form.Control
              name="name"
              value={state.name}
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="d-flex">
              Xác nhận mật khẩu{" "}
              {state.comfirmPassError ? (
                <p className="text-danger">({mesErr.comfirmPassError})</p>
              ) : (
                ""
              )}
            </Form.Label>
            <Form.Control
              name="comfirmPass"
              type="password"
              value={state.comfirmPass}
              onChange={(e) => handleInput(e)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="d-flex">
              Email{" "}
              {state.emailError ? (
                <p className="text-danger">({mesErr.emailError})</p>
              ) : (
                ""
              )}
            </Form.Label>
            <Form.Control
              name="email"
              value={state.email}
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Button
          onClick={() => nextStep(3)}
          disabled={disable}
          className="full-width"
          variant={disable ? "secondary" : "danger"}
        >
          Đăng ký
        </Button>
      </Row>
    </>
  );
}

export default StepCreateAccount;
