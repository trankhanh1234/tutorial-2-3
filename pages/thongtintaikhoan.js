import React from "react";
import Link from "next/link";
import Overlay from "react-bootstrap/Overlay";
import SpanTextWrap from "../Atomic/atoms/SpanTextWrap";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import DropDownItem from "../Atomic/atoms/DropDownItem";

function thongtintaikhoan(props) {
  const [show, setShow] = React.useState(false);
  const target = React.useRef(null);
  const menu = [{ text: "Hà Nội", icon: "" }, { text: "Hồ Chí Minh" }];

  return (
    <main>
      <button
        ref={target}
        className="mt-header-textWrap"
        onClick={() => setShow(!show)}
      >
        Click me!
      </button>
      <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Popover placement="bottom" id="overlay-example" {...props}>
            {menu.map((item, index) => (
              <DropDownItem
                key={`menu-${index}`}
                text={item.text}
              ></DropDownItem>
            ))}
          </Popover>
        )}
      </Overlay>
    </main>
  );
}

export default thongtintaikhoan;
