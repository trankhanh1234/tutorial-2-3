import React from "react";
import Link from "next/link";

import {
  Bell,
  Bank,
  Cart,
  Wallet,
  BoxArrowInLeft,
  BoxArrowInRight,
} from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

import SpanTextWrap from "../atoms/SpanTextWrap";
import InputSearch from "../molecules/InputSearch";
import ModelLogin from "./ModelLogin";
import HeaderNavLeft from "../molecules/HeaderNavLeft";
import HeaderNavRight from "../molecules/HeaderNavRight";

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
