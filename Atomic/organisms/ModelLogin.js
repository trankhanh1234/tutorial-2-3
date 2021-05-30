import React, { Children } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { X } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import StepOneLogin from "./StepOneLogin";
import StepTwoLogin from "./StepTwoLogin";
import StepResetPassword from "./StepResetPassword";
import EnterAuthCode from "./EnterAuthCode";
import StepCreateAccount from "./StepCreateAccount";
function ModelLogin(props) {
  const { onHide } = props;
  const [step, setStep] = React.useState(0);

  const [phone, setphone] = React.useState("");
  console.log("phone", phone);
  const titleModel = [
    {
      step: 0,
      title: "Chào mừng bạn đã trở lại với Meete",
      subTittle: "Săn ưu đãi khủng nào!!!",
    },
    {
      step: 1,
      title: "Chào mừng bạn đã trở lại với Meete",
      subTittle: "Đăng nhập với số điện thoại",
    },
    {
      step: 2,
      title: "Chào mừng bạn đã trở lại với Meete",
      subTittle: "Tạo mật khẩu mới cho tài khoản",
    },
    {
      step: 3,
      title: "Nhập mã xác thực",
      subTittle: "Kiểm tra mã OTP đã được gửi về email khanhtrandth@gmail.com",
    },
    {
      step: 4,
      title: "Tạo tài khoản mới",
      subTittle:
        "Số điện thoại 0347709649 chưa có tài khoản MEETE, tạo ngay nào!!!",
    },
  ];

  React.useEffect(() => {
    if (step === 0) {
      setphone("");
    }
  }, [step]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Row>
          <Col xs={1} className="d-flex">
            {step !== 0 && (
              <Button onClick={() => setStep(step - 1)} variant="light">
                <X></X>
              </Button>
            )}
          </Col>
          <Col xs={10}>
            <h4>{titleModel[step].title}</h4>
            <h6>
              {titleModel[step].subTittle} {phone}
            </h6>
          </Col>
          <Col xs={1} className="d-flex justify-content-flex-end">
            <Button onClick={onHide} variant="light">
              <X></X>
            </Button>
          </Col>
        </Row>
        <Row className="m-5">
          {step === 0 && (
            <StepOneLogin addPhone={setphone} nextStep={setStep}></StepOneLogin>
          )}
          {step === 1 && <StepTwoLogin nextStep={setStep} />}
          {step === 2 && (
            <StepResetPassword
              onHide={onHide}
              nextStep={setStep}
            ></StepResetPassword>
          )}
          {step === 3 && (
            <EnterAuthCode onHide={onHide} nextStep={setStep}></EnterAuthCode>
          )}
          {step === 4 && (
            <StepCreateAccount nextStep={setStep}></StepCreateAccount>
          )}
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ModelLogin;
