import React from "react";

import { Col, Form, Row, Button } from "react-bootstrap";

function StepCreateAccount(props) {
  const [state, setState] = React.useState({
    fullname: "",
    name: "",
    password: "",
    email: "",
    comfirmPass: "",
  });

  const mesErr = {
    fullnameError: "Họ không được để trống",
    nameError: "Tên không được để trống",
    passwordError: "Mật khẩu không hợp lệ",
    emailError: "Email không hợp lệ",
    comfirmPassError: "Mật khẩu không khớp",
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "fullname") {
      setState({ ...state, fullname: value });
    }

    if (name === "name") {
      setState({ ...state, name: value });
    }

    if (name === "password") {
      setState({ ...state, password: value });
    }

    if (name === "email") {
      setState({ ...state, email: value });
    }

    if (name === "comfirmPass") {
      setState({ ...state, comfirmPass: value });
    }
    console.log(state);
  };

  React.useEffect(() => {
    console.log(state.fullname);
    if (state.fullname === "" || state.fullname) {
      setState({ ...state, fullnameError: true });
    }
    if (state.name === "" || state.name === null) {
      setState({ ...state, nameError: true });
    }
    if (state.password === "" || state.password === null) {
      setState({ ...state, passwordError: true });
    }
    if (state.email === "" || state.email === null) {
      setState({ ...state, emailError: true });
    }
    if (state.comfirmPass === "" || state.comfirmPass === null) {
      setState({ ...state, comfirmPassError: true });
    }
  }, [state.fullname]);

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
        <Button>Đăng ký</Button>
      </Row>
    </>
  );
}

export default StepCreateAccount;
