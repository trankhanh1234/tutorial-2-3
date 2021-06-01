import React from "react";
import { Form, Button } from "react-bootstrap";

const StepTwoLogin = ({ nextStep, onHide }) => {
  const passwordUse = "123qwe$%^";

  const [state, setState] = React.useState({
    password: "",
    passwordErr: false,
  });
  const [disable, setDisable] = React.useState(true);

  const changePassword = (e) => {
    const { value } = e.target;
    if (value.length <= 6) {
      setState({ ...state, password: value, passwordErr: 1 });
      setDisable(true);
    } else {
      setState({ ...state, password: value, passwordErr: 0 });
      setDisable(false);
    }
  };

  const handleStepLogin = (step) => {
    if (state.password === passwordUse) {
      onHide();
    } else {
      setState({ ...state, passwordErr: 2 });
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="d-flex">
          Mật khẩu{" "}
          <p className="text-danger">
            {state.passwordErr === 0 && ""}
            {state.passwordErr === 1 && "(Mật khẩu không hợp lệ)"}
            {state.passwordErr === 2 && "(Sai mật khẩu)"}
          </p>
        </Form.Label>
        <Form.Control
          value={state.password}
          type="password"
          onChange={(e) => changePassword(e)}
        />
      </Form.Group>
      <Form.Group
        className="mb-3 d-flex justify-content-end"
        controlId="formBasicCheckbox"
      >
        <a onClick={() => nextStep(2)}>Quên Mật Khẩu?</a>
      </Form.Group>
      <Button
        disabled={!disable ? "" : true}
        className="full-width"
        variant={!disable ? "danger" : "secondary"}
        onClick={() => handleStepLogin(2)}
        type="submit"
      >
        Đăng nhập
      </Button>
    </Form>
  );
};
export default StepTwoLogin;
