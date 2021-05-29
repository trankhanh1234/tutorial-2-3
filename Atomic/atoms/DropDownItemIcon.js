import React from "react";
import PropTypes from "prop-types";

function DropDownItem({ icon, text }) {
  return (
    <div className="dropdown-item p-3 d-flex align-items-center">
      <div className="mr-3"> {icon}</div>
      {text}
    </div>
  );
}

export default DropDownItem;
DropDownItem.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.any,
};

DropDownItem.defaultProps = {
  text: "Trần Quốc Khánh",
};
