import React from "react";
import Link from "next/link";

import {
  Bell,
  Bank,
  Cart,
  Wallet,
  BoxArrowInLeft,
} from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

import Logo from "../atoms/Logo";
import SpanTextWrap from "../atoms/SpanTextWrap";
import DropDownMenu from "../molecules/DropDownMenu";
import InputSearch from "../molecules/InputSearch";
import DropDownItem from "../atoms/DropDownItem";

const HeaderNavLeft = () => {
  const [state, setState] = React.useState("Hồ Chí Minh");
  const [show, setShow] = React.useState(false);

  const target = React.useRef(null);

  const menu = [{ text: "Hà Nội", icon: "" }, { text: "Hồ Chí Minh" }];

  const handleLocation = (item) => {
    setShow(false);
    setState(item.text);
  };

  return (
    <>
      <div className="col-1"></div>
      <div className="col-2 mt-header-logo mt-header-navItem">
        <a className="navbar-brand" href="./index.html">
          <Logo></Logo>
        </a>
      </div>
      <div className="col-3 mt-header-navItem">
        <button
          ref={target}
          className="mt-header-textWrap"
          onClick={() => setShow(!show)}
        >
          {state}
        </button>
        <Overlay target={target.current} show={show} placement="bottom">
          {(props) => (
            <Popover placement="bottom" id="overlay-example" {...props}>
              {menu.map((item, index) => (
                <>
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => handleLocation(item)}
                    key={`menu-${index}`}
                  >
                    {item.text}
                  </Dropdown.Item>
                </>
              ))}
            </Popover>
          )}
        </Overlay>
      </div>
      <div className="col-6 mt-header-navItem">
        <InputSearch></InputSearch>
      </div>
    </>
  );
};
const HeaderNavRight = () => {
  const [show, setShow] = React.useState(false);

  const target = React.useRef(null);
  const menu = [
    { text: "Thông tin tài khoản", icon: <Bank /> },
    { text: "Ví", icon: <Wallet></Wallet> },
    { text: "Đăng Xuất", icon: <BoxArrowInLeft></BoxArrowInLeft> },
  ];
  const handleLocation = () => {
    setShow(false);
  };

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
          <button
            ref={target}
            className="mt-header-textWrap"
            onClick={() => setShow(!show)}
          >
            Trần Quốc Khanh
          </button>
          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
              <Popover placement="bottom" id="overlay-example" {...props}>
                {menu.map((item, index) => (
                  <>
                    <Dropdown.Item
                      onClick={handleLocation}
                      eventKey="1"
                      key={`menu-${index}`}
                    >
                      <div className="my-3 d-flex">
                        <div className="mr-3">{item.icon}</div>
                        <div>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </Dropdown.Item>
                  </>
                ))}
              </Popover>
            )}
          </Overlay>
        </div>
      </div>
    </>
  );
};

function Header() {
  const [y, setY] = React.useState(0);
  const [header, setHeader] = React.useState("");
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (window.scrollY > y) {
      if (window.scrollY >= 150) {
        setHeader("none");
      }
    } else {
      setHeader("block");
    }
    setY(window.scrollY);
  };

  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [y]);

  return (
    <header>
      <nav
        className="navbar navbar-light bg-white header mt-header-header"
        style={{ display: header, position: "fixed" }}
      >
        <div className="container-fluid">
          <div className="row flex-grow-1 undefined">
            <div className="col-12 col-sm-8 col-md-8 mt-header">
              <HeaderNavLeft></HeaderNavLeft>
            </div>
            <div className="col-12 col-sm-4 col-md-4 mt-header">
              <HeaderNavRight></HeaderNavRight>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
