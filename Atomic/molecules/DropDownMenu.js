import React from "react";
import SpanTextWrap from "../atoms/SpanTextWrap";
import DropDownItem from "../atoms/DropDownItem";
import DropDownItemIcon from "../atoms/DropDownItemIcon";

import PropTypes from "prop-types";

function DropDownMenu({ note, menu, icon }) {
  return (
    <div className="dropdown">
      <span
        id="dropdownMenu "
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <SpanTextWrap note={note}></SpanTextWrap>
      </span>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
        {menu.map((item, index) => (
          <React.Fragment key={`index-${index}`}>
            {icon ? (
              <DropDownItemIcon
                key={`menu-${index}`}
                text={item.text}
                icon={item.icon}
              ></DropDownItemIcon>
            ) : (
              <DropDownItem
                key={`menu-${index}`}
                text={item.text}
              ></DropDownItem>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default DropDownMenu;
DropDownMenu.propTypes = {
  note: PropTypes.string,
  menu: PropTypes.array,
};

DropDownMenu.defaultProps = {
  note: "Trần Quốc Khánh",
  menu: [{ text: "Hà Nội", icon: "" }, { text: "Hồ Chí Minh" }],
};
