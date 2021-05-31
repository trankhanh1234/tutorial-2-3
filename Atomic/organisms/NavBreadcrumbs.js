import React from "react";
import { HouseDoor, ArrowRight } from "react-bootstrap-icons";
import PropTypes from "prop-types";

function NavBreadcrumbs({ children }) {
  return (
    <div className="d-flex align-items-center">
      <div className="breadcrumb-nav mr-3">
        <HouseDoor></HouseDoor>
      </div>
      <div className="breadcrumb-nav mr-3 text-muted">Trang chủ</div>
      <div className="breadcrumb-item-nav mr-3">
        <ArrowRight />
      </div>
      <div className="breadcrumb-item-nav mr-3">{children}</div>
    </div>
  );
}

export default NavBreadcrumbs;
NavBreadcrumbs.propTypes = {
  children: PropTypes.string,
};

NavBreadcrumbs.defaultProps = {
  children: "Giỏ Hàng",
};
