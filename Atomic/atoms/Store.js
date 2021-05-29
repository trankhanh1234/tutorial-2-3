import React from "react";
import PropTypes from "prop-types";

import { CompassFill } from "react-bootstrap-icons";

function Store({ store }) {
  return (
    <div className="mt-text-deal d-flex align-items-center my-1">
      <CompassFill />
      <p>{store}</p>
    </div>
  );
}

export default Store;
Store.propTypes = {
  store: PropTypes.string,
};

Store.defaultProps = {
  store: "Tiệm Trà Thanh Xuân - Huỳnh Văn Bánh",
};
