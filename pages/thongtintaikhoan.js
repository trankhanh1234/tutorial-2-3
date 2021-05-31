import React from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import EnterAuthCode from "../Atomic/organisms/EnterAuthCode";
import StepCreateAccount from "../Atomic/organisms/StepCreateAccount";

const StepOneLogin = ({ nextStep }) => {
  const [phone, setPhone] = React.useState("");
  const [validation, setValidation] = React.useState(false);

  const changePhoneNumber = (e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  };
  const handleStepLogin = (step) => {
    if (account.password === password) {
      setStep(step);
      setValidation(false);
    }
    {
      setValidation(true);
    }
  };
  React.useEffect(() => {
    console.log("phone.length", phone.length);
    if (phone.length === 10) {
      console.log("validation", validation);
      setValidation(true);
    } else {
      setValidation(false);
    }
  }, [phone]);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="d-flex">
          Nhập số điện thoại
          <p className="text-danger">
            {validation ? "" : "(Số điện thoại không hợp lệ)"}
          </p>
        </Form.Label>
        <Form.Control
          value={phone}
          onChange={(e) => changePhoneNumber(e)}
          placeholder="000000000"
        />
      </Form.Group>
      <Button
        disabled={!validation}
        variant={validation ? "danger" : "secondary"}
        onClick={() => nextStep(1)}
        type="submit"
      >
        Tiếp Tục
      </Button>
    </Form>
  );
};

const StepTwoLogin = ({ nextStep }) => {
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
      nextStep(step);
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

const StepResetPassword = () => {
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
          onChange={(e) => changeNewPassword(e)}
          placeholder="000000000"
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
          onChange={(e) => changePassword(e)}
          placeholder="000000000"
        />
      </Form.Group>
      <Button
        disabled={checkPass === 0 ? "" : true}
        variant={checkPass === 0 ? "danger" : "secondary"}
        onClick={() => handleStepLogin(2)}
        type="submit"
      >
        Đăng nhập
      </Button>
    </Form>
  );
};

function thongtintaikhoan(props) {
  const [step, setStep] = React.useState(0);
  return (
    <main>
      {step === 0 && <EnterAuthCode></EnterAuthCode>}
      {step === 1 && <StepTwoLogin nextStep={setStep} />}
      {step === 2 && <StepResetPassword></StepResetPassword>}
    </main>
  );
}

export default thongtintaikhoan;
