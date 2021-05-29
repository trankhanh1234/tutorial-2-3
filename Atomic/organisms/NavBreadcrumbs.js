import React, { Children } from "react";
import { HouseDoor, ArrowRight } from "react-bootstrap-icons";

function NavBreadcrumbs({ children }) {
  return (
    <div className="d-flex">
      <div className="breadcrumb-nav mr-3">
        <HouseDoor></HouseDoor>
      </div>
      <div className="breadcrumb-nav mr-3">Trang chủ</div>
      <div className="breadcrumb-item-nav mr-3">
        <ArrowRight />
      </div>
      <div className="breadcrumb-item-nav mr-3">{children}</div>
    </div>
  );
}

export default NavBreadcrumbs;
