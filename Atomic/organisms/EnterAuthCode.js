import React from "react";
import { Form, Button } from "react-bootstrap";

function EnterAuthCode({ onHide }) {
  const [auth, setAuth] = React.useState("");
  const [validation, setValidation] = React.useState(0);
  const authCode = "123123";
  const changeAuth = (e) => {
    setAuth(e.target.value);
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
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="d-flex text-danger">
            {validation === 1 && "Mã xác thực không hợp lệ"}
            {validation === 2 && "sai mã xác thực"}
          </Form.Label>
          <Form.Control value={auth} onChange={(e) => changeAuth(e)} />
        </Form.Group>
        <Button
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
