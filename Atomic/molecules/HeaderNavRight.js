import Link from "next/link";
import React from "react";
import {
  Bell,
  Bank,
  Cart,
  Wallet,
  BoxArrowInLeft,
  BoxArrowInRight,
} from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";

import SpanTextWrap from "../atoms/SpanTextWrap";
import ModelLogin from "../organisms/ModelLogin";

const HeaderNavRight = () => {
  const [show, setShow] = React.useState(false);
  const menu = [
    { text: "Thông tin tài khoản", icon: <Bank /> },
    { text: "Ví", icon: <Wallet></Wallet> },
    {
      text: "Đăng Xuất",
      icon: <BoxArrowInLeft></BoxArrowInLeft>,
    },
  ];

  return (
    <>
      <div className="col-4 d-flex flex-row">
        <Link href="/giohang">
          <div className="col mt-header-navItem">
            <SpanTextWrap>
              <Cart></Cart>
            </SpanTextWrap>
          </div>
        </Link>
        <div className="col mt-header-navItem">
          <SpanTextWrap>
            <Bell></Bell>
          </SpanTextWrap>
        </div>
      </div>
      <div className="col-5">
        <div className="col mt-header-navItem ">
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              bsPrefix="mt-header-textWrap"
              className="mt-header-textWrap"
              id="dropdown-basic"
            >
              Trần Quốc Khanh
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {menu.map((item, index) => (
                <Dropdown.Item key={`menu-${index}`}>
                  <div className="my-3 d-flex">
                    <div className="mr-3">{item.icon}</div>
                    <div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Dropdown.Item>
              ))}
              <Dropdown.Item onClick={() => setShow(true)} eventKey="1">
                <div className="my-3 d-flex">
                  <div className="mr-3">
                    <BoxArrowInRight></BoxArrowInRight>
                  </div>
                  <div>
                    <p>Đăng Nhập</p>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ModelLogin show={show} onHide={() => setShow(!show)} />
        </div>
      </div>
    </>
  );
};

export default HeaderNavRight;
