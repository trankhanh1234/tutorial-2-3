import React from "react";

import { Col, Form, Row, Button } from "react-bootstrap";

function StepCreateAccount(props) {
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
    if (name === "fullname") {
      if (value === "" || value === null) {
        setState({ ...state, fullnameError: true, fullname: value });
      } else {
        setState({ ...state, fullnameError: false, fullname: value });
      }
    }

    if (name === "name") {
      if (value === "" || value === null) {
        setState({ ...state, nameError: true, name: value });
      } else {
        setState({ ...state, nameError: false, name: value });
      }
    }

    if (name === "password") {
      console.log(value.length);
      if (value === "" || value === null || value.length < 6) {
        setState({ ...state, passwordError: true, password: value });
      } else {
        setState({ ...state, passwordError: false, password: value });
      }
    }

    if (name === "email") {
      validateEmail(value);
    }

    if (name === "comfirmPass") {
      if (value === "" || value === null || value !== state.password) {
        setState({ ...state, comfirmPassError: true, comfirmPass: value });
      } else {
        setState({ ...state, comfirmPassError: false, comfirmPass: value });
      }
    }
    if (
      state.fullnameError === false &&
      state.passwordError === false &&
      state.nameError === false &&
      state.comfirmPassError === false &&
      state.emailError === false
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
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
          disabled={disable ? true : false}
          variant={disable ? "secondary" : "danger"}
        >
          Đăng ký
        </Button>
      </Row>
    </>
  );
}

export default StepCreateAccount;
