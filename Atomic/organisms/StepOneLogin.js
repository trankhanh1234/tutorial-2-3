import React from "react";
import { Form, Button } from "react-bootstrap";

const StepOneLogin = ({ nextStep, addPhone }) => {
  const [state, setState] = React.useState({ phone: "", phoneErr: false });
  const [validation, setValidation] = React.useState(false);

  const changePhoneNumber = (e) => {
    const { value } = e.target;
    if (value.length === 10) {
      setValidation(true);
      setState({ ...state, phone: value, phoneErr: false });
    } else {
      setValidation(false);
      setState({ ...state, phone: value, phoneErr: true });
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
    const checkPhone = listPhone.includes(state.phone);
    if (checkPhone) {
      addPhone(state.phone);
      nextStep(1);
    } else {
      addPhone(state.phone);
      nextStep(4);
    }
  };

  React.useEffect(() => {}, []);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="d-flex">
          Nhập số điện thoại
          <p className="text-danger">
            {!state.phoneErr ? "" : "(Số điện thoại không hợp lệ)"}
          </p>
        </Form.Label>
        <Form.Control
          name="phone"
          type="number"
          value={state.phone}
          onChange={(e) => changePhoneNumber(e)}
          placeholder="000000000"
        />
      </Form.Group>
      <Button
        disabled={!validation}
        className="full-width"
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
