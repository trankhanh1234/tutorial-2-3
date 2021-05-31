import React from "react";
import { Form, Button } from "react-bootstrap";

const StepOneLogin = ({ nextStep, addPhone }) => {
  const [phone, setPhone] = React.useState("");
  const [validation, setValidation] = React.useState(false);

  const changePhoneNumber = (e) => {
    const { value } = e.target;
    if (value.length === 10) {
      setValidation(true);
      setPhone(value);
    } else {
      setValidation(false);
      setPhone(value);
    }
  };
  const listPhone = [
    "0966536096",
    "0966536097",
    "0966536098",
    "0966536099",
    "0966536091",
    "0966536092",
  ];
  const handleStepLogin = (step) => {
    const checkPhone = listPhone.includes(phone);
    console.log(checkPhone, "checkPhone");
    if (checkPhone) {
      addPhone(phone);
      nextStep(1);
    } else {
      addPhone(phone);
      nextStep(4);
    }
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
          name="phone"
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
