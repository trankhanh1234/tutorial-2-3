import React from "react";
import PropTypes from "prop-types";

import { Tag } from "react-bootstrap-icons";

function Voucher({ voucher }) {
  return (
    <>
      <div
        className="
          mt-specical-deal
          d-flex
          align-items-center
          my-1
        "
      >
        <Tag />
        <p>{voucher}</p>
      </div>
    </>
  );
}

export default Voucher;
Voucher.propTypes = {
  voucher: PropTypes.string,
};

Voucher.defaultProps = {
  voucher: "Trần Quốc Khánh",
};
