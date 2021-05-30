import React from "react";
import { Form, Button } from "react-bootstrap";

const StepOneLogin = ({ nextStep, addPhone }) => {
  const [phone, setPhone] = React.useState("");
  const [validation, setValidation] = React.useState(false);

  const changePhoneNumber = (e) => {
    setPhone(e.target.value);
  };
  const handleStepLogin = (step) => {
    addPhone(phone);
    nextStep(step);
  };
  React.useEffect(() => {
    if (phone.length === 10) {
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
        onClick={() => handleStepLogin(1)}
        type="submit"
      >
        Tiếp Tục
      </Button>
    </Form>
  );
};

export default StepOneLogin;
