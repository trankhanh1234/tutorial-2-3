import React from "react";
import Logo from "../atoms/Logo";
import Dropdown from "react-bootstrap/Dropdown";

import InputSearch from "./InputSearch";

const HeaderNavLeft = () => {
  const [state, setState] = React.useState("Hồ Chí Minh");

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
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            bsPrefix="mt-header-textWrap"
            className="mt-header-textWrap"
            id="dropdown-basic"
          >
            {state}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {menu.map((item, index) => (
              <Dropdown.Item
                onClick={() => handleLocation(item)}
                key={`menu-${index}`}
              >
                {item.text}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="col-6 mt-header-navItem">
        <InputSearch></InputSearch>
      </div>
    </>
  );
};

export default HeaderNavLeft;
