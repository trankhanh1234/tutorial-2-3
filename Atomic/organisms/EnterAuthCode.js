import React from "react";
import { Form, Button } from "react-bootstrap";

function EnterAuthCode({ onHide }) {
  const [state, setState] = React.useState(false);
  const [auth, setAuth] = React.useState("");
  const [validation, setValidation] = React.useState(0);
  const [timeout, setTimeOut] = React.useState(30);
  const authCode = "123123";

  const changeAuth = (e) => {
    setAuth(e.target.value);
  };
  const handleTimeOut = () => {
    setTimeout(() => {
      setTimeOut(timeout - 1);
    }, 1000);
  };

  React.useEffect(() => {
    if (auth.length != 6) {
      setValidation(1);
    } else if (auth !== authCode) {
      setValidation(2);
    } else {
      setValidation(0);
    }
  }, [auth]);

  const resetAuthCode = () => {
    setState(false);
    setTimeOut(30);
  };
  React.useEffect(() => {
    if (timeout === 0) {
      setState(true);
    } else {
      handleTimeOut();
    }
  }, [timeout]);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="d-flex text-danger">
            {validation === 1 && "Mã xác thực không hợp lệ"}
            {validation === 2 && "sai mã xác thực"}
          </Form.Label>
          <Form.Control
            type="number"
            value={auth}
            onChange={(e) => changeAuth(e)}
          />
        </Form.Group>
        {!state ? (
          <Form.Group className="mb-3">
            <Form.Label className="d-flex justify-content-center">
              Không nhận được mã xác thực?
            </Form.Label>
            <Form.Label className="d-fle justify-content-center">
              Gửi lại mã xác thực trong {timeout} giây
            </Form.Label>
          </Form.Group>
        ) : (
          <Form.Group className="mb-3">
            <Form.Label className="d-flex">
              Không Nhận được mã xác thực?
            </Form.Label>
            <Form.Label
              onClick={resetAuthCode}
              className="d-flex  text-danger breadcrumb-item-nav "
            >
              Gui lai
            </Form.Label>
          </Form.Group>
        )}
        <Button
          className="full-width"
          disabled={validation !== 0}
          variant={validation === 0 ? "danger" : "secondary"}
          onClick={() => onHide()}
          type="submit"
        >
          Xác thực
        </Button>
      </Form>
    </div>
  );
}

export default EnterAuthCode;
