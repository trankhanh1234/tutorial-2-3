import React from "react";
import { Form, Button } from "react-bootstrap";

const StepTwoLogin = ({ nextStep, onHide }) => {
  const passwordUse = "123qwe$%^";

  const [password, setPassword] = React.useState("");
  const [validation, setValidation] = React.useState(0);

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleStepLogin = (step) => {
    console.log("password", password);
    if (password === passwordUse) {
      console.log("checkpass");
      onHide();
    } else {
      console.log("checkpass");
      setValidation(2);
    }
  };

  React.useEffect(() => {
    if (password.length <= 6) {
      setValidation(1);
    } else {
      setValidation(0);
    }
  }, [password]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="d-flex">
          Mật khẩu{" "}
          <p className="text-danger">
            {validation === 0 && ""}
            {validation === 1 && "(Mật khẩu không hợp lệ)"}
            {validation === 2 && "(Sai số điện thoại hoặc mật khẩu)"}
          </p>
        </Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => changePassword(e)}
          placeholder="000000000"
        />
      </Form.Group>
      <Form.Group
        className="mb-3 d-flex justify-content-end"
        controlId="formBasicCheckbox"
      >
        <a onClick={() => nextStep(2)}>Quên Mật Khẩu?</a>
      </Form.Group>
      <Button
        disabled={validation === 0 ? "" : true}
        variant={validation === 0 ? "danger" : "secondary"}
        onClick={() => handleStepLogin(2)}
        type="submit"
      >
        Đăng nhập
      </Button>
    </Form>
  );
};
export default StepTwoLogin;
