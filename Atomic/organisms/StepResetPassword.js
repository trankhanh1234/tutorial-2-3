import React from "react";
import { Form, Button } from "react-bootstrap";

const StepResetPassword = ({ nextStep }) => {
  const [newpassword, setNewPassword] = React.useState("");
  const [checkNew, setChecknew] = React.useState(false);

  const [password, setPassword] = React.useState("");
  const [checkPass, setCheckPass] = React.useState(0);

  const changeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  React.useEffect(() => {
    if (newpassword.length <= 6) {
      setChecknew(true);
    } else {
      setChecknew(false);
    }
  }, [newpassword]);

  React.useEffect(() => {
    if (password.length < 1) {
      setCheckPass(1);
    } else if (password !== newpassword) {
      setCheckPass(2);
    } else {
      setCheckPass(0);
    }
  }, [password]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="d-flex">
          Mật khẩu mới
          <p className="text-danger">
            {!checkNew ? "" : "(Mật khẩu không hợp lệ)"}
          </p>
        </Form.Label>
        <Form.Control
          value={newpassword}
          type="password"
          onChange={(e) => changeNewPassword(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="d-flex">
          Xác nhận mật khẩu{" "}
          <p className="text-danger">
            {checkPass === 0 && ""}
            {checkPass === 1 && "(Mật khẩu không hợp lệ)"}
            {checkPass === 2 && "(Mật khẩu không khớp)"}
          </p>
        </Form.Label>
        <Form.Control
          value={password}
          type="password"
          onChange={(e) => changePassword(e)}
        />
      </Form.Group>
      <Button
        className="full-width"
        disabled={checkPass === 0 ? "" : true}
        variant={checkPass === 0 ? "danger" : "secondary"}
        onClick={() => nextStep(3)}
        type="submit"
      >
        Đăng nhập
      </Button>
    </Form>
  );
};
export default StepResetPassword;
