import React from "react";
import PropTypes from "prop-types";
import { BoxArrowInLeft } from "react-bootstrap-icons";

function MenItem({ icon, label }) {
  return (
    <div className="mt-menu-item d-flex">
      <div className="mr-3">{icon}</div>
      {label}
    </div>
  );
}

export default MenItem;
MenItem.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
};

MenItem.defaultProps = {
  icon: <BoxArrowInLeft />,
  text: "Trần Quốc Khánh",
};
